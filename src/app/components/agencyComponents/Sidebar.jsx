'use client'

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { FaHome, FaUserCheck, FaSignOutAlt, FaFileAlt, FaMoneyCheckAlt, FaUserCircle } from "react-icons/fa"

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <div className="h-screen w-75 bg-gray-100 flex flex-col justify-between">
      <div>
        <div className="flex items-center bg-transparent m-3">
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

        <ul className="flex flex-col mt-5 ml-5 mr-3">
          <li className="border-b border-gray-300 pb-2 mb-2">
            <Link 
              href="/dashboard" 
              className={`flex items-center gap-2 text-gray-700 text-lg font-semibold hover:text-green-300 ${pathname === "/dashboard" ? "text-green-500" : ""}`}
            >
              <FaHome className="text-xl" />
              Home
            </Link>
          </li>

          <li className="border-b border-gray-300 pb-2 mb-2">
            <Link 
              href="/clientsVerify" 
              className={`flex items-center gap-2 text-gray-700 text-lg font-semibold hover:text-green-300 ${pathname === "/clientsVerify" ? "text-green-500" : ""}`}
            >
              <FaUserCheck className="text-xl" />
              Clients Verify
            </Link>
          </li>

          <li className="border-b border-gray-300 pb-2 mb-2">
            <Link 
              href="/sendReport" 
              className={`flex items-center gap-2 text-gray-700 text-lg font-semibold hover:text-green-300 ${pathname === "/sendReport" ? "text-green-500" : ""}`}
            >
              <FaFileAlt className="text-xl" />
              Reports
            </Link>
          </li>

          <li className="border-b border-gray-300 pb-2 mb-2">
            <Link 
              href="/paymentHistory" 
              className={`flex items-center gap-2 text-gray-700 text-lg font-semibold hover:text-green-300 ${pathname === "/paymentHistory" ? "text-green-500" : ""}`}
            >
              <FaMoneyCheckAlt className="text-xl" />
              Payment History
            </Link>
          </li>

          <li>
            <Link 
              href="/docsProfile" 
              className={`flex items-center gap-2 text-gray-700 text-lg font-semibold hover:text-green-300 ${pathname === "/docsProfile" ? "text-green-500" : ""}`}
            >
              <FaUserCircle className="text-xl" />
              Profile
            </Link>
          </li>
        </ul>
      </div>

      <div className="ml-5 mr-3 mb-5">
        <Link 
          href="/agencylogin" 
          className="flex items-center gap-2 text-gray-700 text-[1.15rem] font-semibold hover:text-green-300"
        >
          <FaSignOutAlt className="text-xl" />
          Logout
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
