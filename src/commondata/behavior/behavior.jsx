import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage, getStudentBehaviorReportRoutePage } from '../../routes/routes';

const columns = [
    {
        name: 'Roll No.',
        selector: row => row.roll_no,
        sortable: true,
    },
    {
        name: 'Student Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: `Class`,
        selector: row => row.class,
        sortable: true,
    },
    {
        name: `Sections`,
        selector: row => row.section,
        sortable: true,
    },
    {
        name: `Good Behavior`,
        selector: row => row.good,
        sortable: true,
    },
    {
        name: `Bad Behavior`,
        selector: row => row.bad,
        sortable: true,
    },
    {
        name: 'Action',
        cell: (row) => (
            <div className="action_icon_wrapper">
                <Link to={getStudentBehaviorReportRoutePage()}><Button variant="primary" type="submit" className='px-6'>View</Button></Link>
            </div>
        ),
    },
];

const initialData = [
    {
        roll_no: '101',
        name: 'John Doe',
        class: '5',
        section: 'A',
        good: 'Yes',
        bad: 'No',
    },
    {
        roll_no: '102',
        name: 'Jane Smith',
        class: '5',
        section: 'B',
        good: 'Yes',
        bad: 'No',
    },
    {
        roll_no: '103',
        name: 'Sam Wilson',
        class: '6',
        section: 'A',
        good: 'No',
        bad: 'Yes',
    },
    {
        roll_no: '104',
        name: 'Lucy Brown',
        class: '6',
        section: 'B',
        good: 'Yes',
        bad: 'No',
    },
    {
        roll_no: '105',
        name: 'Peter Parker',
        class: '5',
        section: 'A',
        good: 'No',
        bad: 'Yes',
    },
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const BehaviorListDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar align-items-center mt-6">
                <Col as={Col} lg={7} md={12} sm={12} xs={12} className='mb-4'>
                    <h3 className='card-title'>Student's Behavior Report </h3>
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

export default BehaviorListDataTable;
