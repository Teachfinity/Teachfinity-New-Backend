var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var meetingSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
    },
    endTime: {
        type: Date,
    },
    classroom:{
        type: mongoose.Types.ObjectId,
        ref: 'Classroom'
    },
});

module.exports = mongoose.model('Meeting', meetingSchema);