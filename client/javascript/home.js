/**
 * @jsx React.DOM
 */
'use strict';

// config
var config = require('client/config');
var api = require('client/modules/api')(config);

// dependencies
var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');
var io = require('socket.io-client');
var sockets = require('client/modules/sockets/home');

// custom components
var TodoApp = require('client/modules/components/todo-app');
var CommentBox = require('client/modules/components/comment-box');
var Avatar = require('client/modules/components/avatar');
var Counter = require('client/modules/components/counter');
var LikeButton = require('client/modules/components/like-button');
var Ticker = require('client/modules/components/ticker');
var Time = require('client/modules/components/time');
var FilterableProductTable = require('client/modules/components/filterable-product-table');
var HorizontalTabs = require('client/modules/components/horizontal-tabs');
var VerticalTabs = require('client/modules/components/vertical-tabs');
var NestedTabs = require('client/modules/components/nested-tabs');


// common components
var Head = require('client/modules/components/head');
var Header = require('client/modules/components/header');
var ExternalScripts = require('client/modules/components/external-scripts');

// Main page component (this is asyncronous)
var App = React.createClass({
    
    // mixins
    mixins: [ReactAsync.Mixin],

    // static methods
    statics: {
        getAsyncContent: function(callback) {
            superagent.get('http://localhost:3000/api/resource', function (err, res) {
                callback(err, res ? res.body : null);
            });
        }.bind(this)
    },

    componentDidMount: function() {
        // intialize socket.io
        sockets(io);
    },

    // the initial state of the component (this.type refers to a static method)
    getInitialStateAsync: function(callback) {
        //this.type.getAsyncContent(callback); // fetch async content (disabled for now)
        callback(null, this.props); // set the input props as state (equal to 'return this.props' in getInitialState, but async)
    },

    // main rendering function (uses the state of the component, not the props)
    render: function() {
        return (
            <html>
                <Head title={this.state.title} description={this.state.description} />
                <body id="reactapp">
                    <Header user={this.state.user} />
                    <div className="container">
                        <div className="jumbotron text-center">
                            <h1>React Demo Components</h1>
                        </div>
                    </div>

                    <div className="MainPage container">

                        <Counter initialCount={10} />
                        <Time startTime={this.state.startTime} />
                        <LikeButton liked={false} />
                        <Ticker offset={0} interval={1000} />

                        <TodoApp
                            type='todo'
                            title='TODO'
                            skin='warning'
                            placeholder='What do you need to do?'
                        />
                        <TodoApp
                            type='focus'
                            title='FOCUS AREAS'
                            skin='success'
                            placeholder='What do you need to focus on?'
                        />
                        <TodoApp
                            type='goal'
                            title='GOALS'
                            skin='info'
                            placeholder='What are your goals?'
                        />
                        <TodoApp
                            type='motivation'
                            title='MOTIVATIONS'
                            skin='danger'
                            placeholder='What are your motivations?'
                        />

                        <CommentBox user={this.state.user} api={api} pollInterval={3000} />

                        <FilterableProductTable
                            skin='danger'
                            title='Filterable Product Table'
                            products={this.state.products}
                        />

                        <HorizontalTabs demo={true} />

                        <VerticalTabs demo={true} />
                        
                        <NestedTabs demo={true} />
                    </div>

                    <ExternalScripts />
                </body>
            </html>
        );
    }
});

module.exports = App;

// If the file is processed by the browser, it should mount itself to the document and 'overtake' the markup from the server without rerendering
if (typeof window !== 'undefined') {
    // enable the react developer tools when developing (loads another 450k into the DOM..)
    if (config.environment == 'development') {
        window.React = require('react')
    }

    window.onload = function() {
        React.renderComponent(App(), document);
    }
}
