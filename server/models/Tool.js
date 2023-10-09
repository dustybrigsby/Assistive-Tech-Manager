const mongoose = require('mongoose');

const { Schema } = mongoose;

const toolSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String
    },
    image: {
        type: String
    },
    assetTag: {
        type: String,
        required: true
    },
    serial: {
        type: String,
    },
    accessories: {
        type: String,
    },
    serial: {
        type: String,
    },
    status: {
        type: String,
        required: true,
        default: "available"
    },
    quantityTotal: {
        type: Number,
        min: 0,
        required: true,
        default: 1
    },
    quantityAvailable: {
        type: Number,
        min: 0,
        required: true,
        default: 1
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    }
});

const Tool = mongoose.model('Tool', toolSchema);

module.exports = Tool;
