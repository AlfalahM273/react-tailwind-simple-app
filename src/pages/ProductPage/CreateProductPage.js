import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

class CreateProductPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
          item: {
            name: "",
            description: "",
            basePrice: 0,
            stock: 0,
          }
      }
    }
    
    componentDidMount() {
    }

    
    updateValue = (e) => {
      const { name, value } = e.target;
      const item = this.state.item;
      item[name] = value;
      this.setState({ item });
    }

    createItem = () => {
        const item = this.state.item;
        axios.post(`http://localhost:8080/merchant/product`, item)
            .then(res => {
                this.props.history.push(`/product`);
            });        
    }

    render(){
        return (
            <React.Fragment>      
            <div className="mt-10 sm:mt-0">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
              </div>
              <div className="mt-5 md:mt-0 md:col-span-1">
                  <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-medium leading-6 text-gray-900">Add Product</h3>
                    </div>
                      <div className="mt-2 grid">
                        <div className="col-span-12">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Name
                          </label>
                          <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            name="name" 
                            value={this.state.item.name} 
                            onChange={this.updateValue}
                          />
                        </div>

                        <div className="col-span-12">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Description
                          </label>
                          <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            name="description" 
                            value={this.state.item.description} 
                            onChange={this.updateValue}
                          />
                        </div>

                        <div className="col-span-12">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Base Price
                          </label>
                          <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            name="basePrice" 
                            value={this.state.item.basePrice} 
                            onChange={this.updateValue}
                          />
                        </div>

                        <div className="col-span-12">
                          <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                            Stock
                          </label>
                          <input
                            type="text"
                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            name="stock" 
                            value={this.state.item.stock} 
                            onChange={this.updateValue}
                          />
                        </div>

                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        onClick={this.createItem}
                      >
                        Save
                      </button>
                    </div>
                  </div>
              </div>
              <div className="md:col-span-1">
              </div>
            </div>
          </div>
            </React.Fragment>
          )
    }
}

export default withRouter(CreateProductPage)

