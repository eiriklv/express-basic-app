/** @jsx React.DOM */

'use strict';

var React = require('react');

module.exports = React.createClass({
    displayName: 'SearchBar',

    handleChange: function () {
        // this calls a user generated function (onUserInput) passed as a prop from the parent (FilterableProductTable)
        this.props.onUserInput(
            this.refs.filterTextInput.getDOMNode().value,
            this.refs.inStockOnlyInput.getDOMNode().checked
        );
    },

    render: function() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    ref="filterTextInput"
                    onChange={this.handleChange}
                />
                <p>
                    <input
                        type="checkbox"
                        value={this.props.inStockOnly}
                        ref="inStockOnlyInput"
                        onChange={this.handleChange}
                    />
                    Only show products in stock
                </p>
            </form>
        );
    }
});