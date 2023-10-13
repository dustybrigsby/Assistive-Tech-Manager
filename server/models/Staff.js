const mongoose = require('mongoose');

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
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

// set up pre-save middleware to create password
staffSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
staffSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
