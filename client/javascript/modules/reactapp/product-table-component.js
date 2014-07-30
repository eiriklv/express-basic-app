/** @jsx React.DOM */
 
'use strict';
 
var React = require('react');

var ProductRow = require('./product-row-component');
var ProductCategoryRow = require('./product-category-row-component');

module.exports = React.createClass({
    displayName: 'ProductTable',

    render: function() {
        var rows = [];
        var lastCategory = null;

        this.props.products.forEach(function (product) {
            // if a new category arrives (and assuming the products are sorted) we print a new category row
            if (product.category !== lastCategory) {
                rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
            }
            // print a regular product row
            rows.push(<ProductRow product={product} key={product.name} />);
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
});