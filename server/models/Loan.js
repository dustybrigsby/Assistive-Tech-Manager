const mongoose = require("mongoose");
const Tool = require("./Tool");
const Student = require("./Student");

const { Schema } = mongoose;

const loanSchema = new Schema({
    tool: Tool,
    student: Student,
    staff: Staff,
    startDate: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
});

const Loan = mongoose.model("Loan", loanSchema);

module.exports = Loan;
