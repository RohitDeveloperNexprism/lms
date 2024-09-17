import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function DownloadData() {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Col as={Col} xs={12} md={6} className='mb-2'>
                                <Card.Title className='fw-bolder'>
                                    Download Center
                                </Card.Title>
                            </Col>
                            <Col as={Col} xs={12} md={6} className='d-flex justify-content-end mb-2'>
                                <Form.Control
                                    name='search'
                                    placeholder='Search By ID, Name or Subject'
                                    className='accordian-rounded-radious w-auto'
                                />
                            </Col>
                        </Card.Header>
                        <Card.Body>
                            <Row className='align-items-end'>
                                <Col as={Col} xs={12} md={6} lg={4} className='mb-2'>
                                    <Form.Group>
                                        <Form.Label>
                                            Select Type
                                        </Form.Label>
                                        <Form.Select>
                                            <option value="">Select</option>
                                            <option value="teacher">Teacher</option>
                                            <option value="student">Student</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col as={Col} xs={12} md={6} lg={4} className='mb-2'>
                                    <Form.Group>
                                        <Form.Label>
                                            Name
                                        </Form.Label>
                                        <Form.Control
                                            name='name'
                                        />
                                    </Form.Group>
                                </Col>
                                <Col as={Col} xs={12} md={6} lg={4} className='mb-2'>
                                    <Form.Group>
                                        <Form.Label>
                                            Select Class
                                        </Form.Label>
                                        <Form.Control
                                            name="name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col as={Col} xs={12} md={6} lg={4} className='mb-2'>
                                    <Form.Group>
                                        <Form.Label>
                                            Select Class
                                        </Form.Label>
                                        <Form.Control
                                            name="name"
                                        />
                                    </Form.Group>
                                </Col>
                                <Col as={Col} xs={12} md={6} lg={4} className='mb-2'>
                                    <Form.Group>
                                        <Form.Label>
                                            Select Data Type
                                        </Form.Label>
                                        <Form.Select
                                            name="name"
                                        >
                                            <option value="">Select</option>
                                            <option value="">Select</option>
                                            <option value="">Select</option>
                                        </Form.Select>
                                    </Form.Group>
                                </Col>
                                <Col as={Col} xs={12} md={6} lg={4} className='mb-2'>
                                    <Button className='w-100'>Download</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}