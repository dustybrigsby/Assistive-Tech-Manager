const mongoose = require('mongoose');

const { Schema } = mongoose;
const Student = require('./Student');
const School = require('./School');

const staffSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    middleName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    schools: [School.schema],
    students: [Student.schema]
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
