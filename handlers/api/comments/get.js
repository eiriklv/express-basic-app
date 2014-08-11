var comments = require('../../../services').comments;

exports = module.exports = function (req, res) {
    comments.get(req.query, function (err, result) {
        if (err) return res.send(400, err);
        res.send(200, result);
    });
};
