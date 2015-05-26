"use strict";
import React from 'react';

const SearchField = React.createClass({
    render() {
        return (
            <div><ButtonString color="blue" string="test"/></div>
        );
    }
});

let ButtonString = React.createClass({
    render() {
        let {color, string} = this.props;

        let classes = new Array('buttonstring', color);
        return (
            <div className={classes}><span className="string">{string}</span><span className="buttonstring-close">x</span></div>
        );
    }
});





export default SearchField;