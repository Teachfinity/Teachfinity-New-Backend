var express = require('express');
var router = express.Router();
var Assignment = require('../controllers/assignments')

/* GET class listing. */
router.get('/getassignments/:id', Assignment.getassignments);

//Adding class
router.post('/newassignment', Assignment.newassignment);

//Update Classname
router.put('/updateassignment/:id/title/:title', Assignment.updatetitle);
//Update Due Time
router.put('/updateassignment/:id/due/:newtime', Assignment.updatetime);

//Delete Class
router.delete('/delassignment/:id', Assignment.deleteassignment);

module.exports = router;