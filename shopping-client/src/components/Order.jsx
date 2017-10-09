import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Order extends Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div className="form">
                <form>
                    <h1>Customer information</h1>
                    <span>
                        <input type="text" className="email" placeholder="Email" name="email" value={this.state.email} />
                    </span>
                    <h2>Shipping address</h2>
                    <span>
                        <input type="text" className="name" placeholder="First name" name="first name" value={this.state.firstname} />
                        <input type="text" className="name" placeholder="Last name" name="last name" value={this.state.lastname} />
                    </span>
                    <div>
                        <input type="text" className="add" placeholder="Address" name="address" value={this.state.address} />
                        <input type="text" className="add" placeholder="Apt,suite,etc." name="apt,suite,etc." value={this.state.aptsuiteetc} />
                    </div>
                    <div>
                        <input type="text" className="city" placeholder="City" name="city" value={this.state.city} />
                    </div>
                    <div>
                        <input type="text" className="County" placeholder="County" name="county" value={this.state.county} />
                        <input type="text" className="County" placeholder="State" name="state" value={this.state.state} />
                        <input type="text" className="County" placeholder="Zip code" name="zip code" value={this.state.zipcode} />
                    </div>
                    <div>
                        <input type="text"  className="num" placeholder="Phone" name="phone" value={this.state.phone} />
                    </div>
                        <button className="btn">Continue to shipping method</button>



                </form>


            </div>

        )
    }
    }
export default Order;