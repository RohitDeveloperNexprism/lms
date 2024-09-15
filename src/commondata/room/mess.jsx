import React, { useState } from 'react';
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateHostelStudentDetailsPage, generateStudentDetailsPage } from '../../routes/routes';
import { openModal } from '../../redux/slice/allModalSlice';
import { useDispatch } from 'react-redux';

const columns = [
    {
        name: 'Food Image',
        cell: (row) => (
            <div className="student_wrapper">
                <img src={row.food_image} alt={""} className='rounded-2 w-50 h-20' />
            </div>
        ),
        sortable: true,
    },
    {
        name: 'Category',
        selector: row => row.category,
        sortable: true,
    },
    {
        name: `Sub Category`,
        selector: row => row.sub_category,
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
const placeholderImage = 'https://via.placeholder.com/150?text=Food+Image';

const initialData = [
    {
        id: 1,
        food_image: placeholderImage,
        category: 'Indian',
        sub_category: 'Vegetarian',
        price: '$10',
        room: 'A101',
    },
    {
        id: 2,
        food_image: placeholderImage,
        category: 'Chinese',
        sub_category: 'Non-Vegetarian',
        price: '$12',
        room: 'B202',
    },
    {
        id: 3,
        food_image: placeholderImage,
        category: 'Italian',
        sub_category: 'Vegetarian',
        price: '$15',
        room: 'C303',
    },
    {
        id: 4,
        food_image: placeholderImage,
        category: 'Mexican',
        sub_category: 'Non-Vegetarian',
        price: '$11',
        room: 'D404',
    },
    {
        id: 5,
        food_image: placeholderImage,
        category: 'Indian',
        sub_category: 'Vegetarian',
        price: '$9',
        room: 'E505',
    },
];



const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const MessDataTable = () => {
    const dispatch = useDispatch();
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.room.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar">
                <Col as={Col} xxl={4} xl={4} lg={12} md={12} sm={12} xs={12}></Col>
                <Col as={Col} xxl={8} xl={8} lg={12} md={12} sm={12} xs={12}>
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
                            <Button type="button" className="btn btn-icon search_btn"> <i className="fa fa-sliders text-black"></i> Filters</Button>
                        </div>
                        <div className='d-flex gap-3'>
                            <div className='add_class_btn text-nowrap' onClick={() => dispatch(openModal({ componentName: 'AddFood', data: 'check' }))}>
                                <i className='ion ion-plus-round'></i>
                                <button>Add Food Item</button>
                            </div>
                            <div className='add_class_btn text-nowrap' onClick={() => dispatch(openModal({ componentName: 'AddRoom', data: 'check' }))}>
                                <i className='ion ion-plus-round'></i>
                                <button>Create Category</button>
                            </div>
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

export default MessDataTable;
