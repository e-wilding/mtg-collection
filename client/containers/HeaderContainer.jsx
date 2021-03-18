import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'
import HeaderDisplay from '../components/HeaderDisplay.jsx';
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    deck_mode: state.collection.deck_mode,
});

const mapDispatchToProps = dispatch => ({
    toggleViewMode: () => {
        dispatch(actions.toggleViewMode())
    }
});

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="headerContainer">
                {
                    <HeaderDisplay></HeaderDisplay>
                }
                {
                    this.props.deck_mode ?
                        <button onClick={this.props.toggleViewMode}>Go To Collection View</button> :
                        <button onClick={this.props.toggleViewMode}>Go To Deck View</button>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);