import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { Button } from 'antd';
import { loggedOut } from '../utils/auth/getUserInfo';

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate()
  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleLogout = () => {
    loggedOut();
    navigate("/login")
  }
  return (
  
    <div className="flex justify-between items-center mb-8 bg-gray-100 p-6 rounded-lg shadow-lg">
      <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxIHBhMTExMVFhUWFxgXFhMYFRgXGhYYFRcXFxURGBMYHSggGSYlGxgXIT0iMSkuLjMuGCEzRDMuNygtLisBCgoKDg0OGxAQGzcmHyUvNDc3Ny0tLS0vNy8tNTIrLy0tLjEtLSsvKy0tNy0rLS43KysrLS0tLS0tNTctNS0vLf/AABEIALoBDwMBIgACEQEDEQH/xAAcAAEAAwEBAQEBAAAAAAAAAAAABQYHBAIDAQj/xABIEAABAwIFAQQDCwcLBQAAAAABAAIDBBEFBhIhMUEHE1FhInGRFDJCUmKBobGys8EjM3J0w9HwFRYkQ1NUY2RzwvE2gqKj0v/EABoBAQADAQEBAAAAAAAAAAAAAAADBAUCAQb/xAAxEQEAAgEDAgQEAwkBAAAAAAAAAQIDBBExEiFBUcHwBRMzYSJxsSQyNEJSgZGh4RT/2gAMAwEAAhEDEQA/AMPREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQERfWmp31UwYxrnOPDWgkn1AIPkv0NJH8deArlheSHNcDUm3+E03d/wBzhsPUParDnqGOmyZStjjbG0VYAa0W4jPpE9T5qtOqp1xSvfdN8i0Vm0sta3UbL22EkrZv5iUmOUjHvcYnvbfvWgXB4u5vDx9Pmo6k7M5xiAieWO/s52bskAPvXdWG2++19rnlWULKjCbr5uFirpm3BP5DndEN3DZ7vPq0eri6pkgsUHlERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBPZZy9/LLi5z9EbSA4gXcTzZo4+f6FpmGd3hFCYqWJsYds+UjVLJbexeeBfoFUuzturDZv0x9kK5RxLH1ua03msz2hpabFXoi23d4jiuVGdordOU6b9bH3ZViihUF2mt05Xpv1sfduVXTW3z0j7+iTUfTlZMNm04dGPJd0WKGmHonfqfwUDSzWpGjyX0Y0kr6NkuXMmXGZpddr+7n4BIux9tg11twelx7CsbxCmdRV0kTrao3uY6xuNTCWmx67hb7h0f9MZ+kPrWHZp/wCpqv8AWJvvHLwRaL3HGZZA1oJJ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" alt="" srcset="" style={{width:"120px",borderRadius:"150px",cursor:"pointer"}} onClick={()=>{navigate('/')}}/>
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 font-serif">Prime Estates</h1>

      <div className="relative">
        <FaUserCircle
          size={40}
          className="text-gray-600 hover:text-blue-600 transition-colors duration-300 cursor-pointer"
          onClick={handleDropdownToggle}
        />
        {isDropdownOpen && (
          <div className="absolute right-0 mt-3 w-56 bg-white border border-gray-200 rounded-lg shadow-xl z-50">
            <Link
              to="/profile"
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
            >
              Profile
            </Link>
            <p
              onClick={handleLogout}
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
            >
              Logout
            </p>
          </div>
        )}
      </div>
    </div>

  );
};

export default Header;
