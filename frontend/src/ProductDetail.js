import React, {Component} from 'react';
import ReactDOM, {render} from 'react-dom';
import axios from 'axios';
import Header from './components/Header';
import Products from './components/Product';
import Pagination from './components/Pagination';
import Footer from './components/Footer';``
import Narbar from './components/Narbar';
import QuickView from './components/QuickView';
import config from './config/config';
import './scss/style.scss';
import Product from './components/Product';

export default class ProductDetail extends Component{
	constructor(){
		super();
		let cartValue = sessionStorage.getItem( "cart" );
        let totalItems = sessionStorage.getItem( "totalItems" );
        let totalAmount = sessionStorage.getItem( "totalAmount" );
		this.state = {
			products: [],
			cart: cartValue ? JSON.parse( cartValue ) : [],
            totalItems: totalItems ? totalItems : 0,
            totalAmount: totalAmount ? totalAmount : 0,
			term: '',
			category: '',
			cartBounce: false,
			quantity : 1,
			quickViewProduct: {},
			modalActive: false
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.handleMobileSearch = this.handleMobileSearch.bind(this);
		this.handleCategory = this.handleCategory.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.sumTotalItems = this.sumTotalItems.bind(this);
		this.sumTotalAmount = this.sumTotalAmount.bind(this);
		this.checkProduct = this.checkProduct.bind(this);
		this.updateQuantity = this.updateQuantity.bind(this);
		this.handleRemoveProduct = this.handleRemoveProduct.bind(this);
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
	}
	// Fetch Initial Set of Products from external API
	getProducts(){
		//For Localhost use the below url
		const url = config.url + "/api/product/ "+ this.props.match.params.id;

		// For Production use the below url
		//const url="https://quarkbackend.com/getfile/sivadass/products";

		axios.get(url)
			.then(response => {
				this.setState({
					products : response.data
				})
			})
	}
	componentWillMount(){
		this.getProducts();
	}

	// Search by Keyword
	handleSearch(event){
		this.setState({term: event.target.value});
	}
	// Mobile Search Reset
	handleMobileSearch(){
		this.setState({term: ""});
	}
	// Filter by Category
	handleCategory(event){
		this.setState({category: event.target.value});
		console.log(this.state.category);
	}
	// Add to Cart
	handleAddToCart(selectedProducts){
		let cartItem = this.state.cart;
		let productID = selectedProducts.id;
		let productQty = selectedProducts.quantity;
		if(this.checkProduct(productID)){
			let index = cartItem.findIndex((x => x.id == productID));
			cartItem[index].quantity = Number(cartItem[index].quantity) + Number(productQty);
			this.setState({
				cart: cartItem
			})
		} else {
			cartItem.push(selectedProducts);
		}
		this.setState({
			cart : cartItem,
			cartBounce: true,
		});
		sessionStorage.setItem( "cart", JSON.stringify( this.state.cart ) );
		setTimeout(function(){
			this.setState({
				cartBounce:false,
				quantity: 1
			});
			console.log(this.state.quantity);
			console.log(this.state.cart);
    }.bind(this),1000);  
		this.sumTotalItems(this.state.cart);
		this.sumTotalAmount(this.state.cart);
	}
	handleRemoveProduct(id, e){
		let cart = this.state.cart;
		let index = cart.findIndex((x => x.id == id));
		cart.splice(index, 1);
		this.setState({
			cart: cart
		})
		this.sumTotalItems(this.state.cart);
		this.sumTotalAmount(this.state.cart);
		e.preventDefault();
	}
	checkProduct(productID){
		let cart = this.state.cart;
		return cart.some(function(item) {
			return item.id === productID;
		}); 
	}
	sumTotalItems(){
        let total = 0;
        let cart = this.state.cart;
		total = cart.length;
		this.setState({
			totalItems: total
		})
    }
	sumTotalAmount(){
        let total = 0;
        let cart = this.state.cart;
        for (var i=0; i<cart.length; i++) {
            total += cart[i].price * parseInt(cart[i].quantity);
        }
		this.setState({
			totalAmount: total
		})
    }

	//Reset Quantity
	updateQuantity(qty){
		console.log("quantity added...")
		this.setState({
				quantity: qty
		})
	}
	// Open Modal
	openModal(product){
		this.setState({
			quickViewProduct: product,
			modalActive: true
		})
	}
	// Close Modal
	closeModal(){
		this.setState({
			modalActive: false
		})
	}
	
	render(){

		let product = this.state.products[0] || null
		
		if (!product) {
			
			return (
				<div><h1>no information</h1></div>
			)
		}

		return(
			<div className="container">
				
				<Header
					cartBounce={this.state.cartBounce}
					total={this.state.totalAmount}
					totalItems={this.state.totalItems}
					cartItems={this.state.cart}
					removeProduct={this.handleRemoveProduct}
					handleSearch={this.handleSearch}
					handleMobileSearch={this.handleMobileSearch}
					handleCategory={this.handleCategory}
					categoryTerm={this.state.category}
					updateQuantity={this.updateQuantity}
					productQuantity={this.state.moq}
				/>

				<div className="productdetail">
					<div className="detail">
						<img className="detailimage" src={product.image_url} alt={this.state.products.name}/>
					</div>
					<div className="detail">
						<div className="detailinfo">
							<h3> Tên sản phẩm: <p className="title"> {product.name} </p> </h3>
						</div>
						<div className="detailinfo">
							<h3> Thông tin chi tiết: <br /> <p className="title">{product.description}</p> </h3>
						</div>
						<div className="detailinfo">
							<h3>  Giá bán: <p className="title"> {product.price} </p> </h3>
						</div>
						<div className="detailinfo">
							<h3> Số lượng còn : <p className="title"> {product.remaining_quantity} </p> </h3>
						</div>
					</div>
				</div>
				
				
				<Footer />
				<QuickView product={this.state.quickViewProduct} openModal={this.state.modalActive} closeModal={this.closeModal} />
			</div>
		)
	}
}

