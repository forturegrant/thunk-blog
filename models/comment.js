import mongoose from 'mongoose'
import commentSchema from '../schemas/comment'

module.exports = mongoose.model('Comment', commentSchema);