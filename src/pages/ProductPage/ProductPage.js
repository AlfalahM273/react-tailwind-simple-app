
import React from 'react';
import axios from 'axios';
import {
    Link
  } from "react-router-dom";

class ProductPage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        this.initData();
    }

    initData = () => {
        axios.get(`http://localhost:8080/merchant/product/`)
            .then(res => {
                const products = res.data.products;
                this.setState({ products });
            })
    }

    
    deleteProduct = (id) => {
      axios.delete(`http://localhost:8080/merchant/product/${id}`)
          .then(res => {
              this.initData()
          })
    }

    render(){
        return (
            <React.Fragment>
            <Link to="/product/create">
              <button
                type="submit"
                className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                  Add Product
              </button>
            </Link>
            
            <div className=" my-2 flex flex-col">

              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">

                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Description
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Base Price
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Stock
                          </th>
                          <th scope="col" className="relative px-6 py-3">
                            <span className="sr-only">Edit</span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {this.state.products.map((product) => (
                          <tr key={product._id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.name}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                {product.is_active ? 
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                        Active
                                    </span>
                                    :
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-danger-100 text-danger-800">
                                        Inactive
                                    </span>
                                }
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.base_price}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.stock}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <Link to={`/product/${product._id}`}>
                                <button
                                  type="submit"
                                  className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Edit
                                </button>
                              </Link>
                              <button
                                type="submit"
                                className="group relative flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                onClick={() => this.deleteProduct(product._id)}
                              >
                                  Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            </React.Fragment>
          )
    }
}

export default ProductPage
