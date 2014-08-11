var resource = require('../../../services').resource;

exports = module.exports = function (req, res) {
    resource.remove(req.body, function (err, result) {
        if (err) return res.send(400, err);
        res.send(200, result);
    });
};
