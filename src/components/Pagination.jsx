import React from "react";
import "./stylePagination.css";

const Pagination = ({ pages, currentPage, setCurrentPage }) => {
  return (
    <div>
      {Array.from(Array(pages), (item, index) => {
        return (
          <div className="main">
            <div className="botaoPaginacao">
              <button
                style={
                  index === currentPage ? { backgroundColor: "yellow" } : null
                }
                className="paginationButton"
                value={index}
                onClick={(e) => setCurrentPage(Number(e.target.value), item)}
              >
                {index + 1}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
