import React, { useEffect, useState } from 'react';
import { dummyStudentEnrolled } from '../../assets/assets';
import Loading from '../../components/student/Loading';

const StudentsEnrolled = () => {
  const [enrolledStudents, setEnrolledStudents] = useState(null);

  const fetchEnrolledStudents = async () => {
    setEnrolledStudents(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchEnrolledStudents();
  }, []);

  return enrolledStudents ? (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center md:p-8 p-4 pt-8'>
      <div className='w-full max-w-5xl bg-white border border-gray-200 shadow-sm rounded-xl overflow-x-auto'>
        
        <table className='min-w-full text-sm'>
          <thead className='bg-gray-100 text-gray-700 text-left'>
            <tr>
              <th className='px-6 py-3 font-semibold text-center hidden sm:table-cell'>#</th>
              <th className='px-6 py-3 font-semibold'>Student Name</th>
              <th className='px-6 py-3 font-semibold'>Course Title</th>
              <th className='px-6 py-3 font-semibold text-center hidden sm:table-cell'>Date</th>
            </tr>
          </thead>
          <tbody className='text-gray-600'>
            {enrolledStudents.map((item, index) => (
              <tr key={index} className='hover:bg-gray-100 border-b border-gray-100'>
                <td className='px-6 py-4 text-center hidden sm:table-cell'>{index + 1}</td>
                <td className='px-6 py-4 flex items-center space-x-3'>
                  <img
                    src={item.student.imageUrl}
                    alt={item.student.name}
                    className='w-10 h-10 rounded-full object-cover border'
                  />
                  <span className='truncate max-w-[150px]'>{item.student.name}</span>
                </td>
                <td className='px-6 py-4 truncate'>{item.courseTitle}</td>
                <td className='px-6 py-4 text-center hidden sm:table-cell'>
                  {new Date(item.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentsEnrolled;
