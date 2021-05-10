var Assignment = require('../models/assignments');

module.exports.newassignment = function (req, res, next) {
    Assignment.create(req.body)
        .then((assignment) => {
            console.log('Assignment Created!!', assignment);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(assignment);
        }, (err) => next(err))
        .catch((err) => next(err));
};
module.exports.getassignments = function (req, res, next) {
    Assignment.find({_id: req.params.id}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        console.log(results)
        // Respond with valid data
        res.json(results[0]);
    });
}
module.exports.updatetitle = function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, {title: req.params.title}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.updatetime = function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, {time: req.params.time}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.deleteassignment = function(req, res, next) {
    Assignment.findByIdAndDelete(req.params.id, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}