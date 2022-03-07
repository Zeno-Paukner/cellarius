const mongoose = require('mongoose');

const ConvoSchema = mongoose.Schema({
    uid: {
        type: String
    },
    subject: {
        type: String
    },
    to: {
        type: Array
    },
    from: {
        type: String
    },
    html: {
        type: String
    },
    enail_texts: {
        type: Array
    },
    data_status: {
        type: Number
    }
});

module.exports = mongoose.model('Convos', ConvoSchema);