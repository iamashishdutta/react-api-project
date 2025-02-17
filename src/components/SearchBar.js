const SearchBar = ({ setSearchQuery }) => {
    return (
      <div className="w-full max-w-xl">
        <input
          type="text"
          placeholder="Search users..."
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-3 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 border border-gray-600 bg-[#121212] text-white placeholder-gray-400"
        />
      </div>
    );
  };
  
  export default SearchBar;
  