var Meeting = require('../models/meetings');

module.exports.newmeeting = function (req, res, next) {
    Meeting.create(req.body)
        .then((meeting) => {
            console.log('Meeting has been Added ', meeting);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(meeting);
        }, (err) => next(err))
        .catch((err) => next(err));
};
module.exports.getmeetings = function (req, res, next) {
    Meeting.find().sort('name').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.getmeetingsbyid = function (req, res, next) {
    Meeting.find({_id: req.params.id}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.getmeetingsbyname = function(req, res, next) {
    Meeting.find({name: req.params.name}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.updatemeetingname = function(req, res, next) {
    Meeting.findByIdAndUpdate(req.params.id, {name: req.params.name}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.starttime = function(req, res, next) {
    Meeting.findOneAndUpdate({ _id: req.params.cid }, { startTime: req.params.sid }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.endtime = function(req, res, next) {
    Meeting.findByIdAndUpdate(req.params.id, {endTime: req.params.eid}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.deletemeeting = function(req, res, next) {
    Meeting.findByIdAndDelete(req.params.id, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}