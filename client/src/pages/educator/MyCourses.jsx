import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import Loading from '../../components/student/Loading';

const MyCourses = () => {
  const { currency, allCourses } = useContext(AppContext);
  const [courses, setCourses] = useState(null); 

  const fetchEducatorCourses = async () => {
    setCourses(allCourses);
  };

  useEffect(() => {
    fetchEducatorCourses();
  }, []);

  return courses ? (
    <div className='min-h-screen flex flex-col items-center md:p-8 p-4 pt-8 bg-gray-50'>
      <div className='w-full max-w-6xl'>
        <h2 className='pb-6 text-xl font-semibold text-gray-800'>My Courses</h2>
        <div className='overflow-x-auto bg-white shadow-sm rounded-2xl border border-gray-200'>
          <table className='min-w-full text-sm text-left'>
            <thead className='text-gray-700 bg-gray-100 border-b'>
              <tr>
                <th className='px-6 py-4 font-semibold'>Course</th>
                <th className='px-6 py-4 font-semibold'>Earnings</th>
                <th className='px-6 py-4 font-semibold'>Students</th>
                <th className='px-6 py-4 font-semibold'>Published</th>
              </tr>
            </thead>
            <tbody className='text-gray-600'>
              {courses.map((course) => (
                <tr key={course._id} className='hover:bg-gray-100 border-b'>
                  <td className='px-6 py-4 flex items-center space-x-3'>
                    <img
                      src={course.courseThumbnail}
                      alt=""
                      className='w-14 h-14 object-cover rounded-md border'
                    />
                    <span className='truncate max-w-xs whitespace-nowrap overflow-hidden text-ellipsis hidden md:inline-block'>
                      {course.courseTitle}
                    </span>
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap'>
                    {currency}
                    {Math.floor(
                      course.enrolledStudents.length *
                        (course.coursePrice -
                          (course.discount * course.coursePrice) / 100)
                    )}
                  </td>
                  <td className='px-6 py-4'>{course.enrolledStudents.length}</td>
                  <td className='px-6 py-4'>
                    {new Date(course.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default MyCourses;
