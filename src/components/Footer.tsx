import React from 'react'
import Link from 'next/link'

function Footer ()  {
  return (
    <div>
        <footer className=" bg-gray-500 pt-4 pb-4 text-white py-8 mr-20 ml-20">
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    
    <div className="mb-4 md:mb-0">
      <h2 className="text-lg font-bold">© 2024 Azka Khizer</h2>
      <p className="text-sm text-gray-400">Web Developer Portfolio</p>
    </div>

  
    <div className="flex space-x-4 mb-4 md:mb-0">
      <a href="#home" className="hover:text-gray-400">Home</a>
      <a href="#about" className="hover:text-gray-400">About</a>
      <a href="#projects" className="hover:text-gray-400">Projects</a>
      <a href="#contact" className="hover:text-gray-400">Contact</a>
    </div>

    <div className="flex space-x-4">
      <a href="https://github.com/AzkaKhizer?tab=repositories" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 1C6.48 1 2 5.48 2 11c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.49v-1.7c-2.78.6-3.36-1.33-3.36-1.33-.45-1.14-1.1-1.45-1.1-1.45-.9-.61.07-.6.07-.6 1 .07 1.52 1.03 1.52 1.03.9 1.53 2.35 1.1 2.92.84.09-.65.35-1.1.63-1.36-2.22-.25-4.56-1.12-4.56-5 0-1.1.39-2 1.03-2.72-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.04.79-.22 1.65-.33 2.5-.33.86 0 1.72.11 2.5.33 1.91-1.3 2.75-1.04 2.75-1.04.55 1.41.2 2.45.1 2.71.64.73 1.03 1.63 1.03 2.72 0 3.89-2.35 4.75-4.58 5 .36.31.68.91.68 1.83v2.7c0 .27.16.58.68.48C19.14 19.17 22 15.42 22 11c0-5.52-4.48-10-10-10z" />
        </svg>
      </a>
      <a href="https://www.linkedin.com/in/azka-khizer/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8a6 6 0 00-6 6v5a1 1 0 01-1 1H7a1 1 0 01-1-1v-5a6 6 0 00-6-6h1a6 6 0 016 6v5a1 1 0 011 1h5a1 1 0 001-1v-5a6 6 0 00-6-6z" />
        </svg>
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 10a9 9 0 11-6.623-8.402A6.19 6.19 0 007 10v.59a3 3 0 000 6H18v-6z" />
        </svg>
      </a>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer