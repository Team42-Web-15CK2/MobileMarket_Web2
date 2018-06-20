import React, {Component} from 'react';
import CartScrollBar from './CartScrollBar';
import Narbar from './Narbar';
import EmptyCart from '../empty-states/EmptyCart';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import {findDOMNode} from 'react-dom';
import axios from 'axios';


export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCart: false,
            cart: this.props.cartItems,
            mobileSearch: false,
            user:null
        };
        const value = $.cookie("jwt");
        if (value !== undefined) {
            const options = {
                method: 'GET',
                headers: {'Authorization': 'bearer ' + value},
                url: '/user/profile',
            };
            axios(options).then(response => {
                this.setUser(response.data);
            })
                .catch((error) => {
                    console.log('error 3 ' + error);
                });
        }
    }

    setUser(user) {
        this.setState({
            user
        });
    }

    handleCart(e) {
        e.preventDefault();
        this.setState({
            showCart: !this.state.showCart
        })
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    handleMobileSearch(e) {
        e.preventDefault();
        this.setState({
            mobileSearch: true
        })
    }

    handleSearchNav(e) {
        e.preventDefault();
        this.setState({
            mobileSearch: false
        }, function () {
            this.refs.searchBox.value = "";
            this.props.handleMobileSearch();
        })
    }

    handleClickOutside(event) {
        const cartNode = findDOMNode(this.refs.cartPreview);
        const buttonNode = findDOMNode(this.refs.cartButton);
        if (cartNode.classList.contains("active")) {
            if (!cartNode || !cartNode.contains(event.target)) {
                this.setState({
                    showCart: false
                })
                event.stopPropagation();
            }
        }
    }

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside.bind(this), true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside.bind(this), true);
    }

    handleLogOut() {
        $.cookie("jwt", '');
        location.reload();
    }

    render() {
        let cartItems;
        cartItems = this.state.cart.map(product => {
            return (
                <li className="cart-item" key={product.name}>
                    <img className="product-image" src={product.image}/>
                    <div className="product-info">
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">giá:{product.price}</p>
                    </div>
                    <div className="product-total">
                        <p className="quantity">số lượng:{product.quantity}</p>
                        <p className="amount">{product.quantity * product.price}</p>
                    </div>
                    <a className="product-remove" href="#"
                       onClick={this.props.removeProduct.bind(this, product.id)}>×</a>
                </li>
            )
        });
        let view;
        if (cartItems.length <= 0) {
            view = <EmptyCart/>
        } else {
            view = <CSSTransitionGroup transitionName="fadeIn" transitionEnterTimeout={500} transitionLeaveTimeout={300}
                                       component="ul" className="cart-items">{cartItems}</CSSTransitionGroup>
        }
        return (
            <header>
                <div className="container">
                    <div className="brand">
                        <h2> Mobile-Market </h2>
                    </div>

                    <div className="search">
                        <a className="mobile-search" href="#" onClick={this.handleMobileSearch.bind(this)}><img
                            src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
                            alt="search"/></a>
                        <form action="#" method="get"
                              className={this.state.mobileSearch ? "search-form active" : "search-form"}>
                            <a className="back-button" href="#" onClick={this.handleSearchNav.bind(this)}><img
                                src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                                alt="back"/></a>
                            <input type="search" ref="searchBox" placeholder="Search" className="search-keyword"
                                   onChange={this.props.handleSearch}/>
                        </form>
                    </div>

                    <div className="cart">
                        <div className="cart-info">
                            <table>
                                <tbody>
                                <tr>
                                    <td>Số lượng</td>
                                    <td>:</td>
                                    <td><strong>{this.props.totalItems}</strong></td>
                                </tr>
                                <tr>
                                    <td>Tổng</td>
                                    <td>:</td>
                                    <td><strong>{this.props.total}</strong></td>
                                    <td> vnd</td>
                                </tr>
                                <tr >
                                    <td>Hello</td>
                                    <td>:</td>
                                    <td>
                                        <strong>{this.state.user ? this.state.user.name  : 'guest'}</strong>
                                        <a href onClick={this.handleLogOut}> {this.state.user ?  'LogOut' : ''}</a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <a className="cart-icon" href="#" onClick={this.handleCart.bind(this)} ref="cartButton">
                            <img className={this.props.cartBounce ? "tada" : " "}
                                 src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
                                 alt="Cart"/>
                            {this.props.totalItems ? <span className="cart-count">{this.props.totalItems}</span> : ""}
                        </a>

                        <div className={this.state.showCart ? "cart-preview active" : "cart-preview"} ref="cartPreview">
                            <CartScrollBar>
                                {view}
                            </CartScrollBar>
                            <div className="action-block">
                                <button type="button" className={this.state.cart.length > 0 ? " " : "disabled"}>PROCEED
                                    TO CHECKOUT
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Narbar/>
            </header>
        )
    }

}
