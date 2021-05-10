var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var assignmentSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
    },
    dueTime: {
        type: Date,
    },
    filePath: {
        type: String,
        default: null
    },
    totalMarks: {
        type: Number,
    },
    graded:{
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model('Assignment', assignmentSchema);