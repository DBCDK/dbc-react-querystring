'use strict';
import React from 'react';

/**
 * Render an element for a Filterguide list
 *
 */
const FilterGuideListElement = React.createClass({
  propTypes: {
    element: React.PropTypes.object.isRequired,
    select: React.PropTypes.func.isRequired
  },
  render() {
    const {select, element} = this.props;
    return (
      <li className='filterguide-list-element'>
        <a onClick={select.bind(null, this.props.element)} href='#' className='element-label button'>{element.value}</a>
      </li>
    );
  }
});

export default FilterGuideListElement;
