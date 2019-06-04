import React, { Component } from 'react';
import Item from './components/item'


const deepCopy = (object) => {
  let result = JSON.stringify(object)
  return JSON.parse(result)
}

const DUMMY_ITEM = [
  {
    id: 1,
    name: 'Sepatu',
    quantity: 1,
    price: 1000
  },
  {
    id: 2,
    name: 'Topi',
    quantity: 2,
    price: 1500
  },
  {
    id: 3,
    name: 'Dompet',
    quantity: 3,
    price: 2000
  },
  
]

class Counter extends Component {
  state = { 
    cart: []
   }

  addCart = () => {
    let currentCart = []
    const cartId = this.state.cart.map(item => item.id)
    const filterredItems = DUMMY_ITEM.filter(item => !cartId.includes(item.id))
    if(filterredItems.length) {   
      currentCart = [...this.state.cart,filterredItems[0]] // Harus menggunakan Assingment, karena non assingment like push dll tidak reactive di svelte
      let tempState = deepCopy(this.state)
      tempState.cart = currentCart
      this.setState(tempState)
    }
    else
      alert('Barang Habis')
  }

  removeCartItem = (id) => {
    let tempState = deepCopy(this.state)
    tempState.cart = tempState.cart.filter(item => item.id !== id)

    this.setState(tempState)
  }

  increaseCartItemQTY = (id) => {
    let tempState = deepCopy(this.state)
    tempState.cart = tempState.cart.map(item => {
      if(item.id === id)
        item.quantity++
      return item
    })
    this.setState(tempState)
  }

  decreaseCartItemQTY = (id) => {
    let tempState = deepCopy(this.state)
    tempState.cart = tempState.cart.map(item => {
      if(item.id === id && item.quantity>0)
        item.quantity--
      return item
    })
    this.setState(tempState)
  }

  render() {
    
    const total = this.state.cart.reduce((sum, item) => sum + (item.quantity*item.price) ,0)
    
    return (
      <div className="cart" >
        <h1>Simple Cart on ReactJS</h1>
        <div className="cart-head">
          <div className="info">
          Total Barang : {this.state.cart.length}
          </div>
          <button className="add-cart" onClick={ this.addCart }>Tambah Barang</button>
        </div>

        {this.state.cart.map(item => {
          return <Item key={item.id} value={item} onDelete={ this.removeCartItem } onIncrease={ this.increaseCartItemQTY } onDecrease={ this.decreaseCartItemQTY }>Test</Item>
        })}

        <p className="total">Total : {total}</p>
      </div> 
      );
  }


}
 
export default Counter;