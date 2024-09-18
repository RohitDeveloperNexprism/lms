import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import DataTable from 'react-data-table-component';

export default function AssignBook() {


    const [selectedRows, setSelectedRows] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows.map(row => row.id));
        setIsAllSelected(state.selectedRows.length === data.length);
    };

    const columns = [
        {
            name: 'S. No.',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Student Name',
            selector: row => row.student_name,
            sortable: true,
        },
        {
            name: 'Book Id',
            selector: row => row.book_id,
            sortable: true,
        },
        {
            name: 'Book Name',
            selector: row => row.book_name,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => {
                return (
                    <Button className='book-library' variant=''><i className='fa fa-circle'>&nbsp;Issued</i></Button>
                )
            },
            sortable: true,
        },
        {
            name: 'Action',
            selector: row => {
                return (
                    <>
                        <Form.Select>
                            <option className='font--size' value="returned">Returned</option>
                            <option className='font--size' value="issued">Issued</option>
                        </Form.Select>
                    </>
                )
            },
            sortable: true,
        }
    ];


    const data = [
        {
            id: 1,
            student_name: 'Rohit Joshi',
            book_id: '500',
            book_name: 'Chimestary Book 1',
            subject: 'English Literature',
            date: '09-07-2003',
        },
        {
            id: 1,
            student_name: 'Rohit Joshi',
            book_id: '500',
            book_name: 'Chimestary Book 1',
            subject: 'English Literature',
            date: '09-07-2003',
        },
        {
            id: 1,
            student_name: 'Rohit Joshi',
            book_id: '500',
            book_name: 'Chimestary Book 1',
            subject: 'English Literature',
            date: '09-07-2003',
        },

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
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>Assign Book</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Form>
                                    <Row>
                                        <Col as={Col} xs={12} md={6} xl={3}>
                                            <Form.Group>
                                                <Form.Label>Select Member</Form.Label>
                                                <Form.Control
                                                    name='select_member'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6} xl={3}>
                                            <Form.Group>
                                                <Form.Label>Class</Form.Label>
                                                <Form.Control
                                                    name='select_member'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6} xl={3}>
                                            <Form.Group>
                                                <Form.Label>Name</Form.Label>
                                                <Form.Control
                                                    name='select_member'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6} xl={3}>
                                            <Form.Group>
                                                <Form.Label>Book Name</Form.Label>
                                                <Form.Control
                                                    name='select_member'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col as={Col} xs={12} md={6} xl={3}>
                                            <Form.Group>
                                                <Form.Label>Book Id</Form.Label>
                                                <Form.Control
                                                    name='select_member'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6} xl={3}>
                                            <Form.Group>
                                                <Form.Label>Issue Date</Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    name='select_member'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={6} xl={3}>
                                            <Form.Group>
                                                <Form.Label>Return Date</Form.Label>
                                                <Form.Control
                                                    name='select_member'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='mt-6 ps-3'>
                                        <Button className="w-auto">Issue</Button>
                                    </Row>
                                </Form>
                            </Row>
                            <Row className='mt-6'>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    pagination
                                    striped
                                    paginationComponentOptions={paginationComponentOptions}
                                    // selectableRows
                                    onSelectedRowsChange={handleRowSelected}
                                    selectableRowsComponentProps={{ indeterminate: isAllSelected }}
                                />
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}