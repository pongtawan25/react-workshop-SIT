import React, { Component } from 'react'

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

    render() {
        return (
            <div>
                <div>
                    <label htmlFor="">Name: {this.state.product_name}</label>
                    <br/>
                    <input type="text" value={this.state.product_name} onChange={this.handleChangeProductName} />
                </div>
                <div>
                    <input type="text" value={this.state.product_detail} />
                </div>

            </div>
        )
    }
}
