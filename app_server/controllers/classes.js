var Classroom = require('../models/classes');

module.exports.newclass = function (req, res, next) {
    Classroom.create(req.body)
        .then((classroom) => {
            console.log('Class has been Added ', classroom);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(classroom);
        }, (err) => next(err))
        .catch((err) => next(err));
};
module.exports.getclasses = function (req, res, next) {
    Classroom.find().sort('name').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.getclassesbyid = function (req, res, next) {
    Classroom.find({_id: req.params.id}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results[0]);
    });
}
module.exports.getclassesbyname = function(req, res, next) {
    Classroom.find({name: req.params.name}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.getclassesbycode = function(req, res, next) {
    Classroom.find({code: req.params.code}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.updateclassname = function(req, res, next) {
    Classroom.findByIdAndUpdate(req.params.id, {name: req.params.name}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.addstudents = function(req, res, next) {
    Classroom.findOneAndUpdate({_id: req.params.cid}, {
            "$push": {
                "students": {
                    "sid": req.params.sid
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            res.json(results);
        });
}
module.exports.addposts = function(req, res, next) {
    Classroom.findOneAndUpdate({_id: req.params.cid}, {
            "$push": {
                "posts": {
                    "pid": req.params.sid
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            res.json(results);
        });
}
module.exports.addteacher = function(req, res, next) {
    Classroom.findOneAndUpdate({ _id: req.params.cid }, { teacher: req.params.tid }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.updateclasspassword = function(req, res, next) {
    Classroom.findByIdAndUpdate(req.params.id, {password: req.params.password}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.deleteclass = function(req, res, next) {
    Classroom.findByIdAndDelete(req.params.id, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}