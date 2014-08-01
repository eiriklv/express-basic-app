/** @jsx React.DOM */
 
'use strict';
 
var React = require('react');

var SearchBar = require('./search-bar');
var ProductTable = require('./product-table');

module.exports = React.createClass({
    displayName: 'FilterableProductTable',

    render: function() {
        return (
            <div className="well">
                <SearchBar />
                <ProductTable products={this.props.products} />
            </div>
        );
    }
});