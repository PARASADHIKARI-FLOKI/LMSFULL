import React from 'react'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <footer className='bg-gray-900 w-full mt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 py-12 border-b border-white/30'>
          {/* Logo Section */}
          <div className='space-y-4'>
            <img 
              src={assets.logo_dark} 
              alt="logo" 
              className='h-8 w-auto mx-auto md:mx-0'
            />
            <p className='text-sm text-gray-400 text-center md:text-left w-2xs'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text.
            </p>
          </div>

          {/* Company Links */}
          <div className='space-y-4 ml-20'>
            <h2 className='font-semibold text-white text-lg mb-2 text-center md:text-left'>
              Company
            </h2>
            <ul className='space-y-2 text-center md:text-left'>
              {['Home', 'About', 'Contact us', 'Privacy policy'].map((item) => (
                <li key={item}>
                  <a 
                    href="#" 
                    className='text-gray-400 hover:text-white transition-colors text-sm'
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className='md:col-span-2 space-y-4'>
            <h2 className='font-semibold text-white text-lg mb-2 text-center md:text-left'>
              Subscribe to our newsletter
            </h2>
            <p className='text-sm text-gray-400 text-center md:text-left'>
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <div className='flex flex-col sm:flex-row gap-3 mt-4'>
              <input 
                type="email" 
                placeholder='Enter your email'
                className='flex-1 px-4 py-2 rounded-md bg-gray-800 border border-gray-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-gray-300 placeholder-gray-500'
              />
              <button className='px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-md whitespace-nowrap'>
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='py-6'>
          <p className='text-center text-sm text-gray-400'>
            Copyright 2024 © Edemy. All Right Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer