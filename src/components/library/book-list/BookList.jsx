import React, { useState } from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';

export default function BookList() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows.map(row => row.id));
        setIsAllSelected(state.selectedRows.length === data.length);
    };

    const columns = [
        {
            name: 'BookId',
            selector: row => row.bookId,
            sortable: true,
        },
        {
            name: 'Book Name',
            selector: row => row.book_name,
            sortable: true,
        },
        {
            name: 'Writer',
            selector: row => row.writer,
            sortable: true,
        },
        {
            name: 'Subject',
            selector: row => row.subject,
            sortable: true,
        },
        {
            name: 'Class(es)',
            selector: row => row.classes,
            sortable: true,
        },
        {
            name: 'Publish Date',
            selector: row => row.publish_date,
            sortable: true,
        },
        {
            name: 'Status',
            selector: row => {
                return (
                    <Button className='book-library' variant=''>Available</Button>
                )
            },
            sortable: true,
        }
        // {
        //     name: 'Action',
        //     cell: (row) => (
        //         <div className="action_icon_wrapper">
        //             <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
        //                 <i className="fa fa-edit"></i>
        //             </OverlayTrigger>
        //             <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
        //                 <i className="fa fa-trash-o text-danger"></i>
        //             </OverlayTrigger>
        //             <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
        //                 <Link to={"/teacher-profile"}><i className="fa fa-ellipsis-v"></i></Link>
        //             </OverlayTrigger>
        //         </div>
        //     ),
        // },
    ];

    const data = [
        {
            id: 1,
            bookId: '2024-LIT-001-01',
            book_name: 'Great Expectations',
            writer: 'Rohit Joshi',
            subject: 'English Literature',
            classes: 'Class 12',
            publish_date: '2003',
        },
        {
            id: 2,
            bookId: '2024-LIT-001-01',
            book_name: 'Great Expectations',
            writer: 'Rohit Joshi',
            subject: 'English Literature',
            classes: 'Class 12',
            publish_date: '2003',
        },
        {
            id: 3,
            bookId: '2024-LIT-001-01',
            book_name: 'Great Expectations',
            writer: 'Rohit Joshi',
            subject: 'English Literature',
            classes: 'Class 12',
            publish_date: '2003',
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
                        <Row className='px-4'>
                            <Col as={Col} md={3} className=''>
                                <Card className='bg-primary mb-0 my-4'>
                                    <Card.Body>
                                        <p className='fs-3 fw-bolder text-light'>1000</p>
                                        <p className='text-light'>Total Books</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col as={Col} md={3} className=''>
                                <Card className='bg-primary mb-0 my-4'>
                                    <Card.Body>
                                        <p className='fs-3 fw-bolder text-light'>1000</p>
                                        <p className='text-light'>Total Books</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col as={Col} md={3} className=''>
                                <Card className='bg-primary mb-0 my-4'>
                                    <Card.Body>
                                        <p className='fs-3 fw-bolder text-light'>1000</p>
                                        <p className='text-light'>Total Books</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col as={Col} md={3} className=''>
                                <Card className='bg-primary mb-0 my-4'>
                                    <Card.Body>
                                        <p className='fs-3 fw-bolder text-light'>1000</p>
                                        <p className='text-light'>Total Books</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Col as={Col} md={8}>
                                <Card.Title>
                                    All Books
                                </Card.Title>
                            </Col>
                            <Col as={Col} md={4}>
                                <Row>
                                    <Col as={Col} md={10}>
                                        <Form.Control
                                            name='search'
                                            placeholder='Search By Name, ID or Subject'
                                            className='accordian-rounded-radious'
                                        />
                                    </Col>
                                    <Col as={Col} md={2} className='text-end'>
                                        <Button className='rounded-button' variant=''><i className='fa fa-filter text-light'></i></Button>
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
                                onSelectedRowsChange={handleRowSelected}
                                selectableRowsComponentProps={{ indeterminate: isAllSelected }}
                            />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}