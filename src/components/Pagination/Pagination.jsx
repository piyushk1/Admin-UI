
import "./Pagination.css";

const Pagination = ({ currentPage, usersPerPage, totalItems, handlePagination }) => {
  const totalPages = Math.ceil(totalItems / usersPerPage);

  // Function to render pagination buttons
  const renderPaginationButtons = () => {
    const pageButtons = [];

    // Generate buttons for each page
    for (let page = 1; page <= totalPages; page++) {
      pageButtons.push(
        <button
          key={page}
          onClick={() => handlePagination(page)}
          className={currentPage === page ? "active" : ""}
        >
          {page}
        </button>
      );
    }

    return pageButtons;
  };


  return (
    <div className="pagination">
      {/* Button for navigating to the previous page */}
      <button
        onClick={() => handlePagination(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <i className="fas fa-angle-left"></i>
      </button>

      {/*  pagination buttons */}
      {renderPaginationButtons()}

      {/* Button for navigating to the next page */}
      <button
        onClick={() => handlePagination(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
