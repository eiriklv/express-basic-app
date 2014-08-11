var Comment = require('../../../models/comment');
var helpers = require('../../../helpers')();

exports = module.exports = function (body, callback) {
    if (!body) callback('body missing');
    console.log(body);

    var comment = new Comment({
        author: body.author,
        text: body.text
    });

    comment.save(function (err, product) {
        callback(err, product);
    });
};
