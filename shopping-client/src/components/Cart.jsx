import React, { Component } from 'react';

class ProductOrder extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="order">
                <label className="product_header">

                </label>
                <h3>Cart</h3>
                <div className="Order-list">
                    <label className="product_detail">
                    </label>
                </div>
                <label>
                    <button>Add</button>
                    <button>Delete</button>
                </label>
            </div>
        );
    }
}
export default ProductOrder;