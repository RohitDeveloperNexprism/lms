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
        name: 'Company Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: `Address`,
        selector: row => row.address,
        sortable: true,
    },
    {
        name: `Supplier Name`,
        selector: row => row.supplier_name,
        sortable: true,
    },
    {
        name: `Mobile No.`,
        selector: row => row.number,
        sortable: true,
    },
    {
        name: `Email`,
        selector: row => row.email,
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
                <Link to={generateStudentDetailsPage(row.student_id)} state={{ page: 'profile' }}>
                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                        <i className="fa fa-eye"></i>
                    </OverlayTrigger>
                </Link>
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

const SupplierDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar align-items-center mt-6">
                <Col as={Col} lg={7} md={12} sm={12} xs={12} className='mb-4'>
                    <h3 className='card-title'>Supplier  List</h3>
                </Col>
                <Col as={Col} lg={5} md={12} sm={12} xs={12}>
                    <div className='search_bar_wrapper'>
                        <input
                            type="text"
                            placeholder="Search by ID, Name, or Subject"
                            className="form-control search_input"
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                        <div className='search_icon'><i className='fa fa-search'></i></div>
                        <Button type="button" className="btn btn-icon search_btn"> <i className="fa fa-sliders text-black"></i> Filters</Button>
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

export default SupplierDataTable;
