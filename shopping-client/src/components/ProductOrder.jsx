import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductOrder extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="order">
                <label className="product_header">
                    <h3>Cart</h3>
                </label>
                <div className="Order-list">
            <label className="product_detail">
            </label>
                </div>
                <label>
                    <button>Add</button>
                    <button>delete</button>
                </label>

            </div>



        )
    }
}
export default ProductOrder;