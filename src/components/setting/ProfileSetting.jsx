import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function ProfileSetting() {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>
                                Profile Setting
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col as={Col} xs={12} md={6}>
                                    <Form.Group>
                                        <Form.Label>Current Password</Form.Label>
                                        <Form.Control
                                            type='password'
                                            name=""
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>New Password</Form.Label>
                                        <Form.Control
                                            type='password'
                                            name=""
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Confirm Password</Form.Label>
                                        <Form.Control
                                            type='password'
                                            name=""
                                        />
                                    </Form.Group>
                                </Col>
                                <Col as={Col} xs={12} md={6}>
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
                                </Col>
                            </Row>
                            <Row className='mt-6'>
                                <Button className='w-auto'>Save</Button>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}