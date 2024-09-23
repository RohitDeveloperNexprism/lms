import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage } from '../../routes/routes';

const columns = [
    {
        name: 'Sr No.',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Item Name',
        cell: (row) => (
            <Form.Group className='w-100'>
                <Form.Select>
                    <option value="">Select Item</option>
                    <option value="option">Option</option>
                    <option value="option">Option</option>
                    <option value="option">Option</option>
                    <option value="option">Option</option>
                </Form.Select>
            </Form.Group>
        ),
        sortable: true,
        width: '200px'

    },
    {
        name: `Unit Price`,
        cell: (row) => (
            <Form.Group >
                <Form.Control type="text" />
            </Form.Group>
        ),
        sortable: true,
    },
    {
        name: `Quantity`,
        cell: (row) => (
            <Form.Group >
                <Form.Control type="text" />
            </Form.Group>
        ),
        sortable: true,
    },
    {
        name: `Sub Total`,
        cell: (row) => (
            <Form.Group >
                <Form.Control type="text" placeholder='00.00' />
            </Form.Group>
        ),
        sortable: true,
    },
    {
        name: 'Action',
        cell: (row) => (
            <div className="action_icon_wrapper">
                {/* <OverlayTrigger placement="top" overlay={<Tooltip>Edit</Tooltip>}>
                    <i className="fa fa-edit"></i>
                </OverlayTrigger> */}
                <OverlayTrigger placement="top" overlay={<Tooltip>Delete</Tooltip>}>
                    <i className="fa fa-trash-o text-danger"></i>
                </OverlayTrigger>
                {/* <Link to={generateStudentDetailsPage(row.student_id)} state={{ page: 'profile' }}>
                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                        <i className="fa fa-eye"></i>
                    </OverlayTrigger>
                </Link> */}
            </div>
        ),
    },
];

const initialData = [
    {
        id: '1',
        name: 'abc',
        address: 'xyz',
        number: '8765423456',
        email: 'abc@example.com',
        supplier_name: 'john Smith',
    },
    {
        id: '2',
        name: 'abc',
        address: 'xyz',
        number: '8765423456',
        email: 'abc@example.com',
        supplier_name: 'john Smith',
    },
    {
        id: '3',
        name: 'abc',
        address: 'xyz',
        number: '8765423456',
        email: 'abc@example.com',
        supplier_name: 'john Smith',
    },
    {
        id: '4',
        name: 'abc',
        address: 'xyz',
        number: '8765423456',
        email: 'abc@example.com',
        supplier_name: 'john Smith',
    },
    {
        id: '5',
        name: 'abc',
        address: 'xyz',
        number: '8765423456',
        email: 'abc@example.com',
        supplier_name: 'john Smith',
    },
    {
        id: '6',
        name: 'abc',
        address: 'xyz',
        number: '8765423456',
        email: 'abc@example.com',
        supplier_name: 'john Smith',
    },
    {
        id: '7',
        name: 'abc',
        address: 'xyz',
        number: '8765423456',
        email: 'abc@example.com',
        supplier_name: 'john Smith',
    }
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const PaymentDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar align-items-center mt-6">
                <Col as={Col} lg={7} md={12} sm={12} xs={12} className='mb-4'>
                    <h3 className='card-title'>Item Purchase</h3>
                </Col>
                <Col as={Col} lg={5} md={12} sm={12} xs={12}>
                    <div className='search_bar_wrapper d-flex justify-content-end'>
                        <Button type="button" className="btn btn-icon search_btn"> <i className="fa fa-plus text-black"></i> Add</Button>
                    </div>
                </Col>
            </Row>

            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                striped
                paginationComponentOptions={paginationComponentOptions}
            />
        </>
    );
};

export default PaymentDataTable;
