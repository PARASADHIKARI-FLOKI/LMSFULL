import Course from "../models/Course.js";

//get all courses
export const getAllCourse=async(req,res)=>{
    try {
        const courses= await Course.find({isPublished:true}).select
        (['-courseContent', '-enrolledStudents']).populate({path:'educator'})
        res.json({success:true, courses})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

// Get Courses by id
export const getCourseId = async (req, res) => {
    const { id } = req.params;
  
    try {
      const courseData = await Course.findById(id).populate({ path: 'educator' });
  
      if (!courseData) {
        return res.status(404).json({ success: false, message: "Course not found" });
      }
  
      // Remove lectureUrl if isPreviewFree is false
      courseData.courseContent.forEach(chapter => {
        chapter.chapterContent.forEach(lecture => {
          if (!lecture.isPreviewFree) {
            lecture.lectureUrl = "";
          }
        });
      });
  
      // Ensure courseRatings is at least an empty array
      if (!courseData.courseRatings) {
        courseData.courseRatings = [];
      }
  
      res.json({ success: true, courseData });
  
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  