'use client'; // This is a Client Component

import { useEffect } from 'react';
import Cookies from 'js-cookie';
export default function ReportComponent() {
const token = Cookies.get('accessToken');
console.log('Token:', token); // Log the token to verify it's being retrieved correctly
// Get the token from cookies
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://192.168.100.18:8000/api/user/report', {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          console.log('Response status:', response.status); // Log the response status
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Report data:', data);
      } catch (error) {
        console.error('Error fetching report:', error);
      }
    };

    fetchData();
  }, []);

  return <div>Check console for report data</div>;
}