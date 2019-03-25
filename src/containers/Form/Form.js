import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateUser, updateActive, updateBid, updateAsk, removeBid, addBid, removeAsk, addAsk, storeAsks, storeBids, storeSpread } from '../../actions';
import { organizeAsks, organizeBids } from '../../helpers/helpers';
import { store } from '../../index.js'
import './Form.css';

export class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '',
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
    const ask = this.props.asks.find(ask => Number(ask.price) === statePrice || null)
    if(ask) {   
      const askPrice = Number(ask.price)
      const askVolume = Number(ask.volume)
      const newVolume = askVolume - stateVolume;
      const newAskTotal = newVolume * statePrice
      const newOrderTotal = stateVolume * statePrice
      const newBookAsk = Object.assign({}, ask, {volume: newVolume, total: newAskTotal})
      const newOrder = Object.assign({}, ask, {volume: stateVolume, closed: true, total: newOrderTotal})
      if(askVolume > stateVolume) {
        this.props.updateAsk(ask.id, newBookAsk)
        this.props.updateActive(newOrder)
      } else if(askVolume === stateVolume) {
        this.props.removeAsk(ask)
        this.props.updateActive(newOrder)
      } else if(askVolume < stateVolume) {
        const edgeVolume = stateVolume - askVolume;
        const edgeBidTotal = edgeVolume * statePrice
        const edgeBidOrder = Object.assign({}, this.state, {volume: edgeVolume, total: edgeBidTotal})
        const newAsk = Object.assign({}, ask, {closed: true})
        this.props.removeAsk(ask)
        this.props.updateActive(newAsk)
        this.props.addBid(edgeBidOrder)
        this.props.updateActive(edgeBidOrder)
      }
      this.clearInputs()
    } else if(!ask) {
      this.props.addBid(this.state)
      this.props.updateActive(this.state)
      this.clearInputs()
    }
    this.updateSpread()
  }

  matchBids() {
    const statePrice = Number(this.state.price)
    const stateVolume = Number(this.state.volume)
    const bid = this.props.bids.find(bid => Number(bid.price) === statePrice || null)
    if(bid) {   
      const bidPrice = Number(bid.price)
      const bidVolume = Number(bid.volume)
      const newVolume = bidVolume - stateVolume;
      const newBidTotal = newVolume * statePrice
      const newOrderTotal = stateVolume * statePrice
      const newBookBid = Object.assign({}, bid, {volume: newVolume, total: newBidTotal})
      const newOrder = Object.assign({}, bid, {volume: stateVolume, closed: true, total: newOrderTotal})
      if(bidVolume > stateVolume) {
        this.props.updateBid(bid.id, newBookBid)
        this.props.updateActive(newOrder)
      } else if(bidVolume === stateVolume){
        this.props.removeBid(bid)
        this.props.updateActive(newOrder)
      }  else if(bidVolume < stateVolume) {
        const edgeVolume = stateVolume - bidVolume;
        const edgeAskTotal = edgeVolume * statePrice
        const edgeAskOrder = Object.assign({}, this.state, {volume: edgeVolume, total: edgeAskTotal})
        const newBid = Object.assign({}, bid, {closed: true})
        this.props.removeBid(bid)
        this.props.updateActive(newBid)
        this.props.addAsk(edgeAskOrder)
        this.props.updateActive(edgeAskOrder)
      }
      this.clearInputs()
    } else if(!bid) {
      this.props.addAsk(this.state)
      this.props.updateActive(this.state)
      this.clearInputs()
    }
    this.updateSpread()
  }

  updateSpread() {
    const spread = this.props.bids[0].volume - this.props.asks[0].volume
    this.props.storeSpread(spread)
  }

  render() {

    return(
      <div className="Form">
        <form onSubmit={e => this.inputSubmit(e)}>
          <label htmlFor="dropdown">Bidding or Asking?</label>
          <select required 
            aria-required="true"
            id="dropdown" 
            name="type" 
            onChange={e => this.updateState(e)}
            value={this.state.type}
          >
            <option value="">choose one</option>
            <option value="bid">Bid</option>
            <option value="ask">Ask</option>
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
  updateAsk: (id, newAsk) => dispatch(updateAsk(id, newAsk)),
  updateBid: (id, newBid) => dispatch(updateBid(id, newBid)),
  updateUser: newBalances => dispatch(updateUser(newBalances)),
  updateActive: order => dispatch(updateActive(order)),
  removeAsk: ask => dispatch(removeAsk(ask)),
  removeBid: bid => dispatch(removeBid(bid)),
  addAsk: ask => dispatch(addAsk(ask)),
  addBid: bid => dispatch(addBid(bid)),
  storeAsks: asks => dispatch(storeAsks(asks)),
  storeBids: bids => dispatch(storeBids(bids)),
  storeSpread: spread => dispatch(storeSpread(spread))
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
  addBid: PropTypes.func.isRequired,
  storeAsks: PropTypes.func.isRequired,
  storeBids: PropTypes.func.isRequired,
  storeSpread: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
