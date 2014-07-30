/** @jsx React.DOM */
 
'use strict';
 
var React = require('react');
var ReactAsync = require('react-async');

// Main page component (this is asyncronous)
module.exports = React.createClass({
    displayName: 'Header',

    getInitialState: function () {
        return this.props.user;
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('updating header');
    },
 
    shouldComponentUpdate: function() {
        return false;
    },

    // main rendering function
    render: function() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">

                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">{this.state.name}</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

                        <ul className="nav navbar-nav">
                            <li className="active"><a href="#">Link</a></li>
                            <li><a href="#">Link</a></li>

                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">User Info <span className="caret"></span></a>
                                <ul className="dropdown-menu" role="menu">
                                    <li><a href="#">{this.state.token}</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});