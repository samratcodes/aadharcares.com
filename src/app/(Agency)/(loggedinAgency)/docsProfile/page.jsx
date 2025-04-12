'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const DoctorProfile = () => {
  const [profile, setProfile] = useState(null)
  const API_URL = process.env.NEXT_PUBLIC_API_URL
  
  useEffect(() => {
    const fetchProfile = async () => {
      const storedToken = Cookies.get('docsAccessToken')
      console.log('Token from cookie:', storedToken)

      if (!storedToken) {
        console.error('No token found in cookies')
        return
      }

      try {
        console.log(storedToken);
        const res = await axios.get(`${API_URL}api/doctor/profile`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })

        console.log('Fetched data:', res.data)
        setProfile(res.data.doctor)
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }

    fetchProfile()
    console.log('Profile:', profile)
  }, [API_URL])

  return (
    <div className="min-h-screen bg-gray-100 rounded-xl py-6">
  <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8">
    <h1 className="text-4xl font-bold text-green-500 mb-8">Profile</h1>

    {profile ? (
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Doctor Info Section (70%) */}
        <div className="w-full md:w-[55%] space-y-4 text-black">
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">First Name:</span>
            <span>{profile.firstName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Last Name:</span>
            <span>{profile.lastName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Username:</span>
            <span>{profile.username}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Contact Number:</span>
            <span>{profile.contactNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Email:</span>
            <span>{profile.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Role:</span>
            <span className="capitalize">{profile.role}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Specialization:</span>
            <span className="capitalize">{profile.specialization}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Bio:</span>
            <span className="capitalize">{profile.bio}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold text-gray-700">Experience:</span>
            <span className="capitalize">{profile.experience}yrs</span>
          </div>

        <div className="flex justify-between items-center mt-4">
          <span className='font-semibold text-gray-700'>Per hour price:</span>
          <div>
          <input type='text' placeholder='' className='border border-gray-300 rounded-l-md p-2 focus:outline-none' />
          <button className='min-h-[41px] bg-green-500 text-white rounded-r-md p-2'>Submit</button>
        </div>
        </div>
        </div>

        {/* Image Section (30%) */}
        <div className="w-full md:w-[30%] flex justify-center md:justify-end">
          <img
            src="/image.png"
            alt="Doctor"
            className="rounded-full w-[200px] h-[200px] object-cover border border-gray-300"
          />
        </div>
      </div>
    ) : (
      <div className="text-gray-500">Loading profile...</div>
    )}
  </div>
</div>

  )
}

export default DoctorProfile
