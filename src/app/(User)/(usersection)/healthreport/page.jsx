'use client';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import HealthReportTable from '@/app/components/UserComponents/HealthReportTable';


export default function ReportComponent() {
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const token = Cookies.get('accessToken');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}api/user/report`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const data = await response.json();
        setFetchedData(data.data || []);
      } catch (error) {
        console.error('Error fetching report:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [API_URL, token]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return <HealthReportTable data={fetchedData} />;
}