import React, { Component } from 'react';
import User from '../User/User';
import Form from '../Form/Form';
import SideNav from '../SideNav/SideNav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { organizeBids, organizeAsks } from '../../helpers/helpers';
import { storeAsks, storeBids, storeSpread } from '../../actions';
var orders = require('../../assets/order-book.json');
import OrderContainer from '../OrderContainer/OrderContainer';
import './App.css';

export class App extends Component {

  componentDidMount() {
    const asks = organizeAsks(orders);
    const bids = organizeBids(orders);
    this.props.storeAsks(asks);
    this.props.storeBids(bids);
    const spread = bids[0].volume - asks[0].volume
    this.props.storeSpread(spread)
  }


  render() {
    return(
      <div className="App">
        <section>
          <h2 className="title">
            <span>T</span>
            EST
            <span>C</span>
            OIN 
            <span> O</span>
            RDER 
            <span> B</span>
            OOK
          </h2>
          <div className="mainSection">
            <div className="userSection">
              <User />
              <Form />
            </div>
            <OrderContainer />
          </div>
        </section>
          <div className="sideBar">
            <SideNav />
          </div>
      </div>
    )
  }
}



export const mapDispatchToProps = dispatch => ({
  storeOrders: orders => dispatch(storeOrders(orders)),
  storeAsks: asks => dispatch(storeAsks(asks)),
  storeBids: bids => dispatch(storeBids(bids)),
  storeSpread: spread => dispatch(storeSpread(spread))
});

App.propTypes = {
  storeOrders: PropTypes.func.isRequired,
  storeAsks: PropTypes.func.isRequired,
  storeBids: PropTypes.func.isRequired,
  storeSpread: PropTypes.func.isRequired
}

export default connect(null, mapDispatchToProps)(App)
