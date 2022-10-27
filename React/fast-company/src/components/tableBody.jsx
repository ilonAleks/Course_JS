import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

const TableBody = ({ data, columns }) => {
    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) => (
                        <td key={column}>
                            {_.get(item, columns[column].path)}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
TableBody.propTypes = {
    data: PropTypes.array.isRequired,
    columns: PropTypes.object.isRequired
};
export default TableBody;
