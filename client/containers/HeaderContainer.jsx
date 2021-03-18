import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../components/Card.jsx'
import * as actions from '../actions/actions.js'
import HeaderDisplay from '../components/HeaderDisplay.jsx';
const scryfall = require("scryfall-client");

const mapStateToProps = state => ({
    toggleViewMode: state.collection.toggleViewMode,
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
                    <button onClick={this.props.toggleViewMode}>Toggle View</button>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);