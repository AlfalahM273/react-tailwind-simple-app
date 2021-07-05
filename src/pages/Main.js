import React from 'react';
import ProductPage from './ProductPage/ProductPage';
import CreateProductPage from './ProductPage/CreateProductPage';
import DetailProductPage from './ProductPage/DetailProductPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class MainPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            content : "",
            alert : "",
            posts : [],
        }
    }
    
    componentDidMount() {
    }

    render(){
        
        return (
            <Router>
                <div className="container mx-auto bg-gray-50">
                    <div className="grid grid-cols-3 gap-4">
                        <div className="col">
                            <Link to="/">Home</Link>
                        </div>
                        <div className="col">
                            <Link to="/product">Products</Link>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <Switch>
                        <Route exact path="/">
                            Home
                        </Route>
                        <Route exact path="/product">
                            <ProductPage />
                        </Route>
                        <Route exact path="/product/create">
                            <CreateProductPage />
                        </Route>
                        <Route exact path="/product/:id">
                            <DetailProductPage />
                        </Route>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default MainPage
