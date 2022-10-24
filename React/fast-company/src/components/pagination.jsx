import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const Pagination = ({ onPageChange, itemCount, pageSize, currentPage }) => {
    const pageCount = Math.ceil(itemCount / pageSize);
    const pages = _.range(1, pageCount + 1);
    if (pageCount === 1) return null;
    return (
        <nav>
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link">Previous</a>
                </li>
                {pages.map((page) => (
                    <li
                        className={
                            "page-item " +
                            (page === currentPage ? "active" : "")
                        }
                        key={page}
                    >
                        <a
                            className="page-link"
                            onClick={() => onPageChange(page)}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className="page-link">Next</a>
                </li>
            </ul>
        </nav>
    );
};
Pagination.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    itemCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
};

export default Pagination;
