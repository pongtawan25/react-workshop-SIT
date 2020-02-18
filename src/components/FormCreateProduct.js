import React, { Component } from 'react'
import Axios from 'axios';
import './style.css'

export default class FormCreateProduct extends Component {
  state = {
    product_name: '',
    product_detail: '',
    price: 0.00
  }
  
  handleChangeProductName = (event) => {
    this.setState({
      product_name: event.target.value
    })
  }

  handleChangeProductDetail = (event) => {
    this.setState({
      product_detail: event.target.value
    })
  }
  
  handleChangeProductPrice = (event) => {
    this.setState({
      price: event.target.value
    })
  }

  handleSubmitForm = (event) => {
    event.preventDefault()
    Axios.post(
      'https://dry-scrubland-02499.herokuapp.com/api/v1/products',
      {
        productName: this.state.product_name,
        productDetail: this.state.product_detail,
        productImage: 'https://th-test-11.slatic.net/original/f45c982578504ff2b4a5b0887dc54c2f.jpg_200x200Q100.jpg_.webp',
        price: this.state.price,
      }
    ).then(() => {
      alert('success!!!!')
    }).catch(() => {
      alert('fail!!!')
    })

  }

  render() {
    return (
      <form onSubmit={this.handleSubmitForm} class="form-submit-card">
        <h3>Create product form</h3>
        <div className="form-field field-name">
          <label htmlFor="">name<span className="text-danger">*</span>: </label>
          {this.state.product_name}
          <br />
          <input 
            type="text" 
            value={this.state.product_name}
            onChange={this.handleChangeProductName}
            required
          />
        </div>
        <div className="form-field field-price">
          <label htmlFor="">price<span className="text-danger">*</span>: </label>
          {this.state.price}
          <br/>
          <input 
            type="number" 
            value={this.state.price}
            onChange={this.handleChangeProductPrice}
            min="0"
            max="10000000"
            required
          />
        </div>
        <div className="form-field field-detail">
          <label htmlFor="">detail<span className="text-danger">*</span>:</label>
          {this.state.product_detail}
          <br />
          <textarea 
            name=""
            id=""
            rows="4"
            value={this.product_detail}
            onChange={this.handleChangeProductDetail}
            required
          ></textarea>
        </div>
        <div style={{ marginTop: '5px', textAlign: 'right' }}>
          <button class="btn button-pink">Create a product</button>
        </div>
      </form>
    )
  }
}