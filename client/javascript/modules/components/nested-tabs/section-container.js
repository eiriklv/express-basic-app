/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');

var SectionNav = require('./section-nav');
var SectionContent = require('./section-content');

module.exports = React.createClass({
    displayName: 'SectionContainer',

    propTypes: {
        tab: React.PropTypes.object.isRequired
    },

    // this is called initially (initial props are passed)
    getInitialState: function() {
        return {
            activeSection: 0,
            tab: this.props.tab
        };
    },

    // this is called on update (new props are passed)
    componentWillReceiveProps: function(nextProps) {
        if (nextProps) {
            console.log('updating section container');

            this.setState({
                activeSection: 0,
                tab: nextProps.tab
            });
        }
    },

    onSectionClick: function(index) {
        if (index !== this.activeSection) {
            this.setState({
                activeSection: index
            });
        }
    },

    render: function() {
        return (
            <div className="tab-content">
                <div className="tab-pane active">

                    {/* section navigation */}
                    <SectionNav
                        sections={this.state.tab.sections}
                        activeSection={this.state.activeSection}
                        onSectionClick={this.onSectionClick}
                    />

                    {/* active tab content */}
                    <SectionContent
                        section={this.state.tab.sections[this.state.activeSection]}
                    />

                </div>
            </div>
        );
    }
});
