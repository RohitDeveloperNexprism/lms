import React, { useState } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateHostelStudentDetailsPage, generateStudentDetailsPage } from '../../routes/routes';
import { openModal } from '../../redux/slice/allModalSlice';
import { useDispatch } from 'react-redux';

const columns = [
    {
        name: 'Student Name',
        cell: (row) => (
            <div className="student_wrapper">
                <Link to={generateStudentDetailsPage(row.student_id)} state={{ page: 'profile' }}>
                    <div className='d-flex gap-2 align-items-center'>
                        <img src={row.img} alt={""} className='rounded-circle w-25 h-25' />
                        <div>
                            <p className='sm text-black'>{row.name}</p>
                            <p className='secondary_text'>{row.email}</p>
                        </div>
                    </div>
                </Link>
            </div>
        ),
        sortable: true,
        width: '250px',
    },
    {
        name: 'Room No.',
        selector: row => row.room_no,
        sortable: true,
    },
    {
        name: `Room`,
        selector: row => row.room,
        sortable: true,
    },
    {
        name: `Bed`,
        selector: row => row.bed,
        sortable: true,
    },
    {
        name: `Phone Number`,
        selector: row => row.phone_number,
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
        room_no: 'S001',
        img: 'https://randomuser.me/api/portraits/men/1.jpg',
        name: 'John Doe',
        bed: 'A',
        room: '201',
        phone_number: '555-1234',
        address: '1234 Elm St, Springfield',
        email: 'johndoe@example.com',
    },
    {
        room_no: 'S002',
        img: 'https://randomuser.me/api/portraits/women/1.jpg',
        name: 'Jane Smith',
        bed: 'B',
        room: '122',
        phone_number: '555-5678',
        address: '5678 Oak St, Springfield',
        email: 'janesmith@example.com',
    },
    {
        room_no: 'S003',
        img: 'https://randomuser.me/api/portraits/men/2.jpg',
        name: 'Michael Brown',
        bed: 'A',
        room: '122',
        phone_number: '555-8765',
        address: '9101 Pine St, Springfield',
        email: 'michaelbrown@example.com',
    },
    {
        room_no: 'S004',
        img: 'https://randomuser.me/api/portraits/women/2.jpg',
        name: 'Emily Davis',
        bed: 'A',
        room: '22',
        phone_number: '555-3456',
        address: '2233 Birch St, Springfield',
        email: 'emilydavis@example.com',
    }
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const RoomStudentDataTable = () => {
    const dispatch = useDispatch();
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item?.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Col as={Col} lg={7} md={12} sm={12} xs={12}></Col>
                <Col as={Col} lg={5} md={12} sm={12} xs={12}>
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
                        <div className='add_class_btn text-nowrap' onClick={() => dispatch(openModal({ componentName: 'AddRoom', data: 'check' }))}>
                            <i className='ion ion-plus-round'></i>
                            <button>Add New Student</button>
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

export default RoomStudentDataTable;
