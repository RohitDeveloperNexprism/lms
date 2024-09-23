import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage } from '../../routes/routes';

const columns = [

    {
        name: 'Student Name',
        selector: row => row.s_name,
        sortable: true,
    },
    {
        name: `Student Section`,
        selector: row => row.v_name,
        sortable: true,
    },
    {
        name: 'Class',
        selector: row => row.class,
    },
    {
        name: 'Bus Route',
        selector: row => row.bus_route,
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
        s_name: 'John Doe',
        v_name: 'Section A',
        class: '5th Grade',
        bus_route: 'Route 1',
    },
    {
        s_name: 'Jane Smith',
        v_name: 'Section B',
        class: '6th Grade',
        bus_route: 'Route 3',
    },
    {
        s_name: 'Sam Johnson',
        v_name: 'Section A',
        class: '5th Grade',
        bus_route: 'Route 2',
    },
    {
        s_name: 'Emily Brown',
        v_name: 'Section C',
        class: '4th Grade',
        bus_route: 'Route 1',
    },
    {
        s_name: 'Michael Green',
        v_name: 'Section A',
        class: '5th Grade',
        bus_route: 'Route 2',
    },
];

const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const AssignPassengerDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item?.s_name.toLowerCase().includes(filterText.toLowerCase())
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

export default AssignPassengerDataTable;
