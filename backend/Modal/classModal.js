import mongoose from 'mongoose'
const { Schema } = mongoose

const classSchema = new Schema({
  standard: {
    type: String,
    required: true
  },
  division: {
    type: String,
    required: true
  }
})

const Class = mongoose.model('Class', classSchema)

export default Class
