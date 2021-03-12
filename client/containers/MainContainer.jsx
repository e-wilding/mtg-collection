/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders TotalsDisplay and MarketsContainer
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionsDisplay from '../components/CollectionsDisplay.jsx';
import CollectionDisplay from '../components/CollectionDisplay.jsx';
import CardDisplay from '../components/CardDisplay.jsx';
import * as actions from '../actions/actions.js'


 // import from child components...
//  import MarketsContainer from './MarketsContainer.jsx'
//  import TotalsDisplay from '../components/TotalsDisplay.jsx'
 
 const mapStateToProps = state => ({
    totalCards : state.collection.totalCards,
    cardImage  : state.collection.cardImage
 });
 
 const mapDispatchToProps = dispatch => ({
   // create functions that will dispatch action creators
//   // TODO: change payload
//   addMarket: (e) => {
//     e.preventDefault()
//     const location = document.querySelector('#location')
//     dispatch(actions.addMarket(location.value))
//   },

  addCard: () => {
    dispatch(actions.addCard())
  },

//   deleteCard: () => {
//     dispatch(actions.deleteCard())
//   }
 });
 
 class MainContainer extends Component {
    constructor(props) {
      super(props);
    }
    render() {
        return(
            <div className="container">
                { 
                    <CollectionsDisplay></CollectionsDisplay>
                }
                {
                    <CollectionDisplay totalCards={this.props.totalCards}></CollectionDisplay> 
                }
                {
                    <CardDisplay addCard={this.props.addCard}></CardDisplay>
                }
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);