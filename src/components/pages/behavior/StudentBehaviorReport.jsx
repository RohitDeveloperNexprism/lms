import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import BehaviorListDataTable from '../../../commondata/behavior/behavior';

export default function StudentBehaviorReport() {

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
                    <Row>
                        <Col sm={6} md={6} lg={6}>
                            <Card className="profile-card">
                                <Card.Body>
                                    <div className="d-flex align-items-center">
                                        <div className="me-3 img_wrapper" >
                                            <img src='/placeholder.png' alt='' className='w-100 h-100 object-fit-contain' />
                                        </div>
                                        <div className='d-grid gap-4 text-center '>
                                            <div>
                                                <h4 className='mb-0'>Kartik Sharma</h4>
                                                <p className="class_text">Class 9 th</p>
                                            </div>
                                            <small className='profile_card_p'><i class="fa fa-circle" aria-hidden="true"></i>&nbsp;
                                                +91 xxxxxxxxxx &nbsp;<i class="fa fa-circle" aria-hidden="true"></i>&nbsp;
                                                Delhi &nbsp;<i class="fa fa-circle" aria-hidden="true"></i>&nbsp;
                                                kartik@gmail.com</small>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col sm={6} md={6} lg={6}>
                            <Card className="education-card">
                                <Card.Body>
                                    <h5>Summary </h5>
                                    <hr />
                                    <ul>
                                        <div className='d-flex justify-content-between gap-4'><li>History Major, University Academy Historia </li> <span>(2015-2017)</span></div>
                                        <div className='d-flex justify-content-between gap-4'><li>Master of History, University Academy Historia </li> <span>(2017-2020)</span></div>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                    <div className="mt-6">
                        <Row className="justify-content-center">
                            {[1, 2, 3].map((item, index) => (
                                <Col key={index} md={6} lg={4} className='mb-4'>
                                    <div className="text-white complaint behavior_box">
                                        <div className="complaint_title">
                                            <span className=''>Title:</span>
                                            {/* <span className='type'>Type</span> */}
                                        </div>
                                        <div className="mt-4 mb-4">
                                            <p className="complaint_text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed placerat mi.
                                                Pellentesque nulla mauris. Vivamus sed placerat mi. Pellentesque nulla mauris.
                                            </p>
                                        </div>
                                        <div className="complaint_title">
                                            <span>By: </span>
                                            <span >Date:</span>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </>
    );
}
