var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var classroomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true,
        maxlength: 6,
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    students: {
        type: [{
            sid: {
                type: mongoose.Types.ObjectId,
                ref: 'User'
            }
        }]
    },
    posts: {
        type: [{
            pid: {
                type: mongoose.Types.ObjectId,
                ref: 'Post'
            }
        }]
    },
    classFiles: {
        type: [{
            fileName: {
                type: String
            },
            filePath: {
                type: String
            }
        }]
    },
    environment: {
        type: [{
            mid:{
                type: mongoose.Types.ObjectId,
                ref: "Meeting"
            },
            mood:{
                type: String
            },
        }]
    },
    meetings: {
        type: [{
            mid:{
                type: mongoose.Types.ObjectId,
                ref: "Meeting"
            }
        }]
    },
    assignments: {
        type: [{
            aid:{
                type: mongoose.Types.ObjectId,
                ref: "Assignment"
            }
        }]
    },
    quizzes: {
        type: [{
            qid:{
                type: mongoose.Types.ObjectId,
                ref: "Quiz"
            }
        }]
    }
});

module.exports = mongoose.model('Classroom', classroomSchema);