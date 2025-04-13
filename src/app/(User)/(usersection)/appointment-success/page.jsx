'use client'

import axios from 'axios';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const AppointmentSuccess = ({params}) => {
  const [loading, setLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const token = Cookies.get('accessToken');

  useEffect(() => {
    const verifyPaymentAndCreateAppointment = async () => {
      const sessionId = new URLSearchParams(window.location.search).get('session_id');
      

      if (!sessionId) return;

      try {
        // Call backend to verify payment and create appointment
        const res = await axios.post(`${API_URL}api/user/appointment/verify-and-create`, {
          sessionId,
        }, {
          headers: { Authorization: `Bearer ${token}` },
        });

        alert("Appointment booked successfully!");
      } catch (err) {
        alert("Failed to create appointment after payment.");
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    verifyPaymentAndCreateAppointment();
  }, []);

  if (loading) return <p>Loading...</p>;
  return <p>Appointment confirmed ✅</p>;

};

export default AppointmentSuccess;