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
    <div>
      <div class="card border-primary mb-3">
        <img class="card-img-top" src={props.item.product_image} alt="Card image cap" />
        <div class="card-header">{props.item.product_name}</div>
        <div class="card-body text-primary">
          <p class="card-text">{props.item.product_detail}</p>
          <h5 class="card-title">{props.item.price} Bath</h5>
          <a href="#" className="btn btn-success">Buy</a>
        </div>
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
        <Title name={`User: ${this.state.user.name}`} />
        <div className="row">
          <div className="col-sm-6">
            <FormCreateProduct />
          </div>
          <div className="col-sm-6">
            <ProductCard item={this.state.products[0]} />
          </div>
        </div>
        <Title name="Product list" />
        <div className="row">
          {this.state.products.map(
            (product) => (
              <div className="col-sm-3">
                <ProductCard key={product.id} item={product} />
              </div>
            )
          )}
        </div>

      </div>
    )
  }
}

export default ProductList