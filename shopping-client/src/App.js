import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Product from './components/Product';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Order from './components/Order';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={Home} />
                        {/*<Route exact path="/" component={Product} />*/}
                        <Route exact path='/product' component={ProductList} />
                        <Route exacr path='/cart' component={Cart} />
                        <Route exact path='/checkout' component={Order} />
                    </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App;