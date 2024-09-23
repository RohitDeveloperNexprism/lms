import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage } from '../../routes/routes';

const columns = [

    {
        name: 'Visitor Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: `Person to Meet`,
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Date of Appointment',
        selector: row => row.date,
    },
    {
        name: 'Reason for Meeting',
        selector: row => row.resone,
        width: '300px'
    },
    ,
    {
        name: 'Action',
        cell: (row) => (
            <div className="action_icon_wrapper">
                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                    <i className="fa fa-trash-o text-danger"></i>
                </OverlayTrigger>
            </div>
        ),
    },
];

const initialData = [
    {
        id: '1',
        name: 'John Doe',
        role: 'Teacher',
        date: '2007-08-25',
        resone: 'Lorem ipsum dolor sit amet,...',
    },
    {
        id: '2',
        name: 'Jane Smith',
        role: 'Teacher',
        date: '2007-08-25',
        resone: 'Lorem ipsum dolor sit amet,...',
    },
    {
        id: '3',
        name: 'Michael Brown',
        role: 'Teacher',
        date: '2007-08-25',
        resone: 'Lorem ipsum dolor sit amet,...',
    },
    {
        id: '4',
        name: 'Emily Davis',
        role: 'Teacher',
        date: '2007-08-25',
        resone: 'Lorem ipsum dolor sit amet,...',
    },
    {
        id: '5',
        name: 'Daniel Wilson',
        role: 'Teacher',
        date: '2007-08-25',
        resone: 'Lorem ipsum dolor sit amet,...',
    },
    {
        id: '6',
        name: 'John Doe',
        role: 'Teacher',
        date: '2007-08-25',
        resone: 'Lorem ipsum dolor sit amet,...',
    }
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const AppointmentsDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
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

export default AppointmentsDataTable;
