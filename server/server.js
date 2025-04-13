import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import connectDB from './src/configs/mongodb.js'
import { clerkwebhooks } from './src/controllers/webhooks.js'

// Get the directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
dotenv.config({ path: join(__dirname, 'src', '.env') })

//initialize express
const app=express()

//connect to database
await connectDB()

//middlewares
app.use(cors())

//routes
app.get('/',(req,res)=>res.send('API Working'))
app.post('/clerk',express.json(), clerkwebhooks)

//Port
const PORT = process.env.PORT || 5002

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})