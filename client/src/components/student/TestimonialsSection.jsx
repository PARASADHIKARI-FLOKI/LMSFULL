import React from 'react'
import {assets, dummyTestimonial} from '../../assets/assets'

const TestimonialsSection = () => {
  return (
    <div className='pb-20 px-4 md:px-8 lg:px-0 max-w-7xl mx-auto'>
      <div className='text-center mb-16'>
        <h2 className='text-4xl font-bold text-gray-900 mb-4'>Testimonials</h2>
        <p className='text-lg text-gray-600 mx-auto max-w-2xl'>
          Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {dummyTestimonial.map((testimonial, index) => (
          <div 
            key={index} 
            className='relative bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-sm w-full'
          >
            <div className='flex items-start gap-4 mb-6'>
              <img 
                className='h-14 w-14 rounded-full object-cover border-2 border-blue-100'
                src={testimonial.image} 
                alt={testimonial.name}  
              />
              <div>
                <h3 className='text-lg font-semibold text-gray-900'>{testimonial.name}</h3>
                <p className='text-sm text-blue-600 font-medium'>{testimonial.role}</p>
              </div>
            </div>

            <div className='mb-4 flex items-center'>
            {[...Array(5)].map((_, i) => (
                    <img className='h-5' key={i} src={i<Math.floor(testimonial.rating)?assets.star:assets.star_blank} alt="star" />
                  
                ))}
            </div>

            <p className='text-gray-600 mb-6 leading-relaxed'>
              {testimonial.feedback}
            </p>

            <button className='text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 flex items-center'>
              Read more
              <svg 
                className='w-4 h-4 ml-1'
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default TestimonialsSection