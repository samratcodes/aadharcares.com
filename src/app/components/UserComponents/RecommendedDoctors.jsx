import React from 'react'
import {FaHandHoldingMedical} from "react-icons/fa";
const RecommendedDoctors = () => {
  return (
     <div className='w-full bg-white rounded-lg shadow-sm mx-4 mt-4 p-6'>
          <span className="text-2xl font-bold text-green-600">
          <FaHandHoldingMedical className='inline-block mr-2'/>
         Recommended Doctors
        </span>
    </div>
  )
}

export default RecommendedDoctors
