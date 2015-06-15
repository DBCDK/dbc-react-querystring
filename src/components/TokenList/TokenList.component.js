'use strict';

import React, {PropTypes} from 'react';
import Token from './Token.component.js';

/**
 * Get a random color. This function is used for development only.
 * Should be exchanged with a colorscheme
 *
 * @returns {string}
 * @private
 */
function _getRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * Creates a list of tokens
 *
 * This component is only used internally for the TokenSearchField
 *
 * Properties:
 * query: array of strings
 * remove: callback function for removing elements with a certain index
 *
 */
export default React.createClass({
  propTypes: {
    query: PropTypes.array.isRequired,
    remove: PropTypes.func.isRequired
  },

  getInitialState() {
    let queries = this.props.query.map((query)=> {
      return {
        text: query,
        color: _getRandomColor()
      };
    });
    return {
      query: queries
    };
  },

  render() {
    const {query, remove} = this.props;

    // The order of tokens is reversed to handle that last token should be visible.
    // In the CSS direction is set to rlt, reversing the order again
    const tokens = query.map((element)=> {

      return (<Token
        key={element.index}
        index={element.index}
        remove={remove.bind(null, element)}
        text={element.value}
        color={_getRandomColor()}
        />);
    }).reverse();

    return (
      <div className='tokenlist'>
        {tokens}
      </div>
    );
  }
});
