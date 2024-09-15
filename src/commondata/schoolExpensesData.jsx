import React, { useState } from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import logo from "../assets/images/logo/Photo.png"
import { Link } from 'react-router-dom';

export default function SchoolExpensesDataTabel() {
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
            selector: row => row.ID,
            sortable: true,
        },
        {
            name: 'Category',
            selector: row => row.Category,
            sortable: true,
        },
        {
            name: 'Expenses',
            selector: row => row.Expenses,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: row => row.Quantity,
            sortable: true,
        },
        {
            name: 'Amount',
            selector: row => row.Amount,
            sortable: true,
        },
        {
            name: 'Payment Date',
            selector: row => row.paymentDate,
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
                </div>
            ),
        },
    ];

    const data = [
        {
            ID: 1,
            Category: 'Laboratory',
            Expenses: 'Chemicals',
            Quantity: '100 units',
            Amount: '500',
            paymentDate: '04-10-2024',
        },
        {
            ID: 1,
            Category: 'Laboratory',
            Expenses: 'Chemicals',
            Quantity: '100 units',
            Amount: '5000',
            paymentDate: '04-10-2024',
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
                            <Col as={Col} xs={12} md={6}>
                                <Card.Title className='fw-bolder'>School Expenses</Card.Title>
                            </Col>
                            <Col as={Col} xs={12} md={6}>
                                <Row>
                                    <Col as={Col} md={6}>
                                        <Form.Control
                                            name='search'
                                            placeholder='search by ID, Name or Subject'
                                            className='accordian-rounded-radious'
                                        />
                                    </Col>
                                    <Col as={Col} xs={12} md={3}>
                                        <Button className="filter-button">
                                            <i className='fa fa-filter text-dark'>&nbsp;Filter</i>
                                        </Button>
                                    </Col>
                                    <Col as={Col} xs={12} md={3}>
                                        <Button className="filter-button">
                                            <i className='fa fa-plus text-dark'>&nbsp;Add Expense</i>
                                        </Button>
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
                                // selectableRows
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