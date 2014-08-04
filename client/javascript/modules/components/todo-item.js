/** @jsx React.DOM */

'use strict';

var React = require('react');

// sub-components
var TodoItem = require('./todo-item');

module.exports = React.createClass({
    displayName: 'TodoItem',

    componentWillMount: function () {
        console.log(this.props);
    },

    handleDelete: function (e) {
        e.preventDefault();
        this.props.handleDelete(this.props);
    },

    render: function () {
        return (
            <li onClick={this.handleDelete}>{this.props.text}</li>
        );
    }
});
