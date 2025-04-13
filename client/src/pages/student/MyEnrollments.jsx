import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import {Line} from 'rc-progress'
import Footer from '../../components/student/Footer';

const MyEnrollments = () => {
  const { enrolledCourses, calculateCourseDuration,navigate } = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([
    { lectureCompleted: 2, totalLectures: 4 },
    { lectureCompleted: 1, totalLectures: 5 },
    { lectureCompleted: 3, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 3 },
    { lectureCompleted: 5, totalLectures: 7 },
    { lectureCompleted: 6, totalLectures: 8 },
    { lectureCompleted: 2, totalLectures: 6 },
    { lectureCompleted: 4, totalLectures: 10 },
    { lectureCompleted: 3, totalLectures: 5 },
    { lectureCompleted: 7, totalLectures: 7 },
    { lectureCompleted: 1, totalLectures: 4 },
    { lectureCompleted: 0, totalLectures: 2 },
    { lectureCompleted: 5, totalLectures: 5 },
  ]);

  return (
    <>
    <div className='md:px-36 px-4 sm:px-8 pt-10'>
      <h1 className='text-2xl font-semibold mb-6'>My Enrollments</h1>

      <div className="overflow-x-auto">
        <table className='min-w-full border-collapse shadow-md rounded-lg overflow-hidden'>
          <thead className='bg-gray-100 text-gray-900 text-sm hidden sm:table-header-group'>
            <tr>
              <th className='px-4 py-3 text-left font-semibold'>Course</th>
              <th className='px-4 py-3 text-left font-semibold'>Duration</th>
              <th className='px-4 py-3 text-left font-semibold'>Completed</th>
              <th className='px-4 py-3 text-left font-semibold'>Status</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-800">
            {enrolledCourses.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">No enrollments found.</td>
              </tr>
            ) : (
              enrolledCourses.map((course, index) => {
                const progress = progressArray[index];
                const isCompleted = progress && progress.lectureCompleted === progress.totalLectures;

                return (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-200 transition block sm:table-row"
                  >
                    <td className='px-4 py-4 block sm:table-cell'>
                      <div className="flex items-center gap-4 flex-col sm:flex-row">
                        <img
                          src={course.courseThumbnail}
                          alt="Course Thumbnail"
                          className='w-20 h-auto rounded-md object-cover'
                        />
                        <p className="font-medium text-center sm:text-left">{course.courseTitle}</p>
                        <Line strokeWidth={2} percent={progressArray[index]?(progressArray[index].lectureCompleted*100)/progressArray[index].totalLectures:0} className='bg-gray-300 rounded-full'/>
                      </div>
                    </td>

                    <td className='px-4 py-4 block sm:table-cell'>
                      {calculateCourseDuration(course)}
                    </td>

                    <td className='px-4 py-4 block sm:table-cell'>
                      {progress && `${progress.lectureCompleted}/${progress.totalLectures}`} <span className="text-gray-500">Lectures</span>
                    </td>

                    <td className='px-4 py-4 block sm:table-cell'>
                      <button onClick={()=>navigate('/player/'+course._id)} className={`px-3 py-1.5 text-sm font-medium rounded-full text-white cursor-pointer 
                        ${isCompleted ? 'bg-green-600' : 'bg-blue-600'} w-full sm:w-auto text-center`}>
                        {isCompleted ? 'Completed' : 'On Going'}
                      </button>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
     
    </div>
     <Footer/>
     </>
  );
};

export default MyEnrollments;
