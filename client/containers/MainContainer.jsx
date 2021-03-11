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
 
 const MainContainer = ({ props }) => (
    <div className="container">
        asdfasdf
    </div>
)
 
//  export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default MainContainer