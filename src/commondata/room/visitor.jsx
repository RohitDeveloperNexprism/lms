import React, { useState } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateHostelStudentDetailsPage, generateStudentDetailsPage } from '../../routes/routes';
import { openModal } from '../../redux/slice/allModalSlice';
import { useDispatch } from 'react-redux';
import ToggleButton from '../../components/pages/hostel/visitors/ToggleButton';

const columns = [
    {
        name: 'Visitor ID',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Name',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: `Reason`,
        cell: (row) => (
            <input type='text' name='reason' className='reason_input' value={row.reason} readOnly />
        ),
        // sortable: true,
    },
    {
        name: `Check-in`,
        selector: row => row.check_in,
        sortable: true,
    },
    {
        name: `Check-out`,
        selector: row => row.check_out,
        sortable: true,
    },
    {
        name: `Status`,
        cell: (row) => (
            <ToggleButton />
        ),
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
                <Link to={generateHostelStudentDetailsPage(row.room)} state={{ page: 'profile' }}>
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
        id: 'V001',
        name: 'John Doe',
        reason: 'Meeting',
        check_in: '2024-09-10 10:00 AM',
        check_out: '2024-09-10 12:00 PM',
        status: 'Checked Out',
        room: 'Room 101',
    },
    {
        id: 'V002',
        name: 'Jane Smith',
        reason: 'Guest Lecture',
        check_in: '2024-09-11 09:00 AM',
        check_out: '2024-09-11 11:30 AM',
        status: 'Checked Out',
        room: 'Room 202',
    },
    {
        id: 'V003',
        name: 'Michael Johnson',
        reason: 'Parent Visit',
        check_in: '2024-09-12 08:45 AM',
        check_out: '2024-09-12 10:45 AM',
        status: 'Checked Out',
        room: 'Room 303',
    },
    {
        id: 'V004',
        name: 'Emily Davis',
        reason: 'Health Checkup',
        check_in: '2024-09-13 11:00 AM',
        check_out: '2024-09-13 12:30 PM',
        status: 'Checked Out',
        room: 'Room 404',
    },
    {
        id: 'V005',
        name: 'David Brown',
        reason: 'Campus Tour',
        check_in: '2024-09-14 09:30 AM',
        check_out: '2024-09-14 11:15 AM',
        status: 'Checked Out',
        room: 'Room 505',
    },
];



const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const VisitorDataTable = () => {
    const dispatch = useDispatch();
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Col as={Col} lg={9} md={7} sm={6} xs={12}></Col>
                <Col as={Col} lg={3} md={5} sm={6} xs={12}>
                    <div className='d-flex flex-wrap flex-md-nowrap gap-3'>
                        <div className='search_bar_wrapper w-100'>
                            <input
                                type="text"
                                placeholder="Search by ID, Name, or Subject"
                                className="form-control search_input"
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
                            />
                            <div className='search_icon'><i className='fa fa-search'></i></div>
                            {/* <Button type="button" className="btn btn-icon search_btn"> <i className="fa fa-sliders text-black"></i> Filters</Button> */}
                        </div>
                    </div>
                </Col>
            </Row>

            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                striped
                paginationComponentOptions={paginationComponentOptions}
                selectableRows
                selectableRowsComponentProps={{ indeterminate: (isIndeterminate) => isIndeterminate }}
            />
        </>
    );
};

export default VisitorDataTable;
