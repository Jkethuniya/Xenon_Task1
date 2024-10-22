import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { recommend } from "../react-query/api/peroperty";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Recommendation.css";
import { properties } from "../utils/data";
import { useNavigate } from "react-router-dom";
// Custom Next Arrow Component
const NextArrow = ({ onClick }) => (
  <div className="arrow arrow-next" onClick={onClick}>
    &gt;
  </div>
);

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => (
  <div className="arrow arrow-prev" onClick={onClick}>
    &lt;
  </div>
);

const Recommendations = ({ recommended }) => {
  const navigate = useNavigate();
  const [called, setCalled] = useState(true);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    async function recommending() {
      try {
        const localproper = localStorage.getItem("viewedProperties");
        const data = await recommend(localproper);
        setRecommendations(data);
        // console.log(recommendations);
      } catch (e) {
        // console.log(e);
      }
      setCalled(false);
    }
    called && recommending();
  }, []);

  const settings = {
    dots: false, // Disable dots
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />, // Use custom next arrow
    prevArrow: <PrevArrow />, // Use custom prev arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
   
    <div className="recommendation-container my-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 font-serif">Recommended Properties</h2>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="loader">Loading...</div>
          {/* You can replace the loader div with a spinner or any loading indicator you prefer */}
        </div>
      ) : recommendations.length > 0 ? (
        <Slider {...settings} className="recommendation-slider">
          {recommendations.map((property) => (
            <div key={property.id} className="relative">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-64 object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-0 left-0 right-0 bg-white bg-opacity-0 p-4">
                <div className="absolute top-3 left-3 bg-gray-900 bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded-md">
               {property.category}
                </div></div>
              <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-0 p-4">
                <div className="absolute top-3 left-3 bg-gray-900 bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded-md">
               {property.location}
                </div>
                <div className="absolute top-3 left-3 bg-gray-900 bg-opacity-75 text-white text-xs font-medium px-2 py-1 rounded-md">
                {property.title}
                </div>
                <button
                  onClick={() => navigate(`property/${property.id}`,{ state: property })}
                  className="mt-9 w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  Visit
                </button>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        <p className="text-gray-500 text-center">No recommendations available at the moment.</p>
      )}
    </div>
  );
};

export default Recommendations;
