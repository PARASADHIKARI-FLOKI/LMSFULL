import User from '../models/User.js'
import {Purchase} from '../models/Purchase.js'
import Stripe from 'stripe'
import Course from '../models/Course.js'
import { CourseProgress } from '../models/CourseProgress.js'


//get userdata
export const getUserData= async(req ,res)=>{
    try {
        const userId= req.auth.userId
        const user =await User.findById(userId)

        if (!user) {
            return res.json({success:false,message:'User NOt Found'})
            
        }
        res.json({success:true,user})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

// user enrollod courses with lecture links
export const userEnrolledCourses= async(req ,res)=>{ 
    try {
        const userId=req.auth.userId
        const userData = await User.findById(userId).populate('enrolledCourses')
        
        res.json({success:true, enrolledCourses:userData.enrolledCourses})
    } catch (error) {
        res.json({success:false, message:error.message})
    }
}

//purchase course
export const purchaseCourse = async(req , res)=>{
    try {
        const {courseId}=req.body
        const {origin}=req.headers
        const userId=req.auth.userId
        const userData= await User.findById(userId)
        const courseData = await Course.findById(courseId)

        if(!userData || !courseData){
           return res.json({success:false,message:'Data Not Found'})
        }

        const purchaseData={
            courseId:courseData._id,
            userId,
            amount:(courseData.coursePrice - courseData.discount * courseData.coursePrice / 100).toFixed(2),
        }

        const newPurchase= await Purchase.create(purchaseData)

        //stripe gateway initialize
        const stripeInstance= new Stripe(process.env.STRIPE_SECRET_KEY)

        const currency = process.env.CURRENCY.toLowerCase()

        //creating line items to  for stripe
        const line_items=[{
            price_data:{
                currency,
                product_data:{
                    name:courseData.courseTitle
                },
                unit_amount: Math.floor(newPurchase.amount) * 100
            },
            quantity:1
        }]

        const session=await stripeInstance.checkout.sessions.create({
            success_url: `${origin}/loading/my-enrollments`,
            cancel_url:`${origin}/`,
            line_items:line_items,
            mode:'payment',
            metadata:{
                purchseId:newPurchase._id.toString()
            }
        })
          res.json({success:true,session_url:session.url})
    } catch (error) {
        res.json({success:false,message:error.message});
    }
}

//Update User course progress
export const UpdateUserCourseProgress= async(req , res)=>{
    try {
        const userId= req.auth.userId
        const {courseId,lectureId}=req.body
        const progressData=await CourseProgress.findOne({userId,courseId})

        if(progressData){
            if(progressData.lectureCompleted.includes(lectureId)){
                 return res.json({success:true, message:'Lecture Already Completed'})
            }
            progressData.lectureCompleted.push(lectureId)
            await progressData.save()
        }else{
            await CourseProgress.create({
                userId,
                courseId,
                lectureCompleted: [lectureId]
            })
        }
        res.json({success:true, message:'Progress Updated'})
    } catch (error) {
        res.json({success:true, message: error.message})
  
    }
}