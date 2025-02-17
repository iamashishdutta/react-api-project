const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <div className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={`px-4 py-2 mx-1 border ${
              currentPage === number ? 'bg-blue-500 text-white' : 'bg-white'
            }`}
          >
            {number}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;
  