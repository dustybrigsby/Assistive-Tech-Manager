const mongoose = require("mongoose");
const Tool = require("./Tool");
const Student = require("./Student");

const { Schema } = mongoose;

const loanSchema = new Schema({
    student: Student,
    tool: Tool
});

const Tool = mongoose.model("Tool", loanSchema);

module.exports = Tool;
