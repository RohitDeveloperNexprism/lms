import { name } from 'browser-sync';
import React, { useState } from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';

export default function ManageLeave() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows.map(row => row.id));
        setIsAllSelected(state.selectedRows.length === data.length);
    };

    const columns = [
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Phone',
            selector: row => row.phone,
            sortable: true,
        },
        {
            name: 'Address',
            selector: row => row.address,
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
        },
        {
            name: 'Action',
            cell: (row) => (
                <div className="action_icon_wrapper">
                    <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                        <i className="fa fa-trash-o text-danger"></i>
                    </OverlayTrigger>
                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                        <Link to={"/teacher-profile"}><i className="fa fa-ellipsis-v"></i></Link>
                    </OverlayTrigger>
                </div>
            ),
        },
    ];

    const data = [
        {
            id: "2016589765",
            name: "Rohit Joshi",
            date: "09-07-2224",
            phone: "+91 8279834994",
            address: "123 Main St, Anytown, USA",
        },
        {
            id: "2016589765",
            name: "Rohit Joshi",
            date: "09-07-2224",
            phone: "+91 8279834994",
            address: "123 Main St, Anytown, USA",
        },
        {
            id: "2016589765",
            name: "Rohit Joshi",
            date: "09-07-2224",
            phone: "+91 8279834994",
            address: "123 Main St, Anytown, USA",
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
            <Row className='mt-4'>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Col as={Col} md={8}>
                                <Card.Title>
                                    All Application List
                                </Card.Title>
                            </Col>
                            <Col as={Col} md={4}>
                                <Row>
                                    <Col as={Col} md={6}>
                                        <Form.Select
                                            name='search'
                                            placeholder='Search By Name, ID or Subject'
                                            className='accordian-rounded-radious'
                                        >
                                            <option value="student">Student</option>
                                            <option value="teacher">Teacher</option>
                                        </Form.Select>
                                    </Col>
                                    <Col as={Col} md={6} className='text-end'>
                                        <Form.Control
                                            name=''
                                            placeholder='Search by ID, Name or Date'
                                            className='accordian-rounded-radious'
                                        />
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