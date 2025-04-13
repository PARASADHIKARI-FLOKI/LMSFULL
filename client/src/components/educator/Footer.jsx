import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row items-center justify-between w-full px-6 py-4 border-t border-gray-300 bg-blue-50'>
      
      {/* Left: Logo and Copyright */}
      <div className='flex items-center gap-4 text-gray-500 text-sm'>
        <img className='hidden md:block w-20' src={assets.logo} alt="Logo" />

        {/* Vertical Divider */}
        <div className='hidden md:block h-6 w-px bg-gray-400' />

        <p className='text-center text-xs md:text-sm'>
          &copy; 2025 Floki. All Rights Reserved.
        </p>
      </div>

      {/* Right: Social Icons */}
      <div className='flex items-center gap-4 mt-4 md:mt-0'>
        <a href="#" aria-label="Facebook">
          <img src={assets.facebook_icon} alt="Facebook" />
        </a>
        <a href="#" aria-label="Twitter">
          <img src={assets.twitter_icon} alt="Twitter"  />
        </a>
        <a href="#" aria-label="Instagram">
          <img src={assets.instagram_icon} alt="Instagram" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
