import React from "react";
import { FaUserCircle } from "react-icons/fa";
import "./Profile.css"; // Importing custom CSS
import Header from "./Header";
const Profile = () => {
  const user = JSON.parse(localStorage.getItem("profile"));
  console.log(user);

  return (
    // <div className="profile-container flex justify-center items-center min-h-screen bg-gray-100">
    //   <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-lg profile-card">
    //     <div className="flex justify-center">
    //       <FaUserCircle
    //         size={36}
    //         className="text-gray-700 hover:text-gray-900 cursor-pointer"
    //       />
    //     </div>
    //     <div className="text-center">
    //       <h1 className="text-2xl font-bold mb-2">{user["email"]}</h1>
    //       <p className="text-gray-600 mb-2">{user.city}</p>
    //       <p className="text-gray-600 mb-2">{user.email}</p>
    //       <p className="text-gray-600">{user.contact}</p>
    //     </div>
    //   </div>
    // </div>
    <>
    <Header/>
    <div className="profile-container flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="max-w-sm w-full bg-white p-6 rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105">
        <div className="flex justify-center mb-4">
          <FaUserCircle size={64} className="text-gray-700" />
        </div>
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{user.name}</h1> {/* Assuming you have a user.name */}
          <p className="text-gray-600 text-sm mb-1">{user.city}</p>
          <p className="text-gray-600 text-sm mb-1">{user.email}</p>
          <p className="text-gray-600 text-sm">{user.contact}</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Profile;
