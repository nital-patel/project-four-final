import React, { Component } from 'react';
import productApi from '../api/product';

class ProductData extends Component {
    constructor(props) {
        super(props);

        // alert(props.match.params.id);

        this.state = {
            productData: {}
        };

        productApi.getProduct(props.match.params.id)
            .then((productData)=> {

                console.log(productData);
                this.setState({
                    productData: productData
                });
            })
    }

    render() {
        const productData = this.state.productData;

        return (
            <div key={productData.id}>
                <img className="img" src={productData.image}></img>
                <p>{productData.description}</p>
                <p>price: {productData.price}</p>
                <p>name: {productData.name}</p>
                <a href="#" className="btn-add">Add to Cart</a>
            </div>
        );
    }
}
export default ProductData;