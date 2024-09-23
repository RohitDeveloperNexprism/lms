import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage } from '../../routes/routes';

const columns = [
    {
        name: 'Staff No',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Staff Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: `Role`,
        selector: row => row.role,
        sortable: true,
    },
    {
        name: 'Report Card',
        cell: (row) => (
            <div className="report_card">
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
                            Present
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex align-content-center gap-4'>
                            Late
                        </Dropdown.Item>
                        <Dropdown.Item className='d-flex align-content-center gap-4'>
                            Absent
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        ),
        width: '200px'
    },
];

const initialData = [
    {
        id: '1',
        name: 'John Doe',
        role: 'Teacher'
    },
    {
        id: '2',
        name: 'Jane Smith',
        role: 'Teacher'
    },
    {
        id: '3',
        name: 'Michael Brown',
        role: 'Teacher'
    },
    {
        id: '4',
        name: 'Emily Davis',
        role: 'Teacher'
    },
    {
        id: '5',
        name: 'Daniel Wilson',
        role: 'Teacher'
    },
    {
        id: '6',
        name: 'John Doe',
        role: 'Teacher'
    },
    {
        id: '7',
        name: 'Jane Smith',
        role: 'Teacher'
    },
    {
        id: '8',
        name: 'Michael Brown',
        role: 'Teacher'
    },
    {
        id: '9',
        name: 'Emily Davis',
        role: 'Teacher'
    },
    {
        id: '10',
        name: 'Daniel Wilson',
        role: 'Teacher'
    },
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const StaffAttendanceDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Form>
                    <div className='student_search_input_wrapper'>
                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="firstName">
                                <Form.Label>Select Member</Form.Label>
                                <Form.Control as="select">
                                    <option>Teacher</option>
                                </Form.Control>
                            </Form.Group>
                        </div>

                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="lastName">
                                <Form.Label>Attendance Date</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>
                    </div>
                    <Form.Group as={Col} md="12" className='custom_col mt-4 text-end'>
                        <Button type="submit" className="btn-primary ms-auto px-6 rounded-lg">Search</Button>
                    </Form.Group>
                </Form>
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

export default StaffAttendanceDataTable;
