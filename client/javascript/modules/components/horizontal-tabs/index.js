/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

// sub-components
var TabsNav = require('./nav');
var TabContent = require('./tab-content');

module.exports = React.createClass({
    displayName: 'HorizontalTabs',

    propTypes: {
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
        apiURL: React.PropTypes.string
    },

    mixins: [ReactAsync.Mixin],

    fetchContent: function(callback) {
        if (!this.props.demo) {
            if (this.props.apiURL) {
                superagent.get(this.props.apiURL, function(err, res) {
                    callback(err, res ? res.body : null);
                });
            } else {
                callback(null, {
                    activeTab: this.props.activeTab || 0,
                    tabs: this.props.tabs || []
                });
            }
        } else {
            callback(null, {
                activeTab: 0,
                tabs: [{
                    title: 'Tab1',
                    content: 'This is the first tab'
                }, {
                    title: 'Tab2',
                    content: 'This is the second tab'
                }, {
                    title: 'Tab3',
                    content: 'This is the third tab'
                }, {
                    title: 'Tab4',
                    content: 'This is the fourth and last tab'
                }]
            });
        }
    },

    getInitialStateAsync: function(callback) {
        this.fetchContent(callback);
    },

    onTabClick: function(index) {
        this.setState({
            activeTab: index
        });
    },

    render: function() {
        return ( < div className = "horizontal-tabs-panel" >
            < div className = "horizontal-tabs-line" >

            { /* tabs navigation */ } < TabsNav tabs = {
                this.state.tabs
            }
            activeTab = {
                this.state.activeTab
            }
            onTabClick = {
                this.onTabClick
            }
            />

            { /* active tab content */ } < TabContent content = {
                this.state.tabs[this.state.activeTab].content
            }
            />

            < /div> < /div>
        );
    }
});
