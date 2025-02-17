import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchItemById } from '../services/api';
import { ArrowLeftIcon } from '@heroicons/react/24/solid'; // Import Heroicons for Back Button

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchItemById(id);
        setItem(data);
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#050506]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-400"></div>
      </div>
    );

  if (!item)
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#050506] text-white">
        <p className="text-2xl font-semibold text-red-400">
          No details found. Please try again later.
        </p>
      </div>
    );

  return (
    <div className="min-h-screen flex justify-center items-center bg-[#050506] p-6 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-6 left-6 flex items-center text-white hover:text-gray-400 transition duration-300"
      >
        <ArrowLeftIcon className="h-6 w-6 mr-2" />
        <span className="text-lg font-medium">Back</span>
      </button>

      {/* Gradient Border */}
      <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl p-[1px]">
        {/* Inner Card */}
        <div className="bg-[#121212] rounded-xl p-8 max-w-lg w-full text-center shadow-lg transition-all transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-200 mb-4">{item.name}</h2>
          
          <p className="text-gray-400 text-lg">
            <span className="font-semibold text-gray-300">Email:</span> {item.email}
          </p>

          <p className="text-gray-400 text-lg">
            <span className="font-semibold text-gray-300">Phone:</span> {item.phone}
          </p>

          <p className="text-gray-400 text-lg">
            <span className="font-semibold text-gray-300">Website:</span>
            <a
              href={`https://${item.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition duration-300 ml-2"
            >
              {item.website}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
