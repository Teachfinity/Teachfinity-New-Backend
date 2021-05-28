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
    Assignment.find().sort('name').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.getassignment = function (req, res, next) {
    Assignment.find({_id: req.params.id}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};

module.exports.updatetitle = function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, {title: req.params.title}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.updateinstr = function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, {instructions: req.params.instr}, function(error, results) {
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
module.exports.updatemarks = function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, {totalMarks: req.params.newmarks}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.updatefilename = function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, {fileName: req.params.filen}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.updatefilepath = function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, {filePath: req.params.filep}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.studentmarks = function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, {
            "$push": {
                "studentMarks": {
                    "sid": req.params.sid,
                    "marks": req.params.marks
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            
            res.json(results);
        });
}
module.exports.updatestudentfile = function(req, res, next) {
    Assignment.findByIdAndUpdate(req.params.id, {
            "$push": {
                "studentfiles": {
                    "sid": req.params.sid,
                    "fileNme": req.body.fileNme,
                    "fileUrl": req.body.fileUrl,
                    "submittedAt": req.body.submittedAt,
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            // console.log("results ", results);
            // console.log("errors ", error);
            if (error) {
                return next(error);
            }
            // Respond with valid data iska masla to nai?  sid ka sid as student object id jani chaye lakin string ja rhi shayad

            
            
            res.json(results);
        });
}
module.exports.deleteassignment = function(req, res, next) {
    Assignment.findByIdAndDelete(req.params.id, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}