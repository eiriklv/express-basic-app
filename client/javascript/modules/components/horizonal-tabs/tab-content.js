/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

module.exports = React.createClass({
    displayName: 'HorizontalTabContent',

    propTypes: {
        content: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className="tab-content">
                <div className="tab-pane active">
                    {/* inner tab content */}
                    <p>{this.props.content}</p>
                </div>
            </div>
        );
    }
});
