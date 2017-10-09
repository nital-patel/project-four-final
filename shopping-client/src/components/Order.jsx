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
                    <div className="email">
                        <input type="text" placeholder="Email" name="email" value={this.state.email} />
                    </div>
                    <h2>Shipping address</h2>
                    <div className="name">
                        <input type="text" placeholder="First name" name="first name" value={this.state.firstname} />
                        <input type="text" placeholder="Last name" name="last name" value={this.state.lastname} />
                    </div>
                    <div>
                        <input type="text" placeholder="Address" name="address" value={this.state.address} />
                        <input type="text" placeholder="Apt,suite,etc." name="apt,suite,etc." value={this.state.aptsuiteetc} />
                    </div>
                    <div>
                        <input type="text" placeholder="City" name="city" value={this.state.city} />
                    </div>
                    <div>
                        <input type="text" placeholder="County" name="county" value={this.state.county} />
                        <input type="text" placeholder="State" name="state" value={this.state.state} />
                        <input type="text" placeholder="Zip code" name="zip code" value={this.state.zipcode} />
                    </div>
                    <div>
                        <input type="text" placeholder="Phone" name="phone" value={this.state.phone} />
                    </div>



                </form>


            </div>

        )
    }
    }
export default Order;