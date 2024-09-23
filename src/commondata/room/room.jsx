import React, { useState } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateHostelStudentDetailsPage, generateStudentDetailsPage } from '../../routes/routes';
import { openModal } from '../../redux/slice/allModalSlice';
import { useDispatch } from 'react-redux';

const columns = [
    {
        name: 'Room',
        selector: row => row.room,
        sortable: true,
    },
    {
        name: 'Category',
        selector: row => row.category,
        sortable: true,
    },
    {
        name: `Bed`,
        selector: row => row.sections,
        sortable: true,
    },
    {
        name: `Price`,
        selector: row => row.price,
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
        room: '101',
        category: 'Economy',
        sections: 'A',
        price: '100',
        student_id: 1,
    },
    {
        room: '102',
        category: 'Standard',
        sections: 'B',
        price: '150',
        student_id: 2,
    },
    {
        room: '103',
        category: 'Deluxe',
        sections: 'C',
        price: '200',
        student_id: 3,
    },
    {
        room: '104',
        category: 'Suite',
        sections: 'D',
        price: '300',
        student_id: 4,
    },
    {
        room: '105',
        category: 'Premium',
        sections: 'E',
        price: '400',
        student_id: 5,
    },
];


const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const RoomDataTable = () => {
    const dispatch = useDispatch();
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.room.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Col as={Col} xxl={6} xl={5} lg={12} md={12} sm={12} xs={12}>
                    <h3 className="card-title">Room  list</h3>
                </Col>
                <Col as={Col} xxl={6} xl={7} lg={12} md={12} sm={12} xs={12}>
                    <div className='d-flex flex-wrap flex-md-nowrap gap-3 mb-4'>
                        <div className='search_bar_wrapper w-100'>
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
                        <div className='add_class_btn text-nowrap' onClick={() => dispatch(openModal({ componentName: 'AddRoom', data: 'check' }))}>
                            <i className='ion ion-plus-round'></i>
                            <button>Add New Room</button>
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

export default RoomDataTable;
