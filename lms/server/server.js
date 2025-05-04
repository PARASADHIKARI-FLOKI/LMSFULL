import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import connectDB from './src/configs/mongodb.js'
import { clerkwebhooks, stripeWebhooks } from './src/controllers/webhooks.js'
import educatorRouter from './src/routes/educatorRoutes.js'
import { clerkMiddleware } from '@clerk/express'
import connectCloudinary from './src/configs/cloudinary.js'
import courseRoute from './src/routes/courseRoute.js'
import userRouter from './src/routes/userRoutes.js'

// Get the directory name
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Load environment variables
dotenv.config({ path: join(__dirname, 'src', '.env') })

//initialize express
const app=express()

//connect to database
await connectDB()
await connectCloudinary()


//middlewares
app.use(cors())
app.use(clerkMiddleware({ secretKey: process.env.CLERK_SECRET_KEY }))

//routes
app.get('/',(req,res)=>res.send('API Working'))
app.post('/clerk',express.json(), clerkwebhooks)
app.use('/api/educator',express.json(),educatorRouter)
app.use('/api/course',express.json(),courseRoute)
app.use('/api/user',express.json(),userRouter)
app.post('/stripe',express.raw({type:'application/json'}),stripeWebhooks)

//Port
const PORT = process.env.PORT || 9000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})