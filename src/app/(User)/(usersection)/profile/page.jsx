 "use client";
 
 import React, { useEffect, useState } from "react";
 import {
   FaHeartbeat,
   FaTemperatureHigh,
   FaLungs,
   FaTint,
   FaBurn,
 } from "react-icons/fa";
 import { MdBloodtype } from "react-icons/md";
 import axios from "axios";
 import Cookies from "js-cookie";
 
 const UserProfile = () => {
   const [userDetails, setUserDetails] = useState(null);
   const [report, setReport] = useState(null);
   const [userActivities, setUserActivities] = useState([]);
   const [error, setError] = useState(null);
 
   const API_URL = process.env.NEXT_PUBLIC_API_URL;
   const token = Cookies.get("accessToken");
 
   useEffect(() => {
     const fetchUserData = async () => {
       try {
         const response = await axios.get(`${API_URL}api/user/profile`, {
           headers: {
             Authorization: `Bearer ${token}`,
           },
         });
 
         console.log("User data response:", response.data);
 
         setUserDetails(response.data.user);
         setReport(response.data.latestReport);
         setUserActivities(response.data.user.bookedActivities || []);
       } catch (err) {
         console.error("Failed to fetch user data", err);
         setError("Unable to load user data.");
       }
     };
 
     if (token) {
       fetchUserData();
     }
   }, [API_URL, token]);
 
   if (error) {
     return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100 text-red-500 text-xl">
         {error}
       </div>
     );
   }
 
   if (!userDetails || !report) {
     return (
       <div className="flex items-center justify-center min-h-screen bg-gray-100">
         <div className="text-green-600 text-xl animate-pulse">
           Loading user profile...
         </div>
       </div>
     );
   }
 
   const healthCards = [
     {
       title: "Body Temperature",
       value: `${report.bodyTemperatureCelsius} °C`,
       icon: <FaTemperatureHigh size={30} className="text-red-500" />,
     },
     {
       title: "Blood Pressure",
       value: `${report.bloodPressureSystolic} / ${report.bloodPressureDiastolic} mmHg`,
       icon: <MdBloodtype size={30} className="text-purple-500" />,
     },
     {
       title: "Heart Rate",
       value: `${report.heartRate} bpm`,
       icon: <FaHeartbeat size={30} className="text-pink-500" />,
     },
     {
       title: "Respiratory Rate",
       value: `${report.respiratoryRate} breaths/min`,
       icon: <FaLungs size={30} className="text-blue-500" />,
     },
     {
       title: "Oxygen Saturation",
       value: `${report.oxygenSaturationPercent}%`,
       icon: <FaTint size={30} className="text-teal-500" />,
     },
     {
       title: "Blood Glucose",
       value: `${report.bloodGlucoseMgDl} mg/dL`,
       icon: <FaBurn size={30} className="text-yellow-500" />,
     },
   ];
 
   const handleCancelActivity = (activityId) => {
     // Future: Add API call to cancel activity here
     console.log("Canceling activity:", activityId);
   };
       
     return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
       <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-[80%]">
         {/* Header Info */}
         <div className="flex flex-col items-center text-center text-black">
           <img
             className="w-32 h-32 rounded-full border-4 border-green-500 object-cover"
             src={userDetails.profilePicture}
             alt={`Profile image of ${userDetails.firstName}`}
           />
           <h1 className="text-2xl font-semibold mt-4">
             {userDetails.firstName} {userDetails.lastName}
           </h1>
           <p>{userDetails.address}</p>
         </div>
 
         {/* Health Summary */}
         <div className="mt-8 text-center">
           <h2 className="text-xl font-bold text-green-600 mb-2">Health Condition Summary</h2>
           {/* <p className="bg-gray-50 p-4 rounded-md text-black shadow-sm">
             {report.healthCondition || "No summary available."}
           </p> */}
         </div>
 
         {/* Health Cards */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
           {healthCards.map((card, index) => (
             <div
               key={index}
               className="bg-gray-50 rounded-lg shadow-md p-6 flex flex-col items-center text-black hover:shadow-lg transition-shadow"
             >
               <h3 className="text-lg font-semibold mb-2 text-green-600">{card.title}</h3>
               {card.icon}
               <p className="mt-2 text-lg font-medium">{card.value}</p>
             </div>
           ))}
         </div>
       </div>
 
       {/* Booked Activities Section */}
       <div className="mt-12 w-full max-w-[80%]">
         <h2 className="text-2xl font-bold text-green-600 mb-4">Booked Activities</h2>
         {userActivities.length === 0 ? (
           <p className="text-center text-gray-500">No activities booked yet.</p>
         ) : (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
             {userActivities.map((activity) => (
               <div
                 key={activity.id}
                 className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between text-black hover:shadow-lg transition-shadow"
               >
                 {activity.imageUrl && (
                   <img
                     src={activity.imageUrl}
                     alt={activity.title}
                     className="w-full h-40 object-cover rounded-md mb-4"
                   />
                 )}
                 <h3 className="text-lg font-semibold text-green-600">{activity.title}</h3>
                 <p className="mt-2 text-gray-700 text-sm">{activity.description}</p>
                 <p className="mt-2 text-sm text-gray-500">
                   People: {activity.numberOfPeople}
                 </p>
                 <p className="text-sm text-gray-500">Price: ${activity.price}</p>
                 {activity.date && (
                   <p className="text-sm text-gray-500">Date: {new Date(activity.date).toLocaleDateString()}</p>
                 )}
                 <button
                   onClick={() => handleCancelActivity(activity.id)}
                   className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                 >
                   Cancel
                 </button>
               </div>
             ))}
           </div>
         )}
       </div>
     </div>
   )
 }

 
 export default UserProfile;