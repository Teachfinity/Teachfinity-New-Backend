var Quiz = require('../models/quizzes');
//Add new user
module.exports.newquiz = function (req, res, next) {
    console.log(req.body);
    Quiz.create(req.body)
        .then((user) => {
            console.log('User has been Added ', user);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(user);
        }, (err) => next(err))
        .catch((err) => next(err));
};
module.exports.getquiz = function (req, res, next) {
    Quiz.findById(req.params.id).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.getquizzes = function(req, res, next) {
    Quiz.find({class: req.params.cid}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.addquestions = function(req, res, next) {
    Quiz.findByIdAndUpdate(req.params.id, {
            "$push": {
                "questions": {
                    "question": req.params.quest
                }
            }
        }, { new: true, upsert: false },
        function(error, results) {
            if (error) {
                console.log(error)
                return next(error);
            }
            // Respond with valid data
            res.json(results);
        });
}
module.exports.updatequiz = function(req, res, next) {
    Quiz.findByIdAndUpdate(req.params.id, {
            "$push": {
                "students": {
                    "sid": req.params.sid,
                    "answer": req.body.result
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
module.exports.studentmarks = function(req, res, next) {
    Quiz.findByIdAndUpdate(req.params.qid, {
            $push: {
                "allMarks": {
                    "sid": req.params.sid,
                    "marks": req.params.marks
                }
            }
        }, { new: false, upsert: false },
        function(error, results) {
            if (error) {
                return next(error);
            }
            // Respond with valid data
            console.log(results)
            res.json(results);
        });
}
module.exports.deletequiz = function(req, res, next) {
    Quiz.findByIdAndDelete(req.params.id, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}