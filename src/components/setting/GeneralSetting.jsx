import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function GeneralSetting() {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>General Setting</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col as={Col} xs={12} md={6}>
                                    <Form.Group>
                                        <Form.Label>Change Name</Form.Label>
                                        <Form.Control
                                            name='name'
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Change Logo</Form.Label>

                                        <div className='border-custom d-flex justify-content-center align-items-center'>
                                            upload here
                                        </div>
                                        <Form.Control
                                            name='name'
                                            className='d-none'
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Grading type</Form.Label>
                                        <Form.Select>
                                            <option value="">Percentage</option>
                                            <option value="">CGPA</option>
                                            <option value="">Grading</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Enter Domain</Form.Label>
                                        <Form.Control
                                            name=''
                                        />
                                    </Form.Group>
                                </Col>
                                <Col as={Col} xs={12} md={6}>
                                    <Form.Group>
                                        <Form.Label>School Address</Form.Label>
                                        <Form.Control
                                            name=''
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control
                                            name=''
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Email Address</Form.Label>
                                        <Form.Control
                                            name=''
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Linked Link</Form.Label>
                                        <Form.Control
                                            name=''
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Facebook Link</Form.Label>
                                        <Form.Control
                                            name=''
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Twitter Link</Form.Label>
                                        <Form.Control
                                            name=''
                                        />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row className='mt-5 ps-3'>
                                <Button className='w-auto'>Save</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}