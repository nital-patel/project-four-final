import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProductList extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="Product-list">
                <form >
                <input type="submit" value="Add to cart" className="btn-add" />
                </form>
            </div>

        )
    }
}
export default ProductList;