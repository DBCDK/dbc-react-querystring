"use strict";
import React from 'react';

/**
 * Component for creating buttons
 */
const ButtonString = React.createClass({
    render() {
        console.log(this.props.index);
        let {color, text, remove, index} = this.props;

        let classes = new Array('buttonstring');
        let style = {
            backgroundColor : color
        }
        return (
            <div className={classes.join(' ')} style={style}>
                <span className="text">{text}</span><span className="remove" onClick={remove.bind(null, index)}>x</span>
            </div>
        );
    }
});

export default ButtonString;