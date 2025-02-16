var express = require('express');
var router = express.Router();
var User = require('../controllers/users')

/* GET users listing. */
router.get('/getusers', User.getusers);
//Get user by id
router.get('/getusers/:id', User.getuserbyid);
//Get user by name
router.get('/getusers/name/:name', User.getuserbyname);

//Adding New User
router.post('/adduser', User.newuser);

//Update Username
router.put('/updateuser/:id/name/:name', User.updateusername);
//Update Classes Owned
router.put('/updateuser/:id/classroomsOwned/:cid', User.updateclassesowned);
//Update Classes Enrolled
router.put('/updateuser/:id/classroomsJoined/:cid', User.updateclassesjoined);
//Update Password
router.put('/updateuser/:id/password/:password', User.updateuserpassword);
//Update Profile Pic
router.put('/updateuser/:id/profilePic', User.updateprofilepic);
//Add Assignment
router.put('/updateuser/:id/assignment/:aid', User.addassignment);
//Add Task
router.put('/updateuser/:id/task/:task', User.addtask);

//Remove Task
router.put('/updateuser/:id/removetask/:task', User.removetask);
//Remove Classes Owned
router.put('/updateuser/:id/removeclassowned/:cid', User.removeClassOwned);
//Remove Classes Joined
router.put('/updateuser/:id/removeclassjoined/:cid', User.removeClassJoined);
//Remove Assignments
router.put('/updateuser/:id/removeassignment/:sid', User.removeAssignment);

//Delete User
router.delete('/deluser/:id', User.deleteuser);

module.exports = router;