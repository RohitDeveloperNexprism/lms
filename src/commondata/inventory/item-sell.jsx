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
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Company Name',
        selector: row => row.company_name,
        sortable: true,
    },
    {
        name: `Supplier Name`,
        selector: row => row.supplier_name,
        sortable: true,
    },
    {
        name: `Reference No.`,
        selector: row => row.reference_no,
        sortable: true,
    },
    {
        name: `Date`,
        selector: row => row.date,
        sortable: true,
    },
    {
        name: `Total`,
        selector: row => row.total,
        sortable: true,
    },
    {
        name: `Quantity`,
        selector: row => row.quantity,
        sortable: true,
    },
    {
        name: `Paid`,
        selector: row => row.paid,
        sortable: true,
    },
    {
        name: `Due`,
        selector: row => row.due,
        sortable: true,
    }
];

const initialData = [
    {
        id: 1,
        name: 'Laptop',
        company_name: 'Dell',
        supplier_name: 'ABC Supplies',
        reference_no: 'REF001',
        date: '2024-09-15',
        total: '1500.00',
        quantity: 2,
        paid: '1200.00',
        due: '300.00'
    },
    {
        id: 2,
        name: 'Monitor',
        company_name: 'HP',
        supplier_name: 'XYZ Tech',
        reference_no: 'REF002',
        date: '2024-09-10',
        total: '500.00',
        quantity: 5,
        paid: '500.00',
        due: '0.00'
    },
    {
        id: 3,
        name: 'Keyboard',
        company_name: 'Logitech',
        supplier_name: 'Tech World',
        reference_no: 'REF003',
        date: '2024-09-01',
        total: '100.00',
        quantity: 10,
        paid: '80.00',
        due: '20.00'
    }
];

const paginationComponentOptions = {
    rowsPerPageText: 'Rows per page',
    rangeSeparatorText: 'of',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'All',
};

const ItemSellListDataTable = () => {
    const [filterText, setFilterText] = useState('');
    const filteredData = initialData.filter(item =>
        item.name.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <>
            <Row className="search_bar align-items-center mt-6">
                <Col as={Col} lg={7} md={12} sm={12} xs={12} className='mb-4'>
                    <h3 className='card-title'>Item Sell List</h3>
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
                        <Button type="button" className="btn btn-icon search_btn "> <i className="fa fa-download text-black"></i> </Button>
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

export default ItemSellListDataTable;
