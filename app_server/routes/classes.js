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
//Get students by class id
router.get('/getstudents/class/:cid', Classroom.getstudentsbyclass);
//Get quizzes by class id
router.get('/getquizzes/class/:cid', Classroom.getquizzes);
//Get assignments by class id
router.get('/getassignments/class/:cid', Classroom.getassignments);

//Adding class
router.post('/addclass', Classroom.newclass);

//Update Classname
router.put('/updateclass/:id/name/:name', Classroom.updateclassname);
//Add Teacher
router.put('/updateclass/:cid/teacher/:tid', Classroom.addteacher);
//Add Students
router.put('/updateclass/:cid/student/:sid', Classroom.addstudents);
//Add Files
router.put('/updateclass/:cid/file/:fileName', Classroom.addfiles);
//Add Posts
router.put('/updateclass/:cid/post/:pid', Classroom.addposts);
//Add Meetings
router.put('/updateclass/:cid/meeting/:mid', Classroom.addmeetings);
//Add Mood
router.put('/updateclass/:cid/meeting/:mid/mood/:mood', Classroom.addmood);
//Add Assignments
router.put('/updateclass/:cid/assignment/:aid', Classroom.addassignment);
//Add Quizzes
router.put('/updateclass/:cid/quiz/:qid', Classroom.addquiz);
//Remove Assignments
router.put('/updateclass/:cid/removeassignment/:aid', Classroom.removeassignment);
//Remove Quiz
router.put('/updateclass/:cid/removequiz/:qid', Classroom.removequiz);
//Update Password
router.put('/updateclass/:id/password/:password', Classroom.updateclasspassword);

//Delete Class
router.delete('/delclass/:id', Classroom.deleteclass);

module.exports = router;