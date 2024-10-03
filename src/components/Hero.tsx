import React from 'react'
import Image from 'next/image'

function Hero () {
  return (
    <div className="flex bg-gray-800 text-white h-screen mr-20 ml-20 ">
      <div className= "flex-1 flex flex-col items-start justify-center px-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Hi, I am Azka Khizer, a Web Developer Specializing in Modern Web Technologies</h1>
        <p className="text-2xl text-white max-w-md text-center pl-11 ml-20">I create fast, responsive, and user-friendly websites using HTML, CSS, TypeScript, and Next.js. With a strong foundation in front-end and back-end development, I build innovative solutions that not only look great but also provide seamless functionality. Let's bring your ideas to life on the web!</p>
        </div>
        <div className="w-1/4 h-auto ml-auto flex items-center justify-end pr-20 mr-20">
    <Image 
      src="/my-pic.jpeg" 
      alt="Profile picture" 
      width={250} 
      height={200} 
      className="rounded-full"
    />
  </div>
    </div>
  )
}

export default Hero
