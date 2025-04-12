import React from 'react'
import Image from 'next/image'
import { MdOutlineGroups2 } from "react-icons/md";
const HomeRecreational = () => {
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
    <div className='w-full bg-white rounded-lg shadow-sm m-4 p-6'>
      <span className="text-2xl font-bold text-green-600">
                          <MdOutlineGroups2 className='inline-block mr-2'/>
                          Recreational Activities
                        </span>
      <div className='space-y-4'>
        {dummyActivities.slice(0,6).map((activity) => (
          <div 
            key={activity.id} 
            className='flex items-center gap-4 p-4 rounded-lg border border-gray-100 hover:shadow-md transition-shadow'
          >
            <div className='relative w-24 h-24 flex-shrink-0'>
              <Image
                src={activity.images[0]}
                alt={activity.title}
                fill
                className='rounded-lg object-cover'
              />
            </div>
            <div className='flex-1'>
              <h2 className='text-lg font-semibold text-gray-800'>
                {activity.title.slice(0,20)}</h2>
              <p className='text-sm text-gray-500 mt-1 line-clamp-2'>{activity.description.slice(0,20)}</p>
              <div className='flex items-center mt-2 text-sm text-gray-600'>
                <span>{activity.tentativeDate}</span>
                <span className='mx-2'>•</span>
                <span>${activity.price.toFixed(2)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomeRecreational