import React, { useState } from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';

export default function CreateRole() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);

    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedRows([]);
        } else {
            setSelectedRows(data.map(row => row.id));
        }
        setIsAllSelected(!isAllSelected);
    };

    const handleRowSelected = (state) => {
        setSelectedRows(state.selectedRows.map(row => row.id));
        setIsAllSelected(state.selectedRows.length === data.length);
    };

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true,
        },
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
                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                        <Link to={"/teacher-profile"}><i className="fa fa-ellipsis-v"></i></Link>
                    </OverlayTrigger>
                </div>
            ),
        },
    ];

    const data = [
        {
            id: 1,
            role: "Admin"
        },
        {
            id: 1,
            role: "User"
        },
        {
            id: 1,
            role: "User"
        },
        {
            id: 1,
            role: "User"
        },
        {
            id: 1,
            role: "User"
        },
        {
            id: 1,
            role: "User"
        },
        {
            id: 1,
            role: "User"
        },
        {
            id: 1,
            role: "User"
        },

    ];
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>Create Roles</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col as={Col} md={4}>
                                    <Card className='border border-3 shadow-lg'>
                                        <Card.Header className='border-bottom-0'>
                                            <Card.Title>Add ROle</Card.Title>
                                        </Card.Header>
                                        <Card.Body className='border-bottom-0'>
                                            <Form>
                                                <Form.Group>
                                                    <Form.Control
                                                        name='role'
                                                    />
                                                </Form.Group>
                                            </Form>
                                        </Card.Body>
                                        <Card.Footer className='border-top-0 text-center'>
                                            <Button className='px-5'>Create Role</Button>
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col as={Col} md={8} >
                                    <DataTable
                                        columns={columns}
                                        data={data}
                                        // pagination
                                        striped
                                        // selectableRows
                                        onSelectedRowsChange={handleRowSelected}
                                        selectableRowsComponentProps={{ indeterminate: isAllSelected }}
                                        className='border'
                                    />
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </>
    )
}