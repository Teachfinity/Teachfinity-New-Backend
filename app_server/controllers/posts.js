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
module.exports.getpostsbyclass = function (req, res, next) {
    Post.find({classroom: req.params.cid}).sort("createdAt").exec(function (error, results) {
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
module.exports.image = function(req, res, next) {
    Post.findByIdAndUpdate(req.params.id, {imagePath: req.params.image}, function(error, results) {
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