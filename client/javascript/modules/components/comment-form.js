/** @jsx React.DOM */
 
'use strict';
 
var React = require('react');

module.exports = React.createClass({
    displayName: 'CommentForm',

    handleSubmit: function() {
        var author = this.refs.author.getDOMNode().value.trim();
        var text = this.refs.text.getDOMNode().value.trim();
        if (!text || !author) {
            return false;
        }
        // TODO: send request to the server
        this.props.onCommentSubmit({
            author: author,
            text: text
        });

        // clear inputs
        this.refs.author.getDOMNode().value = '';
        this.refs.text.getDOMNode().value = '';
        return false;
    },

    render: function () {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Your name" ref="author" />
                <input type="text" placeholder="Say something..." ref="text" />
                <input type="submit" value="Post" />
            </form>
        );
    }
});