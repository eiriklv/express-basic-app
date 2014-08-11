var comments = require('../../../services').comments;

exports = module.exports = function (req, res) {
    comments.create(req.body, function (err, result) {
        if (err) return res.send(400, err);
        res.send(201, result);
    });
};