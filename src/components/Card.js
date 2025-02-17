import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  return (
    <div className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl p-[1px]">
      {/* Inner Card with Dark Theme */}
      <div className="bg-[#1a1a1a] rounded-xl p-6 text-center text-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
        <h2 className="text-2xl font-bold text-gray-200 mb-2">{item.name}</h2>
        <p className="text-gray-400">{item.email}</p>
        <Link
          to={`/item/${item.id}`}
          className="inline-block mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
