import mongoose from 'mongoose'
const { Schema } = mongoose

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  roll_no: {
    type: Number,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  classId: {
    type: String,
    required: true
  },
 
})

const Student = mongoose.model('Student', studentSchema)

export default Student
