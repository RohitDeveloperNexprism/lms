import React, { useState } from 'react'
import { Button, Card, Col, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import DataTable from 'react-data-table-component';
import AddPayrollModel from './AddPayrollModel';

export default function PayRollDataTabel() {
    const [selectedRows, setSelectedRows] = useState([]);
    const [isAllSelected, setIsAllSelected] = useState(false);

    const [show, setShow] = useState(false);

    const [selectedStudent, setSelectedStudent] = useState(null);

    const handleViewClick = (row) => {
        setSelectedStudent(row);
        setShow(true);
    };



    const handleSelectAll = () => {
        if (isAllSelected) {
            setSelectedRows([]);
        } else {
            setSelectedRows(data.map(row => row.ID));
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
            name: 'Name',
            selector: row => row.Name,
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
                <Row>
                    <Button className='download-button text-white' onClick={handleViewClick} variant=''>View</Button>
                </Row>
            ),
        },
    ];

    const data = [
        {
            ID: 1,
            Name: 'Rohit Joshi',
            Expenses: 'Chemicals',
            Quantity: '100 units',
            Amount: '500',
            paymentDate: '04-10-2024',
        },
        {
            ID: 1,
            Name: 'Rohit Joshi',
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
                            <Col as={Col} xs={12} md={6} className='mb-3'>
                                <Card.Title className='fw-bolder'>School Expenses</Card.Title>
                            </Col>
                            <Col as={Col} xs={12} md={6}>
                                <Row>
                                    <Col as={Col} md={6} className='mb-3'>
                                        <Form.Control
                                            name='search'
                                            placeholder='search by ID, Name or Subject'
                                            className='accordian-rounded-radious'
                                        />
                                    </Col>
                                    <Col as={Col} xs={12} md={3} className='mb-3'>
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

            {selectedStudent && (
                <AddPayrollModel
                    show={show}
                    onHide={() => setShow(false)}
                    student={selectedStudent}
                />
            )}
        </>
    )
}