/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

// sub-components
var TabsNav = require('./nav');
var SectionContainer = require('./section-container');

module.exports = React.createClass({
    displayName: 'NestedTabs',

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
                    sections: [{
                        title: 'Section1-1',
                        content: 'This is the first section of the first tab'
                    }, {
                        title: 'Section1-2',
                        content: 'This is the second section of the first tab'
                    }, {
                        title: 'Section1-3',
                        content: 'This is the third section of the first tab'
                    }]
                }, {
                    title: 'Tab2',
                    sections: [{
                        title: 'Section2-1',
                        content: 'This is the first section of the second tab'
                    }, {
                        title: 'Section2-2',
                        content: 'This is the second section of the second tab'
                    }, {
                        title: 'Section2-3',
                        content: 'This is the third section of the second tab'
                    }]
                }, {
                    title: 'Tab3',
                    sections: [{
                        title: 'Section3-1',
                        content: 'This is the first section of the third tab'
                    }, {
                        title: 'Section3-2',
                        content: 'This is the second section of the third tab'
                    }, {
                        title: 'Section3-3',
                        content: 'This is the third section of the third tab'
                    }]
                }, {
                    title: 'Tab4',
                    sections: [{
                        title: 'Section4-1',
                        content: 'This is the first section of the fourth tab'
                    }, {
                        title: 'Section4-2',
                        content: 'This is the second section of the fourth tab'
                    }, {
                        title: 'Section4-3',
                        content: 'This is the third section of the fourth tab'
                    }]
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
        return (
            <div className="horizontal-tabs-panel clearfix">
                <div className="horizontal-tabs-line">

                    {/* tabs navigation */}
                    <TabsNav
                        tabs={this.state.tabs}
                        activeTab={this.state.activeTab}
                        onTabClick={this.onTabClick}
                    />

                    {/* active tab section */}
                    <SectionContainer
                        tab={this.state.tabs[this.state.activeTab]}
                    />

                </div>
            </div>
        );
    }
});
