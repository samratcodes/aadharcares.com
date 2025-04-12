import HomeRecreational from '@/app/components/UserComponents/HomeRecreational'
import Reportgraph from '@/app/components/UserComponents/Reportgraph'
import React from 'react'
const page = () => {
  return (
    <div className=' mt-3 bg-gray-100'>
      <div className='flex '>
      <div className='flex flex-col items-center  p-4 w-3/4 h-screen bg-gray-100'>
      <Reportgraph/>
      </div>
      <div className='flex flex-col items-center  w-1/4 h-screen bg-gray-100'>
 <HomeRecreational/>
      </div>
      </div>
    </div>
  )
}

export default page
