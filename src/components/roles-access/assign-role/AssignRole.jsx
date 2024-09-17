import React, { useState } from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import logo from "../../../assets/images/logo/Photo.png"

export default function AssignRole() {

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
            name: "Photo",
            selector: row => <img src={logo} alt={row.name} style={{ width: '50px', height: '50px' }} />,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => {
                return (
                    <div>
                        <p className='fw-bolder'>{row?.name}</p>
                        <p>{row?.email}</p>
                    </div>
                )
            },
            sortable: true,
        },

        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
        {
            name: 'Assign Role',
            selector: row => {
                return (
                    <>
                        <Form.Select>
                            <option value="">Select</option>
                            <option value="user">User</option>
                            <option value="student">Student</option>
                        </Form.Select>
                    </>
                )
            },
            sortable: true,
        },
        {
            name: 'Role',
            selector: row => row.role,
            sortable: true,
        },
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
        //         </div>
        //     ),
        // },
    ];


    const data = [
        {
            id: 1,
            name: "Rohit Joshi",
            email: "joshi.rohit092003@gmail.com",
            role: "Admin",
            status: "Active"
        },
        {
            id: 1,
            name: "Rohit Joshi",
            email: "joshi.rohit092003@gmail.com",
            role: "Admin",
            status: "Active"
        },
        {
            id: 1,
            name: "Rohit Joshi",
            email: "joshi.rohit092003@gmail.com",
            role: "Admin",
            status: "Active"
        },
        {
            id: 1,
            name: "Rohit Joshi",
            email: "joshi.rohit092003@gmail.com",
            role: "Admin",
            status: "Active"
        },
        {
            id: 1,
            name: "Rohit Joshi",
            email: "joshi.rohit092003@gmail.com",
            role: "Admin",
            status: "Active"
        },


    ];

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>Users</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Form>
                                    <Row>
                                        <Col as={Col} xs={12} md={2} className='mb-3'>
                                            <Form.Label>
                                                Select User Type
                                            </Form.Label>
                                        </Col>
                                        <Col as={Col} xs={12} md={3} className='mb-3'>
                                            <Form.Select>
                                                <option value="">Select</option>
                                                <option value="Admin">Admin</option>
                                                <option value="User">User</option>
                                                <option value="Staff">Staff</option>
                                            </Form.Select>
                                        </Col>
                                        <Col as={Col} xs={12} md={2} className='mb-3'>
                                            <Button>Assign Teacher</Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </Row>
                            <Row className='mt-4'>
                                <DataTable
                                    columns={columns}
                                    data={data}
                                    // pagination
                                    striped
                                    selectableRows
                                    onSelectedRowsChange={handleRowSelected}
                                    selectableRowsComponentProps={{ indeterminate: isAllSelected }}
                                    className='border'
                                />
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}