/** @jsx React.DOM */

'use strict';

var React = require('react');

// sub-components
var TodoItem = require('./todo-item');

module.exports = React.createClass({
    displayName: 'TodoItem',

    render: function () {
        return (
            <li>{this.props.text}</li>
        );
    }
});
