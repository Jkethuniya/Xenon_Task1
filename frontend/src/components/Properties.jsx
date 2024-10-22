import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import PropertyDetail from './PropertyDetail';
import { useNavigate } from 'react-router-dom';
import { properties } from '../utils/data';
import { recommend } from '../react-query/api/peroperty';


const Properties = () => {
    const navigate = useNavigate();

    const handleViewDetails = (property) => {
      //  console.log(property)
        const viewedProperties = JSON.parse(localStorage.getItem('viewedProperties')) || [];

        // Add the new property to the array
        viewedProperties.unshift(property);
    
        // Keep only the last 5 properties
        if (viewedProperties.length > 5) {
          viewedProperties.pop();
        }
    
        localStorage.setItem('viewedProperties', JSON.stringify(viewedProperties));

        navigate(`/property/${property.id}`, { state: property });
      };
    
      
  return (
    <div className="container mx-auto px-4 py-8">
     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
  
          <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
  <div className="relative">
    <img 
      src={property.image} 
      alt={property.title} 
      className="w-full h-48 object-cover transition-transform duration-300 ease-in-out hover:scale-110"
    />
    <div className="absolute top-3 left-3 bg-gray-900 bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded-md">
      {property.location}
    </div>
  </div>

  <div className="p-5">
    <h2 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 hover:text-indigo-600">{property.title}</h2>
    {/* <p className="text-gray-600 text-sm mb-4">{property.location}</p> */}
    <p className="text-lg font-semibold text-green-500 mb-3">₹ {property.price}</p>

    <button 
      onClick={() => handleViewDetails(property)} 
      className="w-full py-3 px-4 bg-indigo-500 text-white rounded-lg font-medium shadow-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 transition-colors duration-300"
    >
      View Details
    </button>
  </div>
</div>

        ))}
      </div>
    </div>
  );
};

export default Properties;
