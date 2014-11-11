/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

// subcomponents
var TabButton = require('./tab-button');

module.exports = React.createClass({
    displayName: 'NestedTabsNav',

    propTypes: {
        activeTab: React.PropTypes.number.isRequired,
        tabs: React.PropTypes.array.isRequired,
        onTabClick: React.PropTypes.func.isRequired
    },

    render: function() {
        var isActive = false;

        var tabButtons = this.props.tabs.map(function(tab, index) {
            return (
                <TabButton
                    key={'tab-button-' + index}
                    index={index}
                    title={tab.title}
                    isActive={index === this.props.activeTab}
                    onTabClick={this.props.onTabClick}
                />
            );
        }.bind(this));

        return (
            <ul className="nav nav-tabs">
                {tabButtons}
            </ul>
        );
    }
});
