import React, { Component } from 'react';
import Currency from "../currencyFormat";
import Fade from "react-reveal/Flip";
import { connect } from 'react-redux';
import {fetchProducts} from '../actions/productActions';

class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            product: null,
        };
    }
    componentDidMount(){
        this.props.fetchProducts();
    }
    render() {
        return (
            <div>
                <Fade bottom cascade>
                    {
                        !this.props.products ? 
                        (<div>Loading...</div>):
                        (<ul className="products">
                    {this.props.products.map((product)=>(
                    <li key={product._id}>
                     <div className="product">
                            <a href={'#' + product.id}>
                                <img src={product.image} alt={product.title}></img>
                                <p>{product.title}</p>
                            </a>
                            <div className="price">
                            <div>{product.price}</div>
                            <button onClick={() => this.props.addToCart(product)} className="button-primary">Add To Cart</button>
                            </div>
                      </div>
                    </li>
                    ))}
                </ul>)
                    }
                
                </Fade>
            </div>
        );
    } 
}

export default connect((state)=>({products: state.products.items}),{fetchProducts})(Products);