import React, { useState } from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import DashboardStudentsListDataTable from '../../commondata/dashboard';

export default function StudentsData() {
    const [filterText, setFilterText] = useState('');

    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Unpaid Tution Fees </h3>
                        </Col>
                        <Col md={6} className='d-flex justify-content-end'>
                            <div className="dashboard_search_bar search_bar">
                                <div className='search_bar_wrapper'>
                                    <input
                                        type="text"
                                        placeholder="Search by ID, Name, or Subject"
                                        className="form-control search_input"
                                        value={filterText}
                                        onChange={(e) => setFilterText(e.target.value)}
                                    />
                                    <div className='search_icon'><i className='fa fa-search'></i></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <DashboardStudentsListDataTable filterText={filterText} />
                </Card.Body>
            </Card>
        </>
    )
}
