/**
 * @jsx React.DOM
 */
'use strict';

// dependencies
var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

// react-bootstrap components
var Alert = require('react-bootstrap').Alert;

// custom components
var Counter = require('./modules/app/counter-component');
var Head = require('./modules/app/head-component');
var Header = require('./modules/app/header-component');

// Main page component (this is asyncronous)
var App = React.createClass({
    // mixins
    mixins: [ReactAsync.Mixin],

    // static methods
    statics: {
        getContent: function (callback) {
            callback(null, { message: 'hello' });
            // superagent.get('http://localhost:3000/api/resource', function (err, res) {
            //     callback(err, res ? res.body : null);
            // });
        }.bind(this)
    },

    // the initial state of the component (this.type refers to a static method)
    getInitialStateAsync: function (callback) {
        console.log('getting initial state');
        console.log(this.props);
        //this.type.getContent(callback); // fetch async content
        callback(null, this.props); // set the input props as state
    },

    // gets properties/parameters from ReactRouter (/react/users/:username)
    componentWillReceiveProps: function (nextProps) {
        console.log('nextProps');
        console.log(nextProps);

        // if (this.props.username !== nextProps.username) {
        //     this.type.getUserInfo(nextProps.username, function (err, info) {
        //         if (err) {
        //             throw err;
        //         }
        //         this.setState(info);
        //     }.bind(this));
        // }
    },

    // main rendering function
    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description}></Head>
                <body>
                    <Header user={this.state.user}></Header>
                    <div className="MainPage container" >
                        <Alert bsStyle="warning">
                            <strong>Holy guacamole!</strong> Best check yo self, youre not looking too good.
                        </Alert>
                        <Counter initialCount={10}></Counter>
                        <p>You sent in {this.state.message}</p>
                        <h1>Hello, anonymous!</h1>
                    </div>
                </body>
            </html>
        );
    }
});

module.exports = App;

// If the file is processed by the browser, it should mount itself to the DOM
if (typeof window !== 'undefined') {
    window.React = require('react');
    window.onload = function () {
        React.renderComponent(App(), document);
    }
}
