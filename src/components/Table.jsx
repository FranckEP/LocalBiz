import DataTable from 'react-data-table-component';
import PropTypes from 'prop-types';

function Table({ columns, data }) {
    return (
        <div>
            <DataTable
                columns={columns}
                data={data}
                selectableRows
                pagination
            />
        </div>
    );
}

Table.propTypes = {
    columns: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            selector: PropTypes.func.isRequired,
            sortable: PropTypes.bool,
            right: PropTypes.bool,
        })
    ).isRequired,
    data: PropTypes.array.isRequired,
};

export default Table;
