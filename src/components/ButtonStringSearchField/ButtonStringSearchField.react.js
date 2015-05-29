"use strict";
import React from 'react';
import _ from 'lodash';
import ButtonString from './ButtonString.react.js';
import './ButtonStrongSearchField.scss';

/**
 * Get a random color. This function is used for development only. Should be exchanged with a colorscheme
 *
 * @returns {string}
 * @private
 */
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

    getInitialState(){
        let queries = this.props.query.map((query)=>{
            return {
                text: query,
                color: _getRandomColor()
            };
        });
        return {
            query: queries
        }
    },

    render() {
        const {query, remove} = this.props;
        const buttonElements = query.map((element, index)=>{
            return (<ButtonString
              key={element}
              index={element}
              remove={remove.bind(null, element)}
              text={element}
              color={_getRandomColor()}
            />)
        });
        return (
            <div className='buttonfield'>
                {buttonElements.reverse()}
            </div>
        );
    }
});

export default ButtonStringSearchField;