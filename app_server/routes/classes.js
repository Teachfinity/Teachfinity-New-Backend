var express = require('express');
var router = express.Router();
var Classroom = require('../controllers/classes')

/* GET class listing. */
router.get('/getclasses', Classroom.getclasses);
//Get class by id
router.get('/getclasses/:id', Classroom.getclassesbyid);
//Get class by name
router.get('/getclasses/name/:name', Classroom.getclassesbyname);
//Get class by code
router.get('/getclasses/code/:code', Classroom.getclassesbycode);

//Adding class
router.post('/addclass', Classroom.newclass);

//Update Classname
router.put('/updateclass/:id/name/:name', Classroom.updateclassname);
//Add Teacher
router.put('/updateclass/:cid/teacher/:tid', Classroom.addteacher);
//Add Students
router.put('/updateclass/:cid/student/:sid', Classroom.addstudents);
//Add Posts
router.put('/updateclass/:cid/post/:pid', Classroom.addposts);
//Update Password
router.put('/updateclass/:id/password/:password', Classroom.updateclasspassword);

//Delete Class
router.delete('/delclass/:id', Classroom.deleteclass);

module.exports = router;