import express from 'express'
import { getAllCourse, getCourseId } from '../controllers/courseController.js'

const courseRoute = express.Router()

courseRoute.get('/all',getAllCourse)
courseRoute.get('/:id',getCourseId)

export default courseRoute;