var Comment = require('../../../models/comment');
var helpers = require('../../../helpers')();

exports = module.exports = function (body, callback) {
    Comment.find({}, function (err, comments) {
        comments = comments || [];
        callback(err, comments);
    })
};
