import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import { Link } from 'react-router-dom';
import HrTab from './HrTab';

export default function AddStaff() {

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
                                    <Form.Label>Staff no.</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="role">
                                    <Form.Label>Role</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="department">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="designation">
                                    <Form.Label>Designation</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="firstName">
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="lastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="fatherName">
                                    <Form.Label>Father Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="motherName">
                                    <Form.Label>Mother Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>

                        </Row>

                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="gender">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="dob">
                                    <Form.Label>Date Of Birth</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="dateOfJoining">
                                    <Form.Label>Date Of Joining</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="mobile">
                                    <Form.Label>Mobile</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="maritalStatus">
                                    <Form.Label>Marital Status</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="emergencyMobile">
                                    <Form.Label>Emergency Mobile</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={3} lg={3}>
                                <Form.Group controlId="staffPhoto">
                                    <Form.Label>Staff Photo</Form.Label>
                                    <Form.Control type="file" accept=".jpg,.jpeg,.png" />
                                    <Form.Text className="text-muted">
                                        (JPG, JPEG, PNG are allowed for upload)
                                    </Form.Text>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="currentAddress">
                                    <Form.Label>Current Address</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="permanentAddress">
                                    <Form.Label>Permanent Address</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="qualification">
                                    <Form.Label>Qualification</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="experience">
                                    <Form.Label>Experience</Form.Label>
                                    <Form.Control as="textarea" rows={5} />
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
