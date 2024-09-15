import React, { useState } from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import logo from "../../../assets/images/logo/Photo.png"
import { Link } from 'react-router-dom';

export default function FeesCollectedDataTabel() {


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
            name: 'Student Name',
            selector: row => {
                return (
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={logo} alt={""} className='rounded-circle w-25 h-25' />
                        <div>
                            <p className='sm text-black'>{row.name}</p>
                            <p className='secondary_text'>{row.date}</p>
                        </div>
                    </div>
                );
            },
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
            selector: row => {
                return (
                    <Button variant='' className='status-btn'><i className='fa fa-circle status-txt'>&nbsp;{row?.status}</i> </Button>
                )
            },
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
                        <Card.Header className='border-bottom-0 px-0'>
                            <Col as={Col} xs={12} md={4}>
                                <Card.Title className='fw-bolder'>Collected Fees</Card.Title></Col>
                            <Col as={Col} xs={12} md={8}>
                                <Row>
                                    <Col as={Col} xs={12} md={6} className='mb-2'>
                                        <Form.Control
                                            placeholder='Search By Name or ID'
                                            className='accordian-rounded-radious'
                                        />
                                    </Col>
                                    <Col as={Col} xs={12} md={2} className='mb-2'>
                                        <Form.Select className='bg-secondry py-0'>
                                            <option value="today"><i className='fa fa-calendar text-secondry'>Today</i></option>
                                            <option value="today"><i className='fa fa-calendar text-secondry'>Today</i></option>
                                            <option value="today"><i className='fa fa-calendar text-secondry'>Today</i></option>
                                            <option value="today"><i className='fa fa-calendar text-secondry'>Today</i></option>
                                        </Form.Select>
                                    </Col>
                                    <Col as={Col} xs={12} md={2} className='mb-2'>
                                        <Form.Select className='bg-secondry'>
                                            <option value="today">All Classes</option>
                                            <option value="today">All Classes</option>
                                            <option value="today">All Classes</option>
                                        </Form.Select>
                                    </Col>
                                    <Col as={Col} xs={12} md={2} className='mb-2'>
                                        <Form.Select className='bg-secondry'>
                                            <option value="today">All Status</option>
                                            <option value="today">All Status</option>
                                            <option value="today">All Status</option>
                                        </Form.Select>
                                    </Col>
                                </Row>
                            </Col>
                        </Card.Header>
                        <Card.Body className='px-0 pt-0'>
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
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}