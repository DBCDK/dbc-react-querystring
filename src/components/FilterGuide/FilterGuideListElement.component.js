'use strict';

/**
 * @file
 * Render an element for a Filterguide list
 */

import React from 'react';

const FilterGuideListElement = React.createClass({
  propTypes: {
    element: React.PropTypes.object.isRequired,
    select: React.PropTypes.func.isRequired
  },

  onClick(element, event) {
    event.preventDefault();
    this.props.select(element);
  },

  render() {
    const {element} = this.props;
    return (
      <li className='filterguide-list-element'>
        <a onClick={this.onClick.bind(null, element)} href='#' className='element-label button'>{element.value}</a>
      </li>
    );
  }
});

export default FilterGuideListElement;
