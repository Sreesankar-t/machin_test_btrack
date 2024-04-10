import Class from '../Modal/classModal.js'
import Student from '../Modal/studentModal.js'

//  cration of student
const studentRegister = async (req, res, next) => {
  console.log(req.body,"endaaaaa");
  try {
    const student = await new Student(req.body)
    const savedStudent = await student.save()
    console.log(savedStudent,"banina");
    res.status(200).json({ message: 'student has been created', savedStudent })
  } catch (error) {
    next(error)
  }
}

//creation of class

const classCreation = async (req, res, next) => {
  console.log(req.body);
  try {
    const class1 = await new Class(req.body)
    const savedClass = await class1.save()
    res.status(200).json({ message: 'class has been created', savedClass })
  } catch (error) {
    next(error)
  }
}

// update student class

const updateStudentClass = async (req, res, next) => {
  try {
    const class1 = await Class.findOne(req.body)
    if (!class1) {
      res.status(200).json({
        message: `class not exist standard ${req.body.standard} and division ${req.body.division} `
      })
    }
    let ClassId = class1._id
    const student = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: { classId: ClassId } },
      { new: true }
    )

    res.status(200).json({
      message: 'Successfully updated',
      student
    })
  } catch (error) {
    next(error)
  }
}

// delete student

const deleteStudent = async (req, res, next) => {
  try {
    console.log(req.params.id)
    await Student.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'student has been deleted successfully' })
  } catch (error) {
    next(error)
  }
}


//delete class
const deleteClass = async (req, res, next) => {
  try {
    console.log(req.params.id)
    await Class.findByIdAndDelete(req.params.id)
    res.status(200).json({ message: 'Class has been deleted successfully' })
  } catch (error) {
    next(error)
  }
}


// read all student based on the standard and division

const getStudentStandAndDivision = async (req, res, next) => {
  console.log(req.query,"navaa");
  try {
    const class1 = await Class.findOne(req.query)
    console.log(class1,"epadi");
    if (!class1) {
      res.status(200).json({
        message: 'class not exixst'
      })
    }
    const classId = class1._id

  
    const student = await Student.find({ classId: classId })
    console.log(student,"engeee");
    res.status(200).json({
      message: 'get all student details based on the stadard and division',
      student:student
    })
  } catch (error) {
    next(error)
  }
}

// get all studend based on the standard
const getStudentsBasedonStandard = async (req, res, next) => {
  console.log(req.query,"najamunojdjfajsdfl");

  
  try {
 
    const { standard } = req.query
    console.log(standard);
    const objectIds = await Class.distinct('_id', { standard })
    console.log(objectIds,"irikka");
    if (!objectIds || objectIds.length === 0) {
      return res.status(404).json({
        message: `No students found for standard ${standard}`,
      })
    }
    const students = await Student.find({ classId: { $in: objectIds } })
    res.status(200).json({
      message: `Get all student details based on standard ${standard}`,
      students
    })
  } catch (error) {
    next(error)
  }
}
const test = async (req, res, next) => {
  console.log(req.body);
  res.json('vannuuu')
}

export {
  studentRegister,
  updateStudentClass,
  classCreation,
  deleteStudent,
  deleteClass,
  getStudentStandAndDivision,
  getStudentsBasedonStandard,
  test
}
