var express = require('express');
var router = express.Router();
var Meeting = require('../controllers/meetings')

/* GET meeting listing. */
router.get('/getmeetings', Meeting.getmeetings);
//Get meeting by id
router.get('/getmeetings/:id', Meeting.getmeetingsbyid);
//Get meeting by name
router.get('/getmeetings/name/:name', Meeting.getmeetingsbyname);
//Get meeting by classid
router.get('/getmeetings/class/:cid', Meeting.getmeetingsbyclass);

//Adding meeting
router.post('/addmeeting', Meeting.newmeeting);

//Update Classname
router.put('/updatemeeting/:id/name/:name', Meeting.updatemeetingname);
//Update Start Time
router.put('/updatemeeting/:cid/starttime/:sid', Meeting.starttime);
//Add Students
router.put('/updateclass/:cid/endtime/:eid', Meeting.endtime);


//Delete Meeting
router.delete('/delmeeting/:id', Meeting.deletemeeting);
//Delete Meeting by Class
router.delete('/delmeeting/class/:cid', Meeting.deletemeetingbyclass);

module.exports = router;