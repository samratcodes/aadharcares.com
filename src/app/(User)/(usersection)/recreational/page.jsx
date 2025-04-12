'use client'
import React, { useState } from 'react';
import { FaHiking, FaPaintBrush, FaYinYang, FaUtensils, FaRegBookmark, FaBookmark, FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import { FiUsers, FiCalendar, FiClock, FiMapPin } from 'react-icons/fi';
import Image from 'next/image';
const ActivityCard = ({ activity, onClick }) => {


  return (
    <div 
      className="flex flex-col w-full max-w-sm overflow-hidden bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      onClick={onClick}
    >
      {/* Card content remains the same */}
      <div className="relative w-full h-48 bg-gradient-to-r from-gray-50 to-gray-100 flex items-center justify-center">
        <Image
        width={300}
        height={300}
          src={activity.images[0]}
          alt={activity.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3">
          {activity.booked ? (
            <FaBookmark className="text-emerald-600 text-xl" />
          ) : (
            <FaRegBookmark className="text-gray-300 text-xl hover:text-emerald-400 transition-colors" />
          )}
        </div>
      </div>

      <div className="p-5 flex flex-col h-full">
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-emerald-600 uppercase bg-emerald-50 rounded-full">
            {activity.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
        <p className="text-gray-600 mb-5 flex-grow">{activity.description}</p>

        <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
          <div className="flex items-center text-gray-700 space-x-1.5">
            <FiUsers className="text-gray-400 flex-shrink-0" />
            <span>{activity.numberOfPeople} spots</span>
          </div>
          <div className="flex items-center text-gray-700 space-x-1.5">
            <FiCalendar className="text-gray-400 flex-shrink-0" />
            <span>{new Date(activity.tentativeDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center text-gray-700 space-x-1.5">
            <FiClock className="text-gray-400 flex-shrink-0" />
            <span>{activity.time.slice(0, 5)}</span>
          </div>
          <div className="flex items-center text-gray-700 space-x-1.5">
            <FiMapPin className="text-gray-400 flex-shrink-0" />
            <span>Location</span>
          </div>
        </div>

        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-500">From</span>
            <span className="text-2xl font-bold text-emerald-600 block">${activity.price.toFixed(2)}</span>
          </div>
          <button
            className={`px-5 py-2.5 rounded-lg font-medium text-sm tracking-wide transition-all ${
              activity.booked
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-emerald-200'
            }`}
            disabled={activity.booked}
            onClick={(e) => e.stopPropagation()}
          >
            {activity.booked ? 'Fully Booked' : 'Join Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ActivityModal = ({ activity, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === activity.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? activity.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          {/* Close button */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10 hover:bg-gray-100"
          >
            <FaTimes className="text-gray-600" />
          </button>

          {/* Image slider */}
          <div className="relative h-64 md:h-96 bg-gray-100">
            {activity.images.length > 0 ? (
              <>
                <img 
                  src={activity.images[currentImageIndex]} 
                  alt={activity.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation arrows */}
                {activity.images.length > 1 && (
                  <>
                    <button 
                      onClick={(e) => { e.stopPropagation(); prevImage(); }}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                    >
                      <FaChevronLeft className="text-gray-600" />
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); nextImage(); }}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
                    >
                      <FaChevronRight className="text-gray-600" />
                    </button>
                  </>
                )}
                
                {/* Image indicators */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {activity.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                      className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-emerald-600' : 'bg-white bg-opacity-50'}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <FaHiking size={48} className="text-emerald-600" />
              </div>
            )}
          </div>

          {/* Modal content */}
          <div className="p-6">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide text-emerald-600 uppercase bg-emerald-50 rounded-full">
                {activity.category}
              </span>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-3">{activity.title}</h2>
            <p className="text-gray-600 mb-6">{activity.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center text-gray-700">
                <FiUsers className="text-gray-400 mr-2" />
                <span>{activity.numberOfPeople} spots available</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FiCalendar className="text-gray-400 mr-2" />
                <span>{new Date(activity.tentativeDate).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FiClock className="text-gray-400 mr-2" />
                <span>{activity.time.slice(0, 5)}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <FiMapPin className="text-gray-400 mr-2" />
                <span>Location details</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-gray-100 pt-4">
              <div>
                <span className="text-xs text-gray-500">Starting from</span>
                <span className="text-3xl font-bold text-emerald-600 block">${activity.price.toFixed(2)}</span>
              </div>
              <button
                className={`px-6 py-3 rounded-lg font-medium text-base tracking-wide transition-all ${
                  activity.booked
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-md hover:shadow-emerald-200'
                }`}
                disabled={activity.booked}
              >
                {activity.booked ? 'Fully Booked' : 'Book Now'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ActivityList = () => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const dummyActivities = [
    {
      id: 1,
      title: "Sunset Hike to the Hills",
      description:
        "Join us for a beautiful sunset hike with stunning views and great company. This moderate 5-mile hike takes you through scenic trails with panoramic views perfect for photography enthusiasts.",
      numberOfPeople: 12,
      price: 20.0,
      tentativeDate: "2025-04-25",
      time: "17:30:00",
      category: "Outdoor",
      images: [
        "https://images.pexels.com/photos/31439681/pexels-photo-31439681/free-photo-of-historic-building-scene-with-sitting-seniors-in-istanbul.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31520992/pexels-photo-31520992/free-photo-of-elderly-man-walking-by-river-in-vrindavan.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      booked: false
    },
    {
      id: 2,
      title: "Yoga in the Park",
      description:
        "Experience peace and tranquility in an open-air yoga session led by a certified instructor. Suitable for all levels.",
      numberOfPeople: 20,
      price: 10.0,
      tentativeDate: "2025-05-01",
      time: "06:30:00",
      category: "Wellness",
      images: [
        "https://images.pexels.com/photos/31576587/pexels-photo-31576587/free-photo-of-senior-woman-practicing-yoga-outdoors-among-trees.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/31576588/pexels-photo-31576588/free-photo-of-active-senior-woman-practicing-yoga-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      booked: false
    },
    {
      id: 3,
      title: "Coffee Brewing Workshop",
      description:
        "Learn the art of brewing the perfect cup of coffee using various methods like pour-over and French press.",
      numberOfPeople: 15,
      price: 25.0,
      tentativeDate: "2025-05-10",
      time: "10:00:00",
      category: "Workshop",
      images: [
        "https://images.pexels.com/photos/4499395/pexels-photo-4499395.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/4820817/pexels-photo-4820817.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      booked: false
    },
    {
      id: 4,
      title: "Night Sky Star Gazing",
      description:
        "Discover constellations and planets with telescopes under expert guidance. A magical experience for space lovers.",
      numberOfPeople: 30,
      price: 18.0,
      tentativeDate: "2025-05-20",
      time: "20:00:00",
      category: "Science",
      images: [
        "https://images.pexels.com/photos/7597830/pexels-photo-7597830.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/13213753/pexels-photo-13213753.jpeg?auto=compress&cs=tinysrgb&w=600"
      ],
      booked: false
    },
    {
      id: 5,
      title: "Local Art Tour",
      description:
        "Explore the local art scene with a guided tour through popular galleries and street art spots.",
      numberOfPeople: 10,
      price: 15.0,
      tentativeDate: "2025-05-12",
      time: "13:00:00",
      category: "Culture",
      images: [
        "https://images.pexels.com/photos/18698307/pexels-photo-18698307/free-photo-of-buildings-and-cathedral-of-barcelona.jpeg?auto=compress&cs=tinysrgb&w=600",
    
      ],
      booked: false
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Discover Upcoming Activities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Join unique experiences and connect with like-minded people</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {dummyActivities.map((activity) => (
          <ActivityCard 
            key={activity.id} 
            activity={activity} 
            onClick={() => setSelectedActivity(activity)}
          />
        ))}
      </div>
      
      <div className="text-center mt-12">
        <button className="px-6 py-3 border border-emerald-600 text-emerald-600 rounded-lg font-medium hover:bg-emerald-50 transition-colors">
          View All Activities
        </button>
      </div>

      {selectedActivity && (
        <ActivityModal 
          activity={selectedActivity} 
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </div>
  );
};

export default ActivityList;