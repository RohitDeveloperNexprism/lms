import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import AppointmentsDataTable from '../../../../commondata/hr/appointments';

export default function Appointments() {
    return (
        <>
            <Card className=''>
                <Card.Header className="card-header  border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Appointments</h3>
                        </Col>
                    </Row>
                </Card.Header>

                <Card.Body>
                    <Form>
                        <Row className="mb-3">
                            <Col md={6}>
                                <Form.Group controlId="formName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                                <Form.Group controlId="formRole">
                                    <Form.Label>Select Role</Form.Label>
                                    <Form.Select>
                                        <option>Teacher</option>
                                        <option>Student</option>
                                        <option>Parent</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="formMember">
                                    <Form.Label>Select Member</Form.Label>
                                    <Form.Select>
                                        <option>Neeraj Singh</option>
                                        <option>John Doe</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group controlId="formDate">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formReason" className='meeting_reason'>
                                    <Form.Label>Reason for Meeting</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row className="justify-content-end">
                            <Col md={3}>
                                <Button variant="success" className="send_feedback_btn d-flex justify-content-end ms-auto mt-4">
                                    Book Appointments
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title mb-6">Appointments List</h3>
                        </Col>
                        <Col md={12} className='bordered_data_table'>
                            <AppointmentsDataTable />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}
