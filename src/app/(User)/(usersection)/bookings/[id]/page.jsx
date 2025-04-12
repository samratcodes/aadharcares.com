'use client'
import React, { use } from 'react';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const page = (props) => {
  const { id } = use(props.params); // ✅ unwrap the Promise
  const numericId = Number(id);
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const token = Cookies.get('accessToken');
 const [fetchedData, setFetchedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}api/user/doctors/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        setFetchedData(data.data|| []);
        console.log(data)
      } catch (error) {
        console.error('Error fetching report:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [API_URL, token]);

  return (
    <div>

    </div>
  );
};

export default page;
