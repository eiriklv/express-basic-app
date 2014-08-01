/** @jsx React.DOM */
 
'use strict';
 
var React = require('react');

module.exports = React.createClass({
    displayName: 'SearchBar',

    render: function() {
        return (
            <form>
                <input type="text" placeholder="Search..." />
                <p>
                    <input type="checkbox" />
                    Only show products in stock
                </p>
            </form>
        );
    }
});