/**
 * ************************************
 *
 * @module  MainContainer
 * @author
 * @date
 * @description stateful component that renders different displays
 *
 * ************************************
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import CollectionsDisplay from '../components/CollectionsDisplay.jsx';
import CollectionContainer from './CollectionContainer.jsx'
import CardDisplay from '../components/CardDisplay.jsx';
import MyDecksContainer from './MyDecksContainer.jsx';
import DeckContainer from './DeckContainer.jsx';
import DeckCollectionContainer from './DeckCollectionContainer.jsx';
import * as actions from '../actions/actions.js'
import HeaderContainer from './HeaderContainer.jsx';
import BodyContainer from './BodyContainer.jsx'

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    // create functions that will dispatch action creators
});

class MainContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mainContainer">
                {
                    <HeaderContainer></HeaderContainer>
                }
                {
                    <BodyContainer></BodyContainer>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);