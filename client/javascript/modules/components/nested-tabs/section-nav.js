/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');

// subcomponents
var SectionButton = require('./section-button');

module.exports = React.createClass({
    displayName: 'SectionNav',

    propTypes: {
        activeSection: React.PropTypes.number.isRequired,
        sections: React.PropTypes.array.isRequired,
        onSectionClick: React.PropTypes.func.isRequired
    },

    render: function() {
        var isActive = false;

        var sectionButtons = this.props.sections.map(function(section, index) {
            return (
                <SectionButton
                    key={'tab-button-' + index}
                    index={index}
                    title={section.title}
                    isActive={index === this.props.activeSection}
                    onSectionClick={this.props.onSectionClick}
                />
            );
        }.bind(this));

        return (
            <div className="col-xs-3">
                <ul className="nav nav-tabs vertical-tabs-left">
                    {sectionButtons}
                </ul>
            </div>
        );
    }
});
