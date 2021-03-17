import React, { Component } from 'react';

const SearchDisplay = (props) => (
    <div className="searchDisplay">
        <h1>YOUR COLLECTION : ({props.totalCards})</h1>
        <form>
            <label>
                <input type="text" id="cardNameSearch" />
            </label>
            <input type="submit" value="Search Card" onClick={props.findCard} />
        </form>
        { props.error ? <h1> hello error </h1> : null}
    </div>
)

export default SearchDisplay;