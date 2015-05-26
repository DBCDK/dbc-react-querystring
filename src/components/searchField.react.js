"use strict";
import React from 'react';
import './searchField.scss';

const SearchField = React.createClass({
    render() {
        return (
            <div>
                <ButtonString color="blue" string="harry"/>
                <ButtonString color="red" string="potter"/>
                <ButtonString color="green" string="styles"/>
            </div>
        );
    }
});

let ButtonString = React.createClass({
    render() {
        let {color, string} = this.props;

        let classes = new Array('buttonstring');
        let style = {
            backgroundColor : color
        }
        return (
            <div className={classes.join(' ')} style={style}><span className="text">{string}</span><span className="remove">x</span></div>
        );
    }
});





export default SearchField;