import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaRegUserCircle, FaHome, FaClipboardList, FaFileMedical, FaSmileBeam } from "react-icons/fa";

const LoginNavbar = () => {
  return (
    <nav className="w-full py-2 px-8 flex items-center justify-between bg-white ">
      {/* Logo */}
      <div className="flex items-center bg-transparent">
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Logo" 
            width={50} 
            height={50} 
            className="cursor-pointer rounded-full" 
          />
        </Link>
      </div>

      {/* Menu Items */}
      <div className="flex justify-around items-center space-x-8">
        <Link href="/userhome" className="hover:text-gray-600 font-semibold flex items-center space-x-1">
          <FaHome />
          <span>Home</span>
        </Link>
        <Link href="/bookings" className="hover:text-gray-600 font-semibold flex items-center space-x-1">
          <FaClipboardList />
          <span>Booking</span>
        </Link>
        <Link href="/healthreport" className="hover:text-gray-600 font-semibold flex items-center space-x-1">
          <FaFileMedical />
          <span>Reports</span>
        </Link>
        <Link href="/recreational" className="hover:text-gray-600 font-semibold flex items-center space-x-1">
          <FaSmileBeam />
          <span>Recreational</span>
        </Link>
        <div className="flex items-center justify-center transition bg-green-600/40 duration-200 text-white font-semibold rounded-full text-sm shadow-sm">
          <FaRegUserCircle className='w-10 h-10'/>
        </div>
      </div>
    </nav>
  )
}

export default LoginNavbar
