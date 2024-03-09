import express from 'express'
 const app =express()
import cors from 'cors'
const PORT = 9000
import router from './Ruter.js'

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({ origin: 'http://localhost:5173', credentials: true }))


app.use('/user',router)


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})