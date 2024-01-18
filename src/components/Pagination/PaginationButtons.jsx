// import "./Pagination.css";

// const PaginationButtons = ({ totalPages, currentPage, handlePagination }) => {
//   const renderPaginationButtons = () => {
//     const pageButtons = [];

//     pageButtons.push(
//       <button
//         key="first"
//         onClick={() => handlePagination(1)}
//         className={currentPage === 1 ? "active" : ""}
//         disabled={currentPage === 1}
//       >
//         <i className="fas fa-angle-double-left"></i>
//       </button>
//     );

//     pageButtons.push(
//       <button
//         key="previous"
//         onClick={() => handlePagination(currentPage - 1)}
//         className={currentPage === 1 ? "disabled" : ""}
//         disabled={currentPage === 1}
//       >
//         <i className="fas fa-angle-left"></i>
//       </button>
//     );

//     for (let page = 1; page <= totalPages; page++) {
//       pageButtons.push(
//         <button
//           key={page}
//           onClick={() => handlePagination(page)}
//           className={currentPage === page ? "active" : ""}
//         >
//           {page}
//         </button>
//       );
//     }

//     pageButtons.push(
//       <button
//         key="next"
//         onClick={() => handlePagination(currentPage + 1)}
//         className={currentPage === totalPages ? "disabled" : ""}
//         disabled={currentPage === totalPages}
//       >
//         <i className="fas fa-angle-right"></i>
//       </button>
//     );

//     pageButtons.push(
//       <button
//         key="last"
//         onClick={() => handlePagination(totalPages)}
//         className={currentPage === totalPages ? "active" : ""}
//         disabled={currentPage === totalPages}
//       >
//         <i className="fas fa-angle-double-right"></i>
//       </button>
//     );

//     return pageButtons;
//   };

//   return <div className="pagination-buttons">{renderPaginationButtons()}</div>;
// };

// export default PaginationButtons;
