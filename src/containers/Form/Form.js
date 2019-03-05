import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions'

export class Form extends Component {

  constructor() {
    super()
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
    console.log(this.state, newBalances)
    // take the state info and use it to updateUsers info by subtracting the price from the test coin. 
    // this.updateUser()

  }

  updateState(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [ name ]: value
    })
  }

  render() {

    return(
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
          value={this.state.total}/>

        <button>submit</button>
      </form>
    )
  }




}

export const mapDispatchToProps = dispatch => ({
  updateUser: newBalances => dispatch(updateUser(newBalances))
})

export const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
