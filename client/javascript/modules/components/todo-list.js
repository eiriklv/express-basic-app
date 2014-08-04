/** @jsx React.DOM */

'use strict';

var React = require('react');

// sub-components
var TodoItem = require('./todo-item');

module.exports = React.createClass({
    displayName: 'TodoList',

    render: function () {
        var createItem = function (itemText) {
            return <TodoItem text={itemText} />
            return <li>{itemText}</li>;
        };

        return (
            <ul>
                {this.props.items.map(createItem)}
            </ul>
        );
    }
});
