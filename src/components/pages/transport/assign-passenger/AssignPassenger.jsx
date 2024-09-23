import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import AssignPassengerDataTable from '../../../../commondata/transport/assign-passenger';

export default function AssignPassenger() {

    return (
        <>
            <Card className='mt-3'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Assign Passenger</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='bordered_data_table'>

                    <Form className='add_vehicle_form mb-6'>
                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="staffNo">
                                    <Form.Label>Select Class</Form.Label>
                                    <Form.Control as="select">
                                        <option>Class 1</option>
                                        <option>Class 2</option>
                                        <option>Class 3</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="role">
                                    <Form.Label>Select Section</Form.Label>
                                    <Form.Control as="select">
                                        <option>Section 1</option>
                                        <option>Section 2</option>
                                        <option>Section 3</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="department">
                                    <Form.Label>Select Students</Form.Label>
                                    <Form.Control as="select">
                                        <option>Section 1</option>
                                        <option>Section 2</option>
                                        <option>Section 3</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="designation">
                                    <Form.Label>Bus Route</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-4 text-right">
                            <Button variant="primary" type="submit" className='px-6'>Assign Passenger</Button>
                        </div>
                    </Form>


                    <AssignPassengerDataTable />
                </Card.Body>
            </Card>
        </>
    );
}
