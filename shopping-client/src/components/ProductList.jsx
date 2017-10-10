import React, { Component } from 'react';
import productApi from '../api/product';
class ProductList extends Component {
    constructor() {
        super();
        this.state = {
            productList: []
        };

        productApi.getProducts()
            .then((productList)=> {
                this.setState({
                    productList: productList
                });
            })
    }

    render() {
        const productList = this.state.productList;

        return (
            <div >
                {
                    productList.map((product) =>
                        (
                            <div key={product.id}>
                                <img src={product.image}></img>
                                <a href="#" className="btn-add">Add to Cart</a>
                            </div>
                        )
                    )

                }
            </div>
        );
    }
}
export default ProductList;