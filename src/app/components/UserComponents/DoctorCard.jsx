import React from 'react';
import Image from "next/image";
import { FaStar } from 'react-icons/fa';
import Link from 'next/link';

const DoctorCard = ({ doctor }) => {
  const {
    id,
    firstName,
    lastName,
    role,
    image,
    email,
    experience,
    pricePerHour,
    rating,
    bio
  } = doctor;

  return (
    <div className="w-xs mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
        <Link href={`/bookings/${id}`} className="w-full h-full">
      <div className="w-full h-72 relative">
        <Image
          src={image || "https://via.placeholder.com/400x300?text=No+Image"}
          alt="Profile"
          fill
          className="object-cover"
        />
      </div>

      {/* Info Section */}
      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-900">
          {firstName || "Not available"} {lastName || "Not available"}
        </h2>
        <p className="text-sm text-gray-600 mb-2">{role || "Not available"}</p>

        <span className="font-semibold text-sm">
  {bio
    ? bio.length >= 20
      ? bio.slice(0, 20)
      : `${bio}....`
    : 'not available'}
</span>

        <div className="text-sm grid grid-cols-2 text-gray-400 space-y-1 mt-1">
          <span className="font-semibold">Email</span>
          <p>{email || "Not available"}</p>

          <span className="font-semibold text-gray-400">Experience</span>
          <p>{experience || "Not available"}</p>

          <span className="font-semibold text-gray-400">Per Hour Price</span>
          <p>{pricePerHour ? `$${pricePerHour}` : "Not available"}</p>
        </div>

        <div className="flex items-center mt-3">
          <FaStar className="text-sm text-yellow-500" />
          <span className="ml-1 text-sm text-gray-700">
            {rating || "3"}/5 . {23 || "No"} reviews
          </span>
        </div>
      </div>

      {/* Button */}
      <div className="bg-green-600 text-white text-center py-3 text-sm font-semibold cursor-pointer">
        VIEW PROFILE
      </div>
      </Link>
    </div>
  );
};

export default DoctorCard;
