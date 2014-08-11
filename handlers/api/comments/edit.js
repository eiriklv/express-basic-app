var comments = require('../../../services').comments;

exports = module.exports = function (req, res) {
    comments.edit(req.body, function (err, result) {
        if (err) return res.send(400, err);
        res.send(200, result);
    });
};
