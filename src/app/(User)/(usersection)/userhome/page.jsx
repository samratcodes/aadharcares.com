import HomeRecreational from '@/app/components/UserComponents/HomeRecreational'
import RecommendedDoctors from '@/app/components/UserComponents/RecommendedDoctors'
import Reportgraph from '@/app/components/UserComponents/Reportgraph'
import React from 'react'
const page = () => {
  return (
    <div className=' bg-gray-100'>
      <div className='flex '>
      <div className='flex flex-col items-center  p-4 w-3/4 h-full bg-gray-100'>
      <Reportgraph/>
      </div>
      <div className='flex flex-col items-center  w-1/4 h-full bg-gray-100'>
      <HomeRecreational/>
      </div>
      </div>
      <div className=' px-8 bg-gray-100 rounded-lg shadow-md mt-2'>
        <RecommendedDoctors/>
      </div>
    </div>
  )
}

export default page
