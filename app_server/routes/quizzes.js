var express = require('express');
var router = express.Router();
var Quiz = require('../controllers/quizzes')

/* GET quiz listing. */
router.get('/getquiz/:id', Quiz.getquiz);
//Get quizzes by class id
router.get('/getquizzes/class/:cid', Quiz.getquizzes);

//Adding quiz
router.post('/newquiz', Quiz.newquiz);

//Add quiz questions
router.put('/updatequiz/:id/addquestion/:quest', Quiz.addquestions);
//Update quiz students
router.put('/updatequiz/:id/student/:sid/response', Quiz.updatequiz);
//Update student marks
router.put('/updatequiz/:qid/student/:sid/marks/:marks', Quiz.studentmarks);

//Delete quiz
router.delete('/delquiz/:id', Quiz.deletequiz);

module.exports = router;