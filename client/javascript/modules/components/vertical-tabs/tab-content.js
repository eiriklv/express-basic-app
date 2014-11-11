/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react');
var ReactAsync = require('react-async');
var superagent = require('superagent');

module.exports = React.createClass({
    displayName: 'TabsTest',

    propTypes: {
        content: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className="col-xs-9">
                <div className="tab-content">
                    <div className="tab-pane active">
                        {this.props.content}
                    </div>
                </div>
            </div>
        );
    }
});
