import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import HrTab from '../HrTab';

export default function PayrollDetails() {

    return (
        <>
            <Card className='mt-3'>
                <Card.Header className="card-header">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Add New Staff</h3>
                        </Col>
                        <Col md={6}>
                            <Button variant="primary" type="submit" className="import_staff_btn">
                                Import Staff
                            </Button>
                        </Col>
                    </Row>
                    <HrTab />
                </Card.Header>
                <Card.Body>
                    <Form className='add_staff_form'>
                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="staffNo">
                                    <Form.Label>EPF No.</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="role">
                                    <Form.Label>Basic Salary</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="department">
                                    <Form.Label>Contract Type </Form.Label>
                                    <Form.Control as="select">
                                        <option>Full Time</option>
                                        <option>Part Time</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>

                        </Row>
                        {/* <div className="mt-4 text-right">
                            <Button variant="primary" type="submit">Save Staff</Button>
                        </div> */}
                    </Form>
                </Card.Body>
            </Card>
        </>
    );
}
