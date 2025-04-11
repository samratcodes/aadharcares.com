'use client';

import Image from 'next/image';
import Link from 'next/link'; // ✅ Import Link


export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <div
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(https://adhar-lemon.vercel.app/assets/Logonot-Dlg_UQDs.png)` }} 
      >
        <div className="absolute inset-0 flex items-center justify-start p-8 sm:pl-16 sm:pb-28 bg-black/30">
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="flex items-center gap-4">
              <div className="bg-[#009C65] w-2 h-12 sm:h-24"></div>
              <div className="text-white text-2xl sm:text-4xl font-bold leading-tight">
                <p>A place where</p>
                <p>"AGEING IS A BLESSING"</p>
              </div>
            </div>
            <p className="text-white text-sm sm:text-md">
              HHEC is staffed by geriatric trained professionals that offer full
              range of services to elderly ensuring their physical, mental and
              psychological well-being.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="my-12 px-6 sm:my-24 sm:px-16 lg:px-64 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20">
        <div>
          <h2 className="text-[#009C65] text-xl sm:text-2xl font-semibold mb-6">About Us</h2>
          <p className="text-gray-600 text-base leading-relaxed">
            Pioneering in Alzheimer’s and Dementia Care in Nepal, Hope Hermitage Elderly Care is a home delivering assurance of living in dignity...
          </p>
          <ul className="list-disc pl-4 mt-6 text-gray-600 space-y-2">
            <li>Regular Tai-chi, yoga and meditation class</li>
            <li>Audio/Video entertainment</li>
            <li>Health awareness programs</li>
            <li>Newspaper reading and writing activities</li>
          </ul>
          <Link href="/about">
            <button className="bg-[#009C65] text-white px-5 py-3 mt-8 rounded-md hover:bg-[#007F50] transition">
              Learn More
            </button>
          </Link>
        </div>
        <div className="overflow-hidden rounded-xl shadow-md max-h-[400px] lg:max-h-[600px]">

        </div>
      </section>

      {/* Info Cards */}
      <section className="bg-gray-50 py-16 px-6 sm:px-12 flex flex-wrap justify-center gap-8">
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={i}
            className="w-full sm:w-80 bg-white rounded-lg shadow-md p-6 text-center relative"
          >
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-green-500 p-3 rounded-full shadow-md">
              {/* <CiGlobe size={30} color="white" /> */}
            </div>
            <h3 className="mt-6 font-bold text-lg">24/7 Nursing & Dementia Care</h3>
            <p className="text-gray-600 mt-3 text-sm">
              Specialized elderly care, Alzheimer’s, post-hospital recovery and physiotherapy in a warm, home-like setting.
            </p>
            <Link href="/services">
              <span className="text-orange-600 mt-4 inline-block cursor-pointer">
                Read More →
              </span>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
}
