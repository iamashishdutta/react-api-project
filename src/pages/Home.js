import React, { useState, useEffect } from 'react';
import { fetchItems } from '../services/api';
import Card from '../components/Card';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [items, setItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchItems();
        setItems(data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#050506]">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-gray-300"></div>
      </div>
    );

  if (!items.length)
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#050506] text-white">
        <p className="text-3xl font-semibold">No items found.</p>
        <p className="text-lg mt-2 text-gray-400">Try searching for something else!</p>
      </div>
    );

  return (
    <div className="p-6 max-w-7xl mx-auto min-h-screen bg-[#050506] text-white">
      {/* Search Bar */}
      <div className="mb-8 flex justify-center">
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>

      {/* Animated Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredItems.map((item, index) => (
          <div
            key={item.id}
            className="transform transition duration-300 hover:scale-105 hover:shadow-xl"
            style={{ animationDelay: `${index * 100}ms`, animation: "fadeIn 0.5s ease-in-out" }}
          >
            <Card item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
