'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

const SendReport = () => {
  const [fromBackend, setFromBackend] = useState([])
  const [expandedIndex, setExpandedIndex] = useState(null)
  const [formData, setFormData] = useState({})
  const API_URL = process.env.NEXT_PUBLIC_API_URL

  useEffect(() => {
    const fetchData = async () => {
      const storedToken = Cookies.get('docsAccessToken')
      if (!storedToken) return console.error('No token found in cookies')

      try {
        const res = await axios.get(`${API_URL}api/doctor/accepted_appointments`, {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        })
        setFromBackend(res.data.data)
      } catch (error) {
        console.error('Error fetching profile:', error)
      }
    }

    fetchData()
  }, [API_URL])

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const handleChange = (index, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [index]: {
        ...prev[index],
        [field]: value,
      },
    }))
  }

  const handleSubmit = (index) => {
    const report = formData[index]
    if (!report || !report.bloodPressure || !report.heartRate || !report.temperature) {
      alert('Please fill in all fields.')
      return
    }

    // You can perform the actual POST here
    console.log('Submitting report for appointment:', fromBackend[index])
    console.log('Vitals:', report)
    alert('Submitted! (You can now integrate the POST request.)')
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-600 mb-6">Accepted Appointments</h1>

      {fromBackend.length === 0 ? (
        <p className="text-gray-500">No accepted appointments available.</p>
      ) : (
        fromBackend.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
            <div
              onClick={() => toggleExpand(index)}
              className="cursor-pointer flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.patientName}</h2>
                <p className="text-sm text-gray-600">
                  Appointment Date: {new Date(item.dateOfAppointment).toLocaleDateString()}
                </p>
              </div>
              <span className="text-blue-600 font-semibold">
                {expandedIndex === index ? '▲ Hide' : '▼ Expand'}
              </span>
            </div>

            {expandedIndex === index && (
              <div className="mt-4 space-y-3">
                <div className="flex flex-col">
                  <label className="font-medium text-gray-700">Blood Pressure</label>
                  <input
                    type="text"
                    className="p-2 border rounded-md"
                    value={formData[index]?.bloodPressure || ''}
                    onChange={(e) => handleChange(index, 'bloodPressure', e.target.value)}
                    placeholder="e.g., 120/80"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium text-gray-700">Heart Rate</label>
                  <input
                    type="number"
                    className="p-2 border rounded-md"
                    value={formData[index]?.heartRate || ''}
                    onChange={(e) => handleChange(index, 'heartRate', e.target.value)}
                    placeholder="e.g., 72"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="font-medium text-gray-700">Temperature (°C)</label>
                  <input
                    type="number"
                    step="0.1"
                    className="p-2 border rounded-md"
                    value={formData[index]?.temperature || ''}
                    onChange={(e) => handleChange(index, 'temperature', e.target.value)}
                    placeholder="e.g., 36.5"
                  />
                </div>

                <button
                  className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                  onClick={() => handleSubmit(index)}
                >
                  Submit Report
                </button>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
}

export default SendReport
