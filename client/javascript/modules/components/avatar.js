/** @jsx React.DOM */

'use strict'

var React = require('react');

module.exports = React.createClass({
    displayName: 'Avatar',

    render: function () {
        return (
            <div>
                <ProfilePic username={this.props.username} />
                <ProfileLink username={this.props.username} />
            </div>
        );
    }
});
