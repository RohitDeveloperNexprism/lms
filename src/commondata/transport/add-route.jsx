import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage } from '../../routes/routes';

const columns = [

    {
        name: 'Route Name',
        selector: row => row.v_number,
        sortable: true,
    },
    {
        name: `Route Fare`,
        selector: row => row.v_name,
        sortable: true,
    },
    {
        name: 'Number of Vehicles',
        selector: row => row.drive_name,
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
        v_number: 'Route 101',
        v_name: 'Main Street',
        drive_name: '2',
    },
    {
        v_number: 'Route 202',
        v_name: 'Downtown Express',
        drive_name: '3',
    },
    {
        v_number: 'Route 303',
        v_name: 'Airport Shuttle',
        drive_name: '1',
    },
    {
        v_number: 'Route 404',
        v_name: 'City Loop',
        drive_name: '4',
    },
    {
        v_number: 'Route 505',
        v_name: 'Uptown Line',
        drive_name: '5',
    },
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const AddRouteDataTable = () => {
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

export default AddRouteDataTable;
