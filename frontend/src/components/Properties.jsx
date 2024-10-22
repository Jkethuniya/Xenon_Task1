import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import PropertyDetail from './PropertyDetail';
import { useNavigate } from 'react-router-dom';
import { properties } from '../utils/data';
import { recommend } from '../react-query/api/peroperty';
// const properties = [
//   {
//     id: 1,
//     title: "Modern Family Home",
//     location: "Los Angeles, CA",
//     price: "$1,200,000",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 2,
//     title: "Luxury Villa",
//     location: "Miami, FL",
//     price: "$3,500,000",
//     image: "https://via.placeholder.com/300",
//   },
//   {
//     id: 3,
//     title: "Cozy Cottage",
//     location: "Aspen, CO",
//     price: "$850,000",
//     image: "https://via.placeholder.com/300",
//   },
//   // Add more properties as needed
// ];

const Properties = () => {
    const navigate = useNavigate();

    const handleViewDetails = (property) => {
       console.log(property)
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
          // <div key={property.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
          //   <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
          //   <div className="p-4">
          //     <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
          //     <p className="text-gray-600">{property.location}</p>
          //     <p className="text-gray-800 mt-2">{property.price}</p>
      
          //       <button onClick={() => handleViewDetails(property)}  className="mt-4 w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          //         View Details
          //       </button>
          //   </div>
          // </div>
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
