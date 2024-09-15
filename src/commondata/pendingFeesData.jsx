import React, { useState } from 'react';
import { Button, Card, Col, Form, Row } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import logo from "../assets/images/logo/Photo.png";


export default function PendingFeesDataTabel() {
    const [show, setShow] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleViewClick = (row) => {
        setSelectedStudent(row);
        setShow(true);
    };

    const columns = [
        {
            name: 'Student Name',
            selector: row => (
                <div className='d-flex gap-2 align-items-center'>
                    <img src={logo} alt="" className='rounded-circle w-25 h-25' />
                    <div>
                        <p className='sm text-black'>{row.name}</p>
                        <p className='secondary_text'>{row.date}</p>
                    </div>
                </div>
            ),
            sortable: true,
        },
        {
            name: 'Class',
            selector: row => row.class,
            sortable: true,
        },
        {
            name: 'Tution Fees',
            selector: row => row.tuitionFee,
            sortable: true,
        },
        {
            name: 'Activities Fees',
            selector: row => row.activitiesFee,
            sortable: true,
        },
        {
            name: 'Miscellaneous',
            selector: row => row.miscellaneous,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => row.amount,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => (
                <Button variant='' className='status-btn'>
                    <i className='fa fa-circle status-txt'>&nbsp;{row?.status}</i>
                </Button>
            ),
            sortable: true,
        },
        {
            name: 'Action',
            cell: (row) => (
                <div>
                    <Button variant='' onClick={() => handleViewClick(row)} className="download-button text-white">
                        View
                    </Button>
                </div>
            ),
        },
    ];

    const data = [
        { id: 1, name: 'Sahil Sharma', date: '2023-02-07', class: '11A', tuitionFee: 4200, activitiesFee: 300, miscellaneous: 200, amount: 5000, status: 'Paid' },
        { id: 2, name: 'Sahil Sharma', date: '2023-01-15', class: '10B', tuitionFee: 4500, activitiesFee: 250, miscellaneous: 150, amount: 4900, status: 'Paid' },
        { id: 3, name: 'Sahil Sharma', date: '2023-03-01', class: '12 AP Calculus', tuitionFee: 4400, activitiesFee: 300, miscellaneous: 200, amount: 5300, status: 'Paid' },
        { id: 4, name: 'Sahil Sharma', date: '2023-01-19', class: '9B', tuitionFee: 4500, activitiesFee: 250, miscellaneous: 100, amount: 4850, status: 'Paid' },
        { id: 5, name: 'Sahil Sharma', date: '2023-01-30', class: '11A', tuitionFee: 4500, activitiesFee: 300, miscellaneous: 200, amount: 5000, status: 'Paid' },
    ];

    const paginationComponentOptions = {
        rowsPerPageText: 'Rows per page',
        rangeSeparatorText: 'of',
        selectAllRowsItem: true,
        selectAllRowsItemText: 'All',
    };

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Col xs={12} md={6}>
                                <Card.Title className='fw-bolder mb-3'>Pending Fees</Card.Title>
                            </Col>
                            <Col xs={12} md={6}>
                                <Row>
                                    <Col md={6} className='mb-3'>
                                        <Form.Control
                                            name='search'
                                            placeholder='Search By Name or Id'
                                            className='accordian-rounded-radious'
                                        />
                                    </Col>
                                    <Col xs={12} md={3} className='mb-2'>
                                        <Form.Select className='bg-secondry py-0'>
                                            <option value="today">Today</option>
                                        </Form.Select>
                                    </Col>
                                    <Col xs={12} md={3} className='mb-2'>
                                        <Form.Select className='bg-secondry'>
                                            <option value="today">All Classes</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Col>
                        </Card.Header>
                        <Card.Body>
                            <DataTable
                                columns={columns}
                                data={data}
                                pagination
                                striped
                                paginationComponentOptions={paginationComponentOptions}
                                selectableRows
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {selectedStudent && (
                <ViewPendingFees
                    show={show}
                    onHide={() => setShow(false)}
                    student={selectedStudent}
                />
            )}
        </>
    );
}
