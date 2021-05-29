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
        console.log(results)
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
module.exports.getstudentsbyclass = function(req, res, next) {
    Classroom.find({_id: req.params.cid}).populate('students.sid').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results[0].students);
    });
}
module.exports.getassignments = function(req, res, next) {
    Classroom.find({_id: req.params.cid}).populate('assignments.aid').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results[0].assignments);
    });
}
module.exports.getquizzes = function(req, res, next) {
    Classroom.find({_id: req.params.cid}).populate('quizzes.qid').exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results[0].quizzes);
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
module.exports.addfiles = function(req, res, next) {
    Classroom.findOneAndUpdate({_id: req.params.cid}, {
            "$push": {
                "classFiles": {
                    "fileName": req.params.fileName,
                    "filePath": req.body.filePath
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
                    "pid": req.params.pid
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
module.exports.addmeetings = function(req, res, next) {
    Classroom.findOneAndUpdate({_id: req.params.cid}, {
            "$push": {
                "meetings": {
                    "mid": req.params.mid
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
module.exports.addmood = function(req, res, next) {
    Classroom.findOneAndUpdate({_id: req.params.cid}, {
            "$push": {
                "environment": {
                    "mid": req.params.mid,
                    "mood": req.params.mood,
                },
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
module.exports.addassignment = function(req, res, next) {
    Classroom.findOneAndUpdate({_id: req.params.cid}, {
            "$push": {
                "assignments": {
                    "aid": req.params.aid
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
module.exports.addquiz = function(req, res, next) {
    Classroom.findOneAndUpdate({_id: req.params.cid}, {
            "$push": {
                "quizzes": {
                    "qid": req.params.qid
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
module.exports.removeassignment = function(req, res, next) {
    Classroom.findOneAndUpdate({_id: req.params.cid}, {$pull: {assignments:{_id: req.params.aid}}}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.removequiz = function(req, res, next) {
    Classroom.findOneAndUpdate({_id: req.params.cid}, {$pull: {quizzes:{_id: req.params.qid}}}, function(error, results) {
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