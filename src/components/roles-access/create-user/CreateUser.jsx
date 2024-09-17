import React, { useState } from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
import logo from "../../../assets/images/logo/Photo.png"
import AddUserModel from './AddUserModel';

export default function CreateUser() {
    const [show, setShow] = useState(false)
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
            name: 'Role',
            selector: row => row.role,
            sortable: true,
        },
        {
            name: 'status',
            selector: row => row.status,
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
                    {/* <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                        <Link to={"/teacher-profile"}><i className="fa fa-ellipsis-v"></i></Link>
                    </OverlayTrigger> */}
                </div>
            ),
        },
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


    const handlePopUpOpen = () => {
        setShow(true);
    }

    const handlePopUpColse = () => {
        setShow(false);
    }

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Col as={Col} xs={12} md={6} className='mt-4'>
                                <Card.Title className='fw-bolder'>Users</Card.Title>
                            </Col>
                            <Col as={Col} xs={12} md={6} className='mt-4'>
                                <Row>
                                    <Col as={Col} xs={12} md={8} className='mt-3'>
                                        <Form.Control
                                            name='search'
                                            placeholder='Search by Name or ID'
                                            className='accordian-rounded-radious'
                                        />
                                    </Col>
                                    <Col as={Col} xs={12} md={4} className='text-end mt-3'>
                                        <Button className="filter-button" onClick={handlePopUpOpen}>
                                            <i className='fa fa-plus'>Add User</i>
                                        </Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Card.Header>
                        <Card.Body>
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
            {
                <AddUserModel show={show} onHide={handlePopUpColse} />
            }
        </>
    )
}