import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import BehaviorListDataTable from '../../../commondata/behavior/behavior';

export default function BehaviorList() {

    return (
        <>
            <Card className='mt-3'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Student's Behavior Report </h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0 bordered_data_table'>
                    <Form className='mb-6'>
                        <Row>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group controlId="staffNo">
                                    <Form.Label>Select Class</Form.Label>
                                    <Form.Control as="select">
                                        <option>option</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Label>Select Section</Form.Label>
                                <Form.Control as="select">
                                    <option>option</option>
                                    <option>option</option>
                                    <option>option</option>
                                </Form.Control>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group controlId="department">
                                    <Form.Label>Select Student Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={12} md={12} lg={12} className='d-flex justify-content-center mt-4'>
                                <Button variant="primary" type="submit" className='px-6 '>Generate Report</Button>

                            </Col>
                        </Row>
                    </Form>


                    <BehaviorListDataTable />
                </Card.Body>
            </Card>
        </>
    );
}
