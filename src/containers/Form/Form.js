import React, { Component } from 'react';
import { connect } from 'react-redux';

export class Form extends Component {

  constructor() {
    super()
    this.state = {

    }
  }

  render() {

    return(
      <form>
        <label for="dropdown">You Buying or Selling?</label>
        <select id="dropdown">
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>

        <label for="price">Price?</label>
        <input id="price" name="price" type="number" placeholder="000.00000"/>    

        <label for="volume">Volume?</label>
        <input id="volume" name="volume" type="number" placeholder="000.00000"/>
       
        <label for="total">Total?</label>
        <input id="total" name="total" type="number" placeholder="1 000.00000"/>

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
