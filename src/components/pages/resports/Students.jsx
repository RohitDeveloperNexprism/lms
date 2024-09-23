import { Box, Rating } from '@mui/material';
import React from 'react'
import { Row, Col, Card, Form, Button, Container } from "react-bootstrap";


export default function Students() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Student's Report </h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0 bordered_data_table'>
                    <Row className="search_bar">
                        <Form className='mb-6'>
                            <Row>
                                <Col sm={6} md={4} lg={4}>
                                    <Form.Group>
                                        <Form.Label>Select Class</Form.Label>
                                        <Form.Select>
                                            <option value=""></option>
                                            <option value="electronics">Option1</option>
                                            <option value="furniture">Option2</option>
                                            <option value="stationery">Option3</option>
                                            <option value="clothing">Option4</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <Form.Group>
                                        <Form.Label>Select Section</Form.Label>
                                        <Form.Select>
                                            <option value=""></option>
                                            <option value="electronics">Option1</option>
                                            <option value="furniture">Option2</option>
                                            <option value="stationery">Option3</option>
                                            <option value="clothing">Option4</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <Form.Group>
                                        <Form.Label>Select Report Type</Form.Label>
                                        <Form.Select>
                                            <option value=""></option>
                                            <option value="electronics">Option1</option>
                                            <option value="furniture">Option2</option>
                                            <option value="stationery">Option3</option>
                                            <option value="clothing">Option4</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <Form.Group>
                                        <Form.Label>Select Student Name</Form.Label>
                                        <Form.Select>
                                            <option value=""></option>
                                            <option value="electronics">Option1</option>
                                            <option value="furniture">Option2</option>
                                            <option value="stationery">Option3</option>
                                            <option value="clothing">Option4</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col sm={6} md={4} lg={4}>
                                    <Form.Group>
                                        <Form.Label>&nbsp;</Form.Label>
                                        {/* <Form.Control type="submit" className='btn_primary' text /> */}
                                        <Button variant="primary" type="submit" className='px-6 w-100'>Generate Report</Button>

                                    </Form.Group>
                                </Col>

                            </Row>
                        </Form>
                    </Row>
                    <Card.Body className=''>

                        <Container className="border-dashed p-4 text-center">
                            <div>
                                <div className="d-flex justify-content-center align-items-center mb-3">
                                    {/* This is a placeholder for the image */}
                                    <img
                                        src="/img/download.png"
                                        alt="Download Icon"
                                        width="100"
                                    />
                                </div>
                                <h3 className='fw-semibold'>Download Report</h3>
                            </div>
                        </Container>

                    </Card.Body>
                </Card.Body>
            </Card>
        </>
    )
}
