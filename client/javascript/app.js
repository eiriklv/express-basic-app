/**
 * @jsx React.DOM
 */
'use strict';

// dependencies
var React = require('react');
var ReactAsync = require('react-async');
var ReactRouter = require('react-router-component');
var superagent = require('superagent');

// ReactRouter functionality
var Pages = ReactRouter.Pages;
var Page = ReactRouter.Page;
var NotFound = ReactRouter.NotFound;
var Link = ReactRouter.Link;

// Main page component
var MainPage = React.createClass({
    render: function() {
        return (
            <div className = "MainPage" >
                <h1>Hello, anonymous!</h1>
                <p><Link href="/react/users/doe">Login</Link></p>
            </div>
        );
    }
});

// Userpage component
var UserPage = React.createClass({
    // mixins
    mixins: [ReactAsync.Mixin],

    // static methods
    statics: {
        getUserInfo: function(username, cb) {
            superagent.get('http://localhost:3000/api/resource?name=' + username, function (err, res) {
                cb(err, res ? res.body : null);
            });
        }
    },
  
    // the initial state of the component (this.type refers to a static method)
    getInitialStateAsync: function(cb) {
        this.type.getUserInfo(this.props.username, cb);
    },

    // gets properties/parameters from ReactRouter (/react/users/:username)
    componentWillReceiveProps: function(nextProps) {
        if (this.props.username !== nextProps.username) {
            this.type.getUserInfo(nextProps.username, function(err, info) {
                if (err) {
                    throw err;
                }
                this.setState(info);
            }.bind(this));
        }
    },

    // render the component
    render: function() {
        var otherUser = this.props.username === 'doe' ? 'ivan' : 'doe';
        return (
            <div className="UserPage">
                <h1>Hello, {this.state.name}!</h1>
                <p>
                    Go to <Link href={"/react/users/" + otherUser}>/users/{otherUser}</Link>
                </p>
                <p><Link href="/react">Logout</Link></p>
            </div>
        );
    }
});

// Page not found component
var NotFoundHandler = React.createClass({
    render: function() {
        return (
            <p>Page not found</p>
        );
    }
});

// Application component
var App = React.createClass({
    render: function() {
        return (
            <Pages className="App" path={this.props.path}>
                <Page path="/react" handler={MainPage} />
                <Page path="/react/users/:username" handler={UserPage} />
                <NotFound handler={NotFoundHandler} />
            </Pages>
        );
    }
});

module.exports = App;

// If the file is processed by the browser, it should mount itself to the DOM
if (typeof window !== 'undefined') {
    window.onload = function() {
        React.renderComponent(App(), document);
    }
}
