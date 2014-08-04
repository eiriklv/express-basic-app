/** @jsx React.DOM */

'use strict';

var React = require('react');

// sub-components
var TodoItem = require('./todo-item');

module.exports = React.createClass({
    displayName: 'TodoList',

    render: function () {
        var count = 0;

        var createItem = function (item) {
            return <TodoItem handleDelete={this.props.handleDelete} key={item.id} text={item.text} />
        }.bind(this);

        return (
            <ul>
                {this.props.items.map(createItem)}
            </ul>
        );
    }
});
