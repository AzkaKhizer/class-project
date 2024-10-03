import React from 'react'
import Link from "next/link"

function Header () {
  return (
    <header className='mr-20 ml-20 '>
    <div>
        <nav>
            <ul className='flex justify-end space-x-6 pr-8  text-white bg-gray-500 pt-4 pb-4 text-[30px]'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    </div>
    </header>
  )
}

export default Header