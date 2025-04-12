import React from 'react';
import { FaHiking, FaPaintBrush, FaYinYang, FaUtensils } from 'react-icons/fa';
import { MdPeople, MdCalendarToday, MdAccessTime } from 'react-icons/md';
import { BsBookmarkCheck, BsBookmark } from 'react-icons/bs';

const ActivityCard = ({ activity }) => {
  // Get appropriate icon based on category
  const getCategoryIcon = () => {
    switch (activity.category) {
      case 'Outdoor':
        return <FaHiking className="text-green-600" />;
      case 'Art':
        return <FaPaintBrush className="text-green-600" />;
      case 'Wellness':
        return <FaYinYang className="text-green-600" />;
      case 'Food':
        return <FaUtensils className="text-green-600" />;
      default:
        return <FaHiking className="text-green-600" />;
    }
  };

  return (
    <div className="flex flex-col w-full max-w-sm overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
        {getCategoryIcon()}
        <span className="sr-only">{activity.title}</span>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-900">{activity.title}</h3>
          {activity.booked ? (
            <BsBookmarkCheck className="text-green-600 text-xl" />
          ) : (
            <BsBookmark className="text-gray-400 text-xl" />
          )}
        </div>

        <p className="text-gray-600 mb-4">{activity.description}</p>

        {/* Details */}
        <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center text-gray-700">
            <MdPeople className="mr-1" />
            <span>{activity.numberOfPeople} people</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MdCalendarToday className="mr-1" />
            <span>{new Date(activity.tentativeDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center text-gray-700">
            <MdAccessTime className="mr-1" />
            <span>{activity.time.slice(0, 5)}</span>
          </div>
          <div className="flex items-center">
            <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
              {activity.category}
            </span>
          </div>
        </div>

        {/* Price and Action */}
        <div className="flex justify-between items-center mt-4">
          <span className="text-2xl font-bold text-green-600">${activity.price.toFixed(2)}</span>
          <button
            className={`px-4 py-2 rounded-lg font-medium ${
              activity.booked
                ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                : 'bg-green-600 text-white hover:bg-green-700'
            } transition-colors`}
            disabled={activity.booked}
          >
            {activity.booked ? 'Booked' : 'Join Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

const ActivityList = () => {
  const dummyActivities = [
    {
      id: 1,
      title: "Sunset Hike to the Hills",
      description: "Join us for a beautiful sunset hike with stunning views and great company.",
      numberOfPeople: 12,
      price: 20.0,
      tentativeDate: "2025-04-25",
      time: "17:30:00",
      category: "Outdoor",
      images: [
        "https://example.com/images/hike1.jpg",
        "https://example.com/images/hike2.jpg"
      ],
      booked: false
    },
    {
      id: 2,
      title: "Pottery Workshop for Beginners",
      description: "Learn the basics of pottery in this hands-on workshop. All materials provided!",
      numberOfPeople: 8,
      price: 35.0,
      tentativeDate: "2025-05-10",
      time: "14:00:00",
      category: "Art",
      images: [
        "https://example.com/images/pottery1.jpg",
        "https://example.com/images/pottery2.jpg"
      ],
      booked: true
    },
    {
      id: 3,
      title: "Evening Yoga in the Park",
      description: "Relax and stretch with us in a calm, open-air environment. Suitable for all levels.",
      numberOfPeople: 20,
      price: 10.0,
      tentativeDate: "2025-04-18",
      time: "18:00:00",
      category: "Wellness",
      images: [
        "https://example.com/images/yoga1.jpg",
        "https://example.com/images/yoga2.jpg"
      ],
      booked: false
    },
    {
      id: 4,
      title: "Street Food Tour",
      description: "Explore the city's best street food spots with a local guide.",
      numberOfPeople: 10,
      price: 25.0,
      tentativeDate: "2025-04-20",
      time: "13:00:00",
      category: "Food",
      images: [
        "https://example.com/images/foodtour1.jpg",
        "https://example.com/images/foodtour2.jpg"
      ],
      booked: true
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Upcoming Activities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {dummyActivities.map((activity) => (
          <ActivityCard key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default ActivityList;