import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser, updateActive, removeBid, addBid, removeAsk, addAsk } from '../../actions';
import { classifyActive } from '../../helpers/helpers';
import { store } from '../../index.js'
import './Form.css';

export class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: (Math.random()*2.85714286).toFixed(5),
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
    return this.updateStore();
  };

  updateState(e) {
    const { name, value} = e.target;
    if(name === "total") {
      const newVolume = value / this.state.price
      this.setState({
        volume: newVolume,
        total: value
      })
    } else {
      this.setState({
        [ name ]: value
      })
    }
  };

  clearInputs() {
    this.setState({
      type: '',
      price: '',
      volume: '',
      total: ''
    })
  }

  updateStore() {
    debugger;
    const statePrice = Number(this.state.price)
    const stateVolume = Number(this.state.volume)
    if (this.state.type === 'bid'){
      return store.getState().asks.find(order => {
      const orderPrice = Number(order.price)
      const orderVolume = Number(order.volume)
        if(orderPrice === statePrice) {   
          const newVolume = orderVolume - stateVolume;
          const newAskTotal = newVolume * statePrice
          const newOrderTotal = stateVolume * statePrice
          const newBookAsk = Object.assign({}, order, {volume: newVolume.toFixed(5), total: newAskTotal, id: Date.now()})
          const newOrder = Object.assign({}, order, {volume: stateVolume, closed: true, total: newOrderTotal})
          if(orderVolume > stateVolume) {
            this.props.removeAsk(order)
            this.props.addAsk(newBookAsk)
            this.props.updateActive(newOrder)
            this.clearInputs()
            return 
          } else if(orderVolume === stateVolume) {
            this.props.removeAsk(order)
            this.props.updateActive(newOrder)
            this.clearInputs()
            return newOrder
          }
        } else if(orderPrice !== statePrice) {
          const newOrder = Object.assign({}, this.state, {closed: false, id: Date.now()})
          this.props.addBid(newOrder)
          this.props.updateActive(newOrder)
          this.clearInputs()
          return newOrder
        }
      }) 
    } else if(this.state.type === 'ask'){
      return store.getState().bids.find(order => {
        const orderPrice = Number(order.price)
        const orderVolume = Number(order.volume)
        if(orderPrice >= statePrice) {
          console.log('ask deal')
          this.props.removeAsk(order)
          const newOrder = Object.assign({}, order, {closed: true})
          this.props.updateActive(newOrder)
          this.clearInputs()

          return newOrder
        }
        if(order.price <= statePrice) {
          console.log('no ask deal')
          const newOrder = Object.assign({}, this.state, {closed: false})
          this.props.addAsk(newOrder)
          this.props.updateActive(newOrder)
    this.clearInputs()

          return newOrder
        }
      })
    }
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
            value={this.state.type}
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
            step=".01"
            placeholder="0.00"
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
            value={this.state.price * this.state.volume}/>

          <button>submit</button>
        </form>
      </div>
    )
  }
}

export const mapStateToProps = state => ({
  user: state.user,
  asks: state.asks,
  bids: state.bids
})

export const mapDispatchToProps = dispatch => ({
  updateUser: newBalances => dispatch(updateUser(newBalances)),
  updateActive: order => dispatch(updateActive(order)),
  removeAsk: ask => dispatch(removeAsk(ask)),
  removeBid: bid => dispatch(removeBid(bid)),
  addAsk: ask => dispatch(addAsk(ask)),
  addBid: bid => dispatch(addBid(bid))
})

Form.propTypes = {
  user: PropTypes.object.isRequired,
  updateUser: PropTypes.func.isRequired,
  updateActive: PropTypes.func.isRequired,
  removeAsk: PropTypes.func.isRequired,
  removeBid: PropTypes.func.isRequired,
  addAsk: PropTypes.func.isRequired,
  addBid: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
