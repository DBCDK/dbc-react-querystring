"use strict";
import React from 'react';

// Import styling
if (!process.env.NODE_ENV == 'test'){
    require('./ButtonStrongSearchField.scss');
}

function _getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/**
 * Main component for showing searchstring as buttons
 */
const ButtonStringSearchField = React.createClass({
    render() {
        const buttonElements = this.props.query.map((query)=>{
            return (<ButtonString text={query.text} query={query.query} color={_getRandomColor()} />)
        });
        return (
            <div className='buttonfield'>
                {buttonElements}
            </div>
        );''
    }
});

/**
 * Component for creating buttons
 */
const ButtonString = React.createClass({
    render() {
        let {color, text} = this.props;

        let classes = new Array('buttonstring');
        let style = {
            backgroundColor : color
        }
        return (
            <div className={classes.join(' ')} style={style}>
                <span className="text">{text}</span><span className="remove">x</span>
            </div>
        );
    }
});

export default ButtonStringSearchField;