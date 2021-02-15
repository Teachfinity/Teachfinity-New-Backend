var express = require('express');
var router = express.Router();
var Post = require('../controllers/posts')

/* GET post listing. */
router.get('/getposts', Post.getposts);

//Get Post by Classid
router.get('/getposts/:cid', Post.getpostsbyclass);

//Adding post
router.post('/addpost', Post.newpost);

//Update Post title
router.put('/updatepost/:id/title/:title', Post.updateposttitle);
//Update Post Description
router.put('/updatepost/:id/des/:des', Post.updatepostdes);
//Update/Add Image
router.put('/updatepost/:id/image/:image', Post.image);

//Delete Post
router.delete('/delpost/:id', Post.deletepost);

module.exports = router;