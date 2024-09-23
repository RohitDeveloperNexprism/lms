import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import AddRouteDataTable from '../../../../commondata/transport/add-route';

export default function AddRoute() {

    return (
        <>
            <Card className='mt-3'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Create Route</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='bordered_data_table'>
                    <Row className='mb-6'>
                        <Col md={6}>
                            <Form className='add_vehicle_form'>
                                <Row>
                                    <Col sm={6} md={6} lg={6}>
                                        <Form.Group controlId="staffNo">
                                            <Form.Label>Route Starting Points</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6} md={6} lg={6}>
                                        <Form.Group controlId="role">
                                            <Form.Label>Route Starting Points</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6} md={6} lg={6}>
                                        <Form.Group controlId="department">
                                            <Form.Label>Transport Vehicle</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                    <Col sm={6} md={6} lg={6}>
                                        <Form.Group controlId="designation">
                                            <Form.Label>Route Fare</Form.Label>
                                            <Form.Control type="text" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div className="mt-4 text-right">
                                    <Button variant="primary" type="submit" className='px-6'>Create Route</Button>
                                </div>
                            </Form>
                        </Col>
                    </Row>

                    <AddRouteDataTable />
                </Card.Body>
            </Card>
        </>
    );
}
