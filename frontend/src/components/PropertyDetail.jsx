import React from "react";
import { useLocation } from "react-router-dom";
import "./PropertyDetail.css";
import Header from "./Header";
const PropertyDetail = () => {
  const location = useLocation();
  const property = location.state;

  if (!property) {
    return <p className="no-details">Property details are not available.</p>;
  }

  return (
  <>
  <Header/>
    <div className="property-detail-container mx-auto mt-8 p-4 md:p-8 max-w-3xl bg-white shadow-lg rounded-lg">
  <h1 className="property-title text-3xl md:text-4xl font-bold mb-4 text-gray-800">{property.title}</h1>

  {/* Image Section */}
  <img
    src={property.image}
    alt={property.title}
    className="property-image w-full h-64 object-cover rounded-lg shadow-md mb-6"
  />

  {/* Property Details Table */}
  <table className="property-details-table w-full mb-6 bg-gray-50 border border-gray-200 rounded-lg">
    <tbody>
      <tr className="hover:bg-gray-100 transition duration-200">
        <th className="table-header text-left p-4 font-semibold text-gray-700 border-b">{`Location:`}</th>
        <td className="table-data p-4 border-b">{property.location}</td>
      </tr>
      <tr className="hover:bg-gray-100 transition duration-200">
        <th className="table-header text-left p-4 font-semibold text-gray-700 border-b">{`Price:`}</th>
        <td className="table-data p-4 border-b">₹{property.price} / night</td>
      </tr>
      <tr className="hover:bg-gray-100 transition duration-200">
        <th className="table-header text-left p-4 font-semibold text-gray-700 border-b">{`Category:`}</th>
        <td className="table-data p-4 border-b">{property.category}</td>
      </tr>
      <tr className="hover:bg-gray-100 transition duration-200">
        <th className="table-header text-left p-4 font-semibold text-gray-700 border-b">{`Amenities:`}</th>
        <td className="table-data p-4 border-b">{property.amenities.join(", ")}</td>
      </tr>
    </tbody>
  </table>

  
</div>
</>

  );
};

export default PropertyDetail;
