import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage } from '../../routes/routes';

const columns = [
    {
        name: 'Enquirer Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Person to Meet',
        selector: row => row.person_to_meet,
        sortable: true,
    },
    {
        name: `Date of Enquiry`,
        selector: row => row.date,
        sortable: true,
    },
    {
        name: `Status`,
        selector: row => row.date,
        sortable: true,
    },
    {
        name: 'Report Card',
        cell: (row) => (
            <div className="report_card hr_inqury_card_dropdown">
                <Dropdown className="btn-group mb-2">
                    <Dropdown.Toggle
                        type="button"
                        className="btn dropdown-toggle report_card_dropdown staff_attendance_card_dropdown"
                        variant=""
                        title="Action"
                    >

                    </Dropdown.Toggle>
                    <Dropdown.Menu className="w-100">
                        <Dropdown.Item className='d-flex align-content-center gap-4'>
                            Pending
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex align-content-center gap-4'>
                            Resolved
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        ),
        width: '200px',
    },
];

const initialData = [
    {
        id: '1',
        name: 'John Doe',
        person_to_meet: 'Principal',
        date: '2024-09-12',
        status: 'Pending',
    },
    {
        id: '2',
        name: 'Jane Smith',
        person_to_meet: 'Vice Principal',
        date: '2024-09-13',
        status: 'Resolved',
    },
    {
        id: '3',
        name: 'Michael Brown',
        person_to_meet: 'Teacher',
        date: '2024-09-14',
        status: 'Pending',
    },
    {
        id: '4',
        name: 'Emily Davis',
        person_to_meet: 'Counselor',
        date: '2024-09-15',
        status: 'Resolved',
    },
    {
        id: '5',
        name: 'Daniel Wilson',
        person_to_meet: 'Principal',
        date: '2024-09-16',
        status: 'Pending',
    },
    {
        id: '6',
        name: 'Sarah Johnson',
        person_to_meet: 'Teacher',
        date: '2024-09-17',
        status: 'Pending',
    },
    {
        id: '7',
        name: 'Tom Clark',
        person_to_meet: 'Vice Principal',
        date: '2024-09-18',
        status: 'Resolved',
    },
    {
        id: '8',
        name: 'Laura Lee',
        person_to_meet: 'Counselor',
        date: '2024-09-19',
        status: 'Pending',
    },
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const MangeInquiryDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <h3 className="card-title mb-2">Inquiry List</h3>

            </Row>

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

export default MangeInquiryDataTable;
