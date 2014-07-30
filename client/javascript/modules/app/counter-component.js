/** @jsx React.DOM */
 
'use strict';
 
var React = require('react');

// Simple counter component (this is syncronous)
module.exports = React.createClass({
    displayName: 'Counter',

    getInitialState: function() {
        // naming it initialX clearly indicates that the only purpose
        // of the passed down prop is to initialize something internally
        return {count: this.props.initialCount};
    },

    handleClick: function() {
        console.log('current count: ' + this.state.count);
        this.setState({count: this.state.count + 1});
    },

    render: function() {
        return <div onClick={this.handleClick}>{this.state.count}</div>;
    }
});