var express = require('express');
var router = express.Router();
var Post = require('../controllers/posts')

/* GET post listing. */
router.get('/getposts', Post.getposts);
//get posts by id
router.get('/getposts/id/:id', Post.getpostsbyid);

//Get Post by Classid
router.get('/getposts/:cid', Post.getpostsbyclass);

//Adding post
router.post('/addpost', Post.newpost);

//Update Post title
router.put('/updatepost/:id/title/:title', Post.updateposttitle);
//Update Post Description
router.put('/updatepost/:id/des/:des', Post.updatepostdes);
//Update Creator Name
router.put('/updatepost/:id/creatorname/:name', Post.updatecreatorname);
//Update Creator Display
router.put('/updatepost/:id/creatordp', Post.updatecreatordp);
//Update/Add Image
router.put('/updatepost/:id/image/:image', Post.image);
//Like Post
router.put('/updatepost/:id/likes', Post.likes);
//Unlike Post
router.put('/updatepost/:id/unlike', Post.unlike);
//Update/Add Comment
router.put('/updatepost/:id/user/:name/comment/:comment', Post.comment);

//Delete Post
router.delete('/delpost/:id', Post.deletepost);
//Delete Post By Class
router.delete('/delpost/class/:cid', Post.deletepostbyclass);

module.exports = router;