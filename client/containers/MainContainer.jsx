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


 // import from child components...
//  import MarketsContainer from './MarketsContainer.jsx'
//  import TotalsDisplay from '../components/TotalsDisplay.jsx'
 
 const mapStateToProps = state => ({
   // add pertinent state here
    //  totalCards : state.markets.totalCards,
    //  totalMarkets : state.markets.totalMarkets
 });
 
 const mapDispatchToProps = dispatch => ({
 
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
                    <CollectionDisplay></CollectionDisplay> 
                }
                {
                    <CardDisplay></CardDisplay>
                }
            </div>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);