'use client'
import React from 'react';

const GenerateInsites = ({ selectedMetric, values, dates }) => {
  const handleClick = () => {
    console.log("Selected Metric:", selectedMetric);
    console.log("Values:", values);
    console.log("Dates:", dates);
  };

  return (
    <div>
      <button 
        onClick={handleClick}
        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300"
      >
        Generate Insights
      </button>
    </div>
  );
};

export default GenerateInsites;
