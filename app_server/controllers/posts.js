var Post = require('../models/posts');

module.exports.newpost = function (req, res, next) {
    Post.create(req.body)
        .then((post) => {
            console.log('Post has been Added ', post);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(post);
        }, (err) => next(err))
        .catch((err) => next(err));
};
module.exports.getposts = function (req, res, next) {
    Post.find().sort('name').exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.getpostsbyid = function (req, res, next) {
    Post.find({_id: req.params.id}).exec(function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results[0]);
    });
}
module.exports.getpostsbyclass = function (req, res, next) {
    Post.find({classroom: req.params.cid}).sort({"createdAt": "desc"}).exec(function (error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.updateposttitle = function(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, {title: req.params.title}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.updatepostdes = function(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, {description: req.params.des}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.updatecreatorname = function(req, res, next) {
    Post.updateMany({uid: req.params.id}, {creatorName: req.params.name}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.updatecreatordp = function(req, res, next) {
    Post.updateMany({uid: req.params.id}, {creatorDisplay: req.body.dp}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.image = function(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, {imagePath: req.params.image}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.likes = function(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, {$inc: {likes: 1}}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.unlike = function(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, {$inc: {likes: -1}}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
};
module.exports.comment = function(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, {
        "$push": {
            "comments": {
                "commentor": req.params.name,
                "comment": req.params.comment
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
};
module.exports.deletepost = function(req, res, next) {
    Post.findByIdAndDelete(req.params.id, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}
module.exports.deletepostbyclass = function(req, res, next) {
    Post.deleteMany({classroom: req.params.cid}, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}