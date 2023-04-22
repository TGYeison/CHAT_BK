import mongoose, { Schema } from "mongoose";

const ChatSchema = new Schema({
    from: String,
    msg: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model('chat', ChatSchema);