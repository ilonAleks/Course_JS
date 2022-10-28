import React from "react";
import PropTypes from "prop-types";
import TableHeader from "./tableHeader.jsx";
import TableBody from "./tableBody.jsx";

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <table className="table">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    <TableBody {...{ data, columns }} />
                </>
            )}
        </table>
    );
};
Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.func,
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array
};
export default Table;
