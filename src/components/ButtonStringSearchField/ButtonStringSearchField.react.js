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
    /**
     * Remove query element with index
     *
     * @param index
     */
    remove(index){
        console.log(this.state.query, 'index');
        let queries = _.remove(this.state.query, (query) => {
            return (query.index != index);
        });
        console.log(queries);
        this.setState({query: queries});
    },

    getInitialState(){
        let queries = this.props.query.map((query)=>{
            query.color = _getRandomColor()
            return query;
        });
        return {
            query: queries
        }
    },

    render() {
        const buttonElements = this.state.query.map((query, index)=>{
            return (<ButtonString
              key={query.index}
              index={query.index}
              remove={this.remove}
              text={query.text}
              query={query.query}
              color={query.color}
            />)
        });
        return (
            <div className='buttonfield'>
                <img />
                {buttonElements}
            </div>
        );
    }
});

export default ButtonStringSearchField;