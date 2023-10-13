const mongoose = require("mongoose");

const { Schema } = mongoose;
const Student = require('./Student');
const Staff = require('./Staff');

const schoolSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    students: [Student.schema],
    staff: [Staff.schema]
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
