import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function DownloadReports() {

    const [slectType, setSelectType] = useState()
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header>
                            <Card.Title>
                                Download Report
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row className='mb-6'>
                                <Form>
                                    <Row>
                                        <Col as={Col} xs={12} md={6} lg={3}>
                                            <Form.Group>
                                                <Form.Label>Select Type</Form.Label>
                                                <Form.Select
                                                    onChange={(e) => setSelectType(e.target.value)}
                                                >
                                                    <option value="Teacher">Teacher</option>
                                                    <option value="Student">Student</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        {
                                            slectType && slectType === "Student" ? (
                                                <>
                                                    <Col as={Col} xs={12} md={6} lg={3}>
                                                        <Form.Group>
                                                            <Form.Label>Select Class</Form.Label>
                                                            <Form.Select>
                                                                <option value="">Select</option>
                                                                <option value="1">1</option>
                                                                <option value="2">2</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col as={Col} xs={12} md={6} lg={3}>
                                                        <Form.Group>
                                                            <Form.Label>Select Section</Form.Label>
                                                            <Form.Select>
                                                                <option value="">Select</option>
                                                                <option value="A">A</option>
                                                                <option value="B">B</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col as={Col} xs={12} md={6} lg={3}>
                                                        <Form.Group>
                                                            <Form.Label>Select Report Type</Form.Label>
                                                            <Form.Select>
                                                                <option value="">Select</option>
                                                                <option value="one">one</option>
                                                                <option value="two">two</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>
                                                </>
                                            ) : (
                                                <>
                                                    <Col as={Col} xs={12} md={6} lg={3}>
                                                        <Form.Group>
                                                            <Form.Label>Select Teacher</Form.Label>
                                                            <Form.Select>
                                                                <option value="">Select</option>
                                                                <option value="A">A</option>
                                                                <option value="B">B</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>
                                                    <Col as={Col} xs={12} md={6} lg={3}>
                                                        <Form.Group>
                                                            <Form.Label>Select Report Type</Form.Label>
                                                            <Form.Select>
                                                                <option value="">Select</option>
                                                                <option value="one">one</option>
                                                                <option value="two">two</option>
                                                            </Form.Select>
                                                        </Form.Group>
                                                    </Col>
                                                </>
                                            )
                                        }
                                    </Row>
                                    <Row className='mt-5'>
                                        <Button className='w-auto ms-3'>Search</Button>
                                    </Row>
                                </Form>
                            </Row>
                            <Row className='mt-6'>
                                <Row className='justify-content-center'>
                                    <Button className='w-auto'>Generate Report</Button>
                                </Row>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}