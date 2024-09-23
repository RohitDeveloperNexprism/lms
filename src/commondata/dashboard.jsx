import React, { useState } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

const columns = [
    {
        name: 'Student Name',
        cell: (row) => (
            <div className="student_wrapper">
                <div className='d-flex gap-2 align-items-center'>
                    <img src={row.img} alt={""} className='rounded-circle w-25 h-25' />
                    <p className='sm text-black'>{row.name}</p>
                </div>
            </div>
        ),
        sortable: true,
        width: '350px',
    },
    {
        name: 'School ID',
        selector: row => row.school_id,
        sortable: true,
    },
    {
        name: `Class`,
        selector: row => row.class,
        sortable: true,
    },
    {
        name: `Pending Amount`,
        selector: row => row.dob,
        sortable: true,
    },
    {
        name: 'Action',
        cell: (row) => (
            <div className="action_icon_wrapper">
                <OverlayTrigger placement="top" overlay={<Tooltip>Print</Tooltip>}>
                    <i className="icon icon-printer print_icon"></i>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                    <i className="icon icon-options print_icon"></i>
                </OverlayTrigger>
            </div>
        ),
    },
];

const initialData = [
    {
        school_id: 'ID 123456789',
        img: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Doe',
        class: '8th',
        dob: '2005-05-15',
        phone_number: '555-1234',
        address: '1234 Elm St, Springfield',
        email: 'johndoe@example.com',
    },
    {
        school_id: 'ID 123456789',
        img: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Jane Smith',
        class: '9th',
        dob: '2006-06-20',
        phone_number: '555-5678',
        address: '5678 Oak St, Springfield',
        email: 'janesmith@example.com',
    },
    {
        school_id: 'ID 123456789',
        img: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Michael Brown',
        class: '5th',
        dob: '2007-08-25',
        phone_number: '555-8765',
        address: '9101 Pine St, Springfield',
        email: 'michaelbrown@example.com',
    },
    {
        school_id: 'ID 123456789',
        img: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Emily Davis',
        class: '10th',
        dob: '2008-11-30',
        phone_number: '555-3456',
        address: '2233 Birch St, Springfield',
        email: 'emilydavis@example.com',
    },
    {
        school_id: 'S005',
        img: 'https://randomuser.me/api/portraits/men/3.jpg',
        name: 'Daniel Wilson',
        class: '3rd',
        dob: '2006-03-17',
        phone_number: '555-9012',
        address: '7890 Maple St, Springfield',
        email: 'danielwilson@example.com',
    },
    {
        school_id: 'ID 123456789',
        img: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Doe',
        class: '11th',
        dob: '2005-05-15',
        phone_number: '555-1234',
        address: '1234 Elm St, Springfield',
        email: 'johndoe@example.com',
    },
    {
        school_id: 'ID 123456789',
        img: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Jane Smith',
        class: '12th',
        dob: '2006-06-20',
        phone_number: '555-5678',
        address: '5678 Oak St, Springfield',
        email: 'janesmith@example.com',
    },
    {
        school_id: 'ID 123456789',
        img: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Michael Brown',
        class: '4th',
        dob: '2007-08-25',
        phone_number: '555-8765',
        address: '9101 Pine St, Springfield',
        email: 'michaelbrown@example.com',
    },
    {
        school_id: 'ID 123456789',
        img: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Emily Davis',
        class: '8A',
        dob: '2008-11-30',
        phone_number: '555-3456',
        address: '2233 Birch St, Springfield',
        email: 'emilydavis@example.com',
    },

];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const DashboardStudentsListDataTable = ({ filterText }) => {
    const filteredData = initialData.filter(item =>
        item?.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <div className='dashboard_student_data_table'>
                <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    // striped
                    paginationComponentOptions={paginationComponentOptions}
                // selectableRows
                // selectableRowsComponentProps={{ indeterminate: (isIndeterminate) => isIndeterminate }}
                />
            </div>
        </>
    );
};

export default DashboardStudentsListDataTable;
