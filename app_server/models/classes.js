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
    }
});

module.exports = mongoose.model('Classroom', classroomSchema);