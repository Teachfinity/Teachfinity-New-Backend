var User = require('../models/users');
//Add new user
module.exports.newuser = function (req, res, next) {
    User.create(req.body)
        .then((user) => {
            console.log('User has been Added ', user);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        }, (err) => next(err))
        .catch((err) => next(err));
};
module.exports.getusers = function (req, res, next) {
    User.find().sort('name').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.getuserbyid = function (req, res, next) {
    User.find({uid: req.params.id}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.getuserbyname = function (req, res, next) {
    User.find({name: req.params.name}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.updateusername = function(req, res, next) {
    User.findOneAndUpdate({uid: req.params.id}, {name: req.params.name}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.updateclassesowned = function(req, res, next) {
    User.findOneAndUpdate({uid: req.params.id}, {
            "$push": {
                "classroomsOwned": {
                    "cid": req.params.cid
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
module.exports.updateclassesjoined = function(req, res, next) {
    User.findOneAndUpdate({uid: req.params.id}, {
            "$push": {
                "classroomsJoined": {
                    "cid": req.params.cid
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
module.exports.updateuserpassword = function(req, res, next) {
    User.findOneAndUpdate({uid: req.params.id}, {password: req.params.password}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.updateprofilepic = function(req, res, next) {
    User.findOneAndUpdate({uid: req.params.id}, {profilePicture: req.body.dp}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.removeClassOwned = function(req, res, next) {
    User.findOneAndUpdate({uid: req.params.id}, {$pull: {classroomsOwned:{cid: req.params.cid}}}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.removeClassJoined = function(req, res, next) {
    User.findOneAndUpdate({uid: req.params.id}, {$pull: {classroomsJoined:{cid: req.params.cid}}}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.deleteuser = function(req, res, next) {
    User.findOneAndDelete({uid: req.params.id}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}