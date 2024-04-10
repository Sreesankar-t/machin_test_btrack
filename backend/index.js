import express from 'express'
const app = express()
import mongoose from 'mongoose'
import env from 'dotenv'
import cors from 'cors'
const PORT = 9000
const MONGO =
  'mongodb+srv://registration:register@cluster0.udprahb.mongodb.net/'
env.config()
import router from './Router/studentRouter.js'
import error from './Middleware/middleware.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(cors({ origin: 'http://localhost:8085', credentials: true }))

app.use('/user', router)
app.use(error)

const dbConnection = () => {
  mongoose.connect(MONGO)
  console.log('conneted to mongodb')
}

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
  dbConnection()
})
