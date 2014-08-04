/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'TodoInput',

    render: function() {
        return (
            <form onSubmit={this.props.handleSubmit}>
                <input onChange={this.props.handleChange} value={this.props.text} />
                <button>{'Add #' + (this.props.items)}</button>
            </form>
        );
    }
});
