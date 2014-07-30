/** @jsx React.DOM */
 
'use strict';
 
var React = require('react');

var SearchBar = require('./search-bar-component');
var ProductTable = require('./product-table-component');

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