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
    fileName: {
        type: String,
        default: null
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
    },
    studentfiles:{
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'Student'
            },
            fileNme: {
              type: String
            },
            fileUrl: {
              type: String
            },
            submittedAt:{
                type: String
            }
        }]
    }
});

module.exports = mongoose.model('Assignment', assignmentSchema);