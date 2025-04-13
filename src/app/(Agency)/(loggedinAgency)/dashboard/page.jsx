'use client'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

const Dashboard = () => {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchAppointments = async () => {
      const storedToken = Cookies.get('docsAccessToken')

      if (!storedToken) {
        console.error('No token found in cookies')
        return
      }

      try {
        const res = await axios.get(
          `${API_URL}/api/doctor/appointments`.replace(/([^:]\/)\/+/g, "$1"),
          {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          }
        )
        setAppointments(res.data.data)
      } catch (error) {
        console.error('Error fetching appointments:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchAppointments()
  }, [API_URL])

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-green-500 mb-6">Agent Dashboard</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="bg-green-500 text-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Total Appointments</h2>
            <p className="text-2xl mt-2">{appointments.length}</p>
          </div>
          <div className="bg-white text-black p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Completed</h2>
            <p className="text-2xl mt-2">
              {appointments.filter(appt => appt.status === 'completed').length}
            </p>
          </div>
          <div className="bg-green-400 text-white p-4 rounded-xl shadow">
            <h2 className="text-lg font-semibold">Upcoming</h2>
            <p className="text-2xl mt-2">
              {appointments.filter(appt => appt.status === 'upcoming').length}
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Upcoming Appointments</h2>
          {loading ? (
            <p className="text-gray-500">Loading appointments...</p>
          ) : appointments.length === 0 ? (
            <p className="text-gray-500">No appointments found.</p>
          ) : (
            <ul className="divide-y divide-gray-200">
              {appointments.map((appt, idx) => (
                <li key={idx} className="py-4 flex justify-between items-center">
                  <div>
                    <p className="text-lg font-medium text-black">{appt.patientName}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(appt.date).toLocaleDateString()} - {appt.time}
                    </p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      appt.status === 'completed'
                        ? 'bg-green-500 text-white'
                        : appt.status === 'upcoming'
                        ? 'bg-green-400 text-white'
                        : 'bg-gray-300 text-black'
                    }`}
                  >
                    {appt.status}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
