/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');

module.exports = React.createClass({
    displayName: 'SectionContent',

    propTypes: {
        section: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            <div className="col-xs-9">
                <div className="tab-content">
                    <div className="tab-pane active">
                        {this.props.section.content}
                    </div>
                </div>
            </div>
        );
    }
});
