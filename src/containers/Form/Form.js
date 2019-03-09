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
    if(this.state.type === 'bid'){

     return this.matchAsks();
    } else {
      return this.matchBids()
    }
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

  matchAsks() {
    const statePrice = Number(this.state.price)
    const stateVolume = Number(this.state.volume)
    return this.props.asks.find(ask => {
    const askPrice = Number(ask.price)
    const askVolume = Number(ask.volume)
      if(askPrice === statePrice) {   
        const newVolume = askVolume - stateVolume;
        const newAskTotal = newVolume * statePrice
        const newOrderTotal = stateVolume * statePrice
        const newBookAsk = Object.assign({}, ask, {volume: newVolume, total: newAskTotal, id: Date.now()})
        const newOrder = Object.assign({}, ask, {volume: stateVolume, closed: true, total: newOrderTotal})
        if(askVolume > stateVolume) {
          this.props.removeAsk(ask)
          this.props.addAsk(newBookAsk)
          this.props.updateActive(newOrder)
          this.clearInputs()
        } else if(askVolume === stateVolume){
          this.props.removeAsk(ask)
          this.props.updateActive(newOrder)
          this.clearInputs()
        } return newOrder
      } else {
        console.log('no bid deal')
        const newBidOrder = Object.assign({}, this.state, {closed: false, id: Date.now()})
        this.props.addBid(newBidOrder)
        this.props.updateActive(newBidOrder)
        this.clearInputs()
        return newBidOrder
      }
          return newOrder
    }) 
  }

  matchBids() {
    const statePrice = Number(this.state.price)
    const stateVolume = Number(this.state.volume)
    return this.props.bids.find(bid => {
    const bidPrice = Number(bid.price)
    const bidVolume = Number(bid.volume)
      if(bidPrice === statePrice) {   
        const newVolume = bidVolume - stateVolume;
        const newBidTotal = newVolume * statePrice
        const newOrderTotal = stateVolume * statePrice
        const newBookBid = Object.assign({}, bid, {volume: newVolume, total: newBidTotal, id: Date.now()})
        const newOrder = Object.assign({}, bid, {volume: stateVolume, closed: true, total: newOrderTotal})
        if(bidVolume > stateVolume) {
          this.props.removeBid(bid)
          this.props.addBid(newBookBid)
          this.props.updateActive(newOrder)
          this.clearInputs()
        } else if(bidVolume === stateVolume){
          this.props.removeBid(bid)
          this.props.updateActive(newOrder)
          this.clearInputs()
        } return newOrder
      } else {
        console.log('no bid deal')
        const newBidOrder = Object.assign({}, this.state, {closed: false, id: Date.now()})
        this.props.addAsk(newBidOrder)
        this.props.updateActive(newBidOrder)
        this.clearInputs()
        return newBidOrder
      }
          return newOrder
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
  asks: PropTypes.array.isRequired,
  bids: PropTypes.array.isRequired,
  updateUser: PropTypes.func.isRequired,
  updateActive: PropTypes.func.isRequired,
  removeAsk: PropTypes.func.isRequired,
  removeBid: PropTypes.func.isRequired,
  addAsk: PropTypes.func.isRequired,
  addBid: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
