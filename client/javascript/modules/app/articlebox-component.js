/** @jsx React.DOM */
 
'use strict';
 
var React = require('react');
 
// Main page component (this is asyncronous)
module.exports = React.createClass({
    // mixins
    mixins: [ReactAsync.Mixin],

    // static methods
    statics: {
        getContent: function (callback) {
            superagent.get('http://localhost:3000/api/resource', function (err, res) {
                callback(err, res ? res.body : null);
            });
        }.bind(this)
    },

    // the initial state of the component (this.type refers to a static method)
    getInitialStateAsync: function (callback) {
        this.type.getContent(callback); // fetch async content
    },

    // main rendering function
    render: function() {
        return (
            
        );
    }
});