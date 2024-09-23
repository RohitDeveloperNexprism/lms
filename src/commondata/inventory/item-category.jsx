import React, { useState } from 'react';
import { Button, Col, Dropdown, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';
import { generateStudentDetailsPage } from '../../routes/routes';

// Mock data
const initialData = [
    { id: 1, name: 'A Section', room: 101 },
    { id: 2, name: 'B Section', room: 102 },
    { id: 3, name: 'C Section', room: 103 },
    { id: 4, name: 'D Section', room: 104 },
    { id: 5, name: 'E Section', room: 105 },
];

const columns = [
    {
        name: 'Sr No.',
        selector: row => row.id,
        sortable: true,
    },
    {
        name: 'Sections',
        selector: row => row.name,
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
                {/* <Link to={generateStudentDetailsPage(row.room)} state={{ page: 'profile' }}>
                    <OverlayTrigger placement="top" overlay={<Tooltip>View</Tooltip>}>
                        <i className="fa fa-eye"></i>
                    </OverlayTrigger>
                </Link> */}
            </div>
        ),
    },
];

const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const ItemCategoryDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                paginationComponentOptions={paginationComponentOptions}
            />
        </>
    );
};

export default ItemCategoryDataTable;
