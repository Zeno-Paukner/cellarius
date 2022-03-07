import mongoose from 'mongoose';

const emailConversationSchema = mongoose.Schema({
    subject: String,
    uid: String,
    from: String,
    html: String,
    creator: String,
    email_texts: [String],
    to: [String],
    data_status: Number,
})

var EmailConversation = mongoose.model('EmailConversation', emailConversationSchema);

export default EmailConversation;