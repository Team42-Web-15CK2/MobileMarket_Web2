import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom'


export default class Narbar extends Component{

    render(){
        return(
            <div class="menu">
                <Link to ="/"><a>Home</a></Link>
                <Link to ="/catalog/dien-thoai"><a>Điện thoại</a></Link>
                <Link to ="/catalog/laptop"><a>Laptop</a></Link>
                <Link to ="/contact"><a>Contact</a></Link>
                <Link to ="/register"><a>Register</a></Link>
                <Link to ="/login"><a>Login</a></Link>
              
            </div>          
        )
        
    }
}

