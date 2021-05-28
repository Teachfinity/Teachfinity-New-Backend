var express = require('express');
var router = express.Router();
var Assignment = require('../controllers/assignments')

/* GET class listing. */
router.get('/getassignments', Assignment.getassignments);
router.get('/getassignments/:id', Assignment.getassignment);

//Adding class
router.post('/newassignment', Assignment.newassignment);

//Update Classname
router.put('/updateassignment/:id/title/:title', Assignment.updatetitle);
//Update Instructions
router.put('/updateassignment/:id/instr/:instr', Assignment.updateinstr);
//Update File Name
router.put('/updateassignment/:id/filename/:filen', Assignment.updatefilename);
//Update File Path
router.put('/updateassignment/:id/filepath/:filep', Assignment.updatefilepath);
//Update Due Time
router.put('/updateassignment/:id/due/:newtime', Assignment.updatetime);
//Update Marks
router.put('/updateassignment/:id/marks/:newmarks', Assignment.updatemarks);
//ADD Student Marks
router.put('/updateassignment/:id/student/:sid/marks/:marks', Assignment.studentmarks);
//Update StudentFiles
router.put('/updateassignment/:id/student/:sid/files', Assignment.updatestudentfile);

//Delete Class
router.delete('/delassignment/:id', Assignment.deleteassignment);

module.exports = router;