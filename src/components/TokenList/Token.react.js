'use strict';
import React from 'react';

/**
 * Token component displayed as a removable button in an inputfield
 *
 * Properties:
 * color: the color of the token, supports any kind of CSS color
 * text: the string to be displayed on the button
 * remove: callback function for removing an element
 * index: index of the element
 */
export default React.createClass({
  render() {
    let {color, text, remove, index} = this.props;

    // Background color is dynamic and therefore set inline
    let style = {
      backgroundColor: color
    };

    return (
      <div className='token' style={style}>
        <span className="text">{text}</span>
        <span className="remove" onClick={remove.bind(null, index)}>x</span>
      </div>
    );
  }
});
