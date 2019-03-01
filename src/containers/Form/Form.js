import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    e.preventDefault()
    console.log(this.state)

  }

  updateState(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState({
      [ name ]: value
    })
    
    console.log(this.state)
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

})

export const mapStateToProps = state => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
