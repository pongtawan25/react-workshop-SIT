import React from 'react'
import './App.css'
import axios from 'axios'
import FormCreateProduct from './components/FormCreateProduct'

const Title = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const ProductCard = (props) => {
  return (
    <div className="card text-white bg-dark mb-3" style={{ width: 400 }}>
      <img className="card-img-top" src={props.item.product_image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{props.item.product_name}</h5>
        <p className="card-text">{props.item.product_detail}</p>
        <p className="card-text">{props.item.price} Bath</p>
        <a href="#" className="btn btn-primary">Go Somewhere</a>
      </div>
    </div>
  )
}

class ProductList extends React.Component {
  state = {
    products: [
      {
        name: "Oreo",
        description: "Biscuit 137g",
        price: "270.00"
      },
      {
        name: "3D Mask ผู้ใหญ่",
        description: "3D Mask ผู้ใหญ่บรรจุ 4 ชิ้น",
        price: "129.00"
      },
      {
        name: "กระเพรา",
        description: "กระเพรา 4 ชิ้น",
        price: "10.50"
      },
      {
        name: "Bar-B-Plaza E-Vouncher",
        description: "e-vouncher 100.-",
        price: "85.00"
      }
    ],
    user: {
      name: "Pongtawan"
    }
  }

  componentDidMount = () => {
    axios.get(
      'https://dry-scrubland-02499.herokuapp.com/api/v1/products'
    ).then((response) => {
      console.log('response data: ', response)
      this.setState({
        products: response.data
      })
    })
  }

  render() {
    return (
      <div className="container">
        <FormCreateProduct/>
        <Title name={this.state.user.name}></Title>
        <Title name="New Product"></Title>
        <ProductCard item={this.state.products[0]} />
        <Title name="Product List"></Title>
        <div>
          {this.state.products.map((product) => (
            <ProductCard key={product.id} item={product} />
          ))}
        </div>
      </div>
    )
  }
}

export default ProductList