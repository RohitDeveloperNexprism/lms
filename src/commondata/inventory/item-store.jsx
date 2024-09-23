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
        name: 'Store Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: `Store Number`,
        selector: row => row.s_number,
        sortable: true,
    },
    {
        name: `Description`,
        selector: row => row.description,
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
        description: 'xyz',
        s_number: '8765423456',
    },
    {
        id: '2',
        name: 'abc',
        description: 'xyz',
        s_number: '8765423456',
    },
    {
        id: '3',
        name: 'abc',
        description: 'xyz',
        s_number: '8765423456',
    },
    {
        id: '4',
        name: 'abc',
        description: 'xyz',
        s_number: '8765423456',
    },
    {
        id: '5',
        name: 'abc',
        description: 'xyz',
        s_number: '8765423456',
    },
    {
        id: '6',
        name: 'abc',
        description: 'xyz',
        s_number: '8765423456',
    },
    {
        id: '7',
        name: 'abc',
        description: 'xyz',
        s_number: '8765423456',
    }
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const ItemStoreDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Form>
                    <div className="student_search_input_wrapper">
                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="itemName">
                                <Form.Label>Store Name</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>

                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="itemCategory">
                                <Form.Label>Store Number</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>

                        <div className="student_search_input">
                            <Form.Group className="mb-3" controlId="description">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                        </div>
                    </div>

                    <Button type="submit" className="btn-primary ms-auto px-6 rounded-lg">Save</Button>
                </Form>
            </Row>

            <Row className="search_bar align-items-center mt-6">
                <Col as={Col} lg={7} md={12} sm={12} xs={12} className='mb-4'>
                    <h3 className='card-title'>Store List</h3>
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

export default ItemStoreDataTable;
