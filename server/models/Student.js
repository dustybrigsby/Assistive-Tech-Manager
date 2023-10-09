const mongoose = require('mongoose');

const { Schema } = mongoose;
const Staff = require('./Staff');
const Loan = require('./Loan');

const userSchema = new Schema({
    sid: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[0-9]{6}$/.test(value);
            }
        },
        message: props => `${props.value} is not a valid 6-digit number`
    },
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
    nickName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    staff: [Staff.schema],
    school: {
        type: Schema.Types.ObjectId,
        ref: "School",
        required: true
    },
    loans: [Loan.schema]
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
