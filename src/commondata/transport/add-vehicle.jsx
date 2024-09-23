import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage } from '../../routes/routes';

const columns = [

    {
        name: 'Vehicle Number',
        selector: row => row.v_number,
        sortable: true,
    },
    {
        name: `Vehicle Model`,
        selector: row => row.v_name,
        sortable: true,
    },
    {
        name: 'Driver’s Name',
        selector: row => row.drive_name,
    },
    {
        name: 'Driver’s Number',
        selector: row => row.drive_number,
        width: '300px'
    },
    ,
    {
        name: 'Action',
        cell: (row) => (
            <div className="action_icon_wrapper">
                <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                    <i className="fa fa-edit"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                    <i className="fa fa-trash-o text-danger"></i>
                </OverlayTrigger>
            </div>
        ),
    },
];
const initialData = [
    {
        v_number: 'ABC123',
        v_name: 'Toyota Camry',
        drive_name: 'John Doe',
        drive_number: '123-456-7890'
    },
    {
        v_number: 'XYZ789',
        v_name: 'Honda Accord',
        drive_name: 'Jane Smith',
        drive_number: '987-654-3210'
    },
    {
        v_number: 'LMN456',
        v_name: 'Ford Explorer',
        drive_name: 'Mike Johnson',
        drive_number: '555-555-5555'
    }
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const AddVehicleDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item?.v_name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>

            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                // striped
                paginationComponentOptions={paginationComponentOptions}
            // selectableRows
            // selectableRowsComponentProps={{ indeterminate: (isIndeterminate) => isIndeterminate }}
            />
        </>
    );
};

export default AddVehicleDataTable;
