import React, { Component } from 'react';

class Item extends Component {
  state = { 
    value: this.props.value
   }

  handleDelete = () => {
    const currentId = this.state.value.id
    this.props.onDelete(currentId)
  }

  handleIncrease = () => {
    const currentId = this.state.value.id
    this.props.onIncrease(currentId)
    this.refresh()
  }

  handleDecrease = () => {
    const currentId = this.state.value.id
    this.props.onDecrease(currentId)
    this.refresh()
  }

  refresh = () => {
    this.setState({ 
      value: this.props.value
    })
  }

  render() { 
    return (
      <div>
        <div className="cart-item">
          <span className="title">{this.state.value.name}</span>
          <span>
            <button onClick={ this.handleDecrease }>-</button>
            {this.state.value.quantity}
            <button onClick={ this.handleIncrease }>+</button>
          </span>
          <span className="cart-item-remove" onClick={ this.handleDelete }>Hapus</span>
        </div>
        -- Harga Satuan : {this.state.value.price}
        <br />
        -- Harga : {this.state.value.price * this.state.value.quantity}
        <hr />
      </div>
    );
  }
}
 
export default Item;