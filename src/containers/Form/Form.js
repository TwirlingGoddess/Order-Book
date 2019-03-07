import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser, updateActive, removeOrder, addOrder } from '../../actions';
import { classifyActive } from '../../helpers/helpers';
import { store } from '../../index.js'
import './Form.css';

export class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      type: '',
      price: '',
      volume: '',
      total: ''
    }
  }

  inputSubmit(e) {
    e.preventDefault();
    const newPHP = Number.parseFloat(this.props.user.PHP).toFixed(5) - Number.parseFloat((this.state.price)*2.85714286).toFixed(5);
    const newBTC = Number.parseFloat(this.props.user.TestCoin).toFixed(5) - Number.parseFloat(this.state.price).toFixed(5);
    const newBalances = [{symbol: "PHP", balance: newPHP}, {symbol: "TestCoin", balance: newBTC}];
    this.props.updateUser(newBalances);
    this.updateStore();
  };

  updateState(e) {
    const { name, value} = e.target;
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
  };

  // create clear input fields function

  // create updateStore func that has a conditional connected to store
  updateStore() {
    return store.getState().orders.find(order => {
      if (this.state.type === 'bid'){
        if(order.type ==='ask' && order.price <= this.state.price) {
          console.log('bid deal')
          this.props.removeOrder(order)
          const newOrder = Object.assign({}, order, {closed: true})
          this.props.updateActive(newOrder)
          return newOrder
        }
        if(order.type ==='ask' && order.price >= this.state.price) {
          console.log('no bid deal')
          const newOrder = Object.assign({}, this.state, {id:`My-Order-${(Math.random()*Date.now()).toFixed(3)}`, closed: false})
          this.props.addOrder(newOrder)
          this.props.updateActive(newOrder)
          return newOrder
        }
      } else {
        if(order.type ==='bid' && order.price >= this.state.price) {
          console.log('ask deal')
          this.props.removeOrder(order)
          const newOrder = Object.assign({}, order, {closed: true})
          this.props.updateActive(newOrder)
          return newOrder
        }
        if(order.type ==='ask' && order.price <= this.state.price) {
          console.log('no ask deal')
          const newOrder = Object.assign({}, this.state, {id:`My-Order-${(Math.random()*Date.now()).toFixed(3)}`, closed: false})
          this.props.addOrder(newOrder)
          this.props.updateActive(newOrder)
          return newOrder
        }
      }
    })
  }

  render() {

    return(
      <div className="Form">
        <form onSubmit={e => this.inputSubmit(e)}>
          <label htmlFor="dropdown">You Buying or Selling?</label>
          <select required 
            aria-required="true"
            id="dropdown" 
            name="type" 
            onChange={e => this.updateState(e)}
          >
            <option value="">choose one</option>
            <option value="bid">Bid</option>
            <option  value="ask">Ask</option>
          </select>

          <label htmlFor="price">Price?</label>
          <input required 
            aria-required="true"
            id="price" 
            name="price" 
            type="number" 
            placeholder="000.00000"
            onChange={e => this.updateState(e)}
            value={this.state.price}/>    

          <label htmlFor="volume">Volume?</label>
          <input required 
            aria-required="true"
            id="volume" 
            name="volume" 
            type="number" 
            placeholder="000.00000"
            onChange={e => this.updateState(e)}
            value={this.state.volume}/>
         
          <label htmlFor="total">Total?</label>
          <input required 
            aria-required="true"
            id="total" 
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
})

export const mapDispatchToProps = dispatch => ({
  updateUser: newBalances => dispatch(updateUser(newBalances)),
  updateActive: order => dispatch(updateActive(order)),
  removeOrder: order => dispatch(removeOrder(order)),
  addOrder: order => dispatch(addOrder(order))
})

Form.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  updateActive: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
