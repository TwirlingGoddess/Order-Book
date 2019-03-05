import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { store } from '../../index.js';
import { updateUser, saveOrder, displayOrders } from '../../actions';
import './Form.css';

export class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      type: '',
      price: 0,
      volume: 0,
      total: 0,
    }
  }

  inputSubmit(e) {
    e.preventDefault();
    const newPHP = Number.parseFloat(this.props.user.PHP).toFixed(5) - Number.parseFloat((this.state.price)*2.85714286).toFixed(5)
    const newBTC = Number.parseFloat(this.props.user.TestCoin).toFixed(5) - Number.parseFloat(this.state.price).toFixed(5)
    const newBalances = [{symbol: "PHP", balance: newPHP}, {symbol: "TestCoin", balance: newBTC}]
    this.props.updateUser(newBalances)
    this.props.saveOrder(this.state)
  }

  updateState(e) {
    const { name, value} = e.target
    if(name === "total" || name === "volume") {
      this.setState({
        volume: value,
        total: value
      })
    } else {
      this.setState({
        [ name ]: value
      })
    }
  }

  render() {

    return(
      <div className="Form">
        <form onSubmit={e => this.inputSubmit(e)}>
          <label htmlFor="dropdown">You Buying or Selling?</label>
          <select id="dropdown" name="type" onChange={e => this.updateState(e)}>
            <option >choose one</option>
            <option value="buy" >Buy</option>
            <option  value="sell" >Sell</option>
          </select>

          <label htmlFor="price">Price?</label>
          <input id="price" 
            name="price" 
            type="number" 
            placeholder="000.00000"
            onChange={e => this.updateState(e)}
            value={this.state.price}/>    

          <label htmlFor="volume">Volume?</label>
          <input id="volume" 
            name="volume" 
            type="number" 
            placeholder="000.00000"
            onChange={e => this.updateState(e)}
            value={this.state.volume}/>
         
          <label htmlFor="total">Total?</label>
          <input id="total" 
            name="total" 
            type="number" 
            placeholder="1 000.00000"
            onChange={e => this.updateState(e)}
            value={this.state.volume}/>

          <button>submit</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  Orders: state.Orders
})

export const mapDispatchToProps = dispatch => ({
  updateUser: newBalances => dispatch(updateUser(newBalances)),
  saveOrder: order => dispatch(saveOrder(order)),
})

Form.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  saveOrder: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
