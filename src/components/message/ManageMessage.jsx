import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function ManageMessage() {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>
                                Message
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col as={Col} xs={12} md={6}>
                                        <Form.Group>
                                            <Form.Label>Select Receiver Type</Form.Label>
                                            <Form.Control
                                                name="receiver_type"
                                            />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Label>Receiver name</Form.Label>
                                            <Form.Control
                                                name="receiver_name"
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col as={Col} xs={12} md={6}>
                                        <Form.Label>Message</Form.Label>
                                        <textarea
                                            name='message'
                                            className='text-width border rounded-3 border-primary'
                                            rows={5}
                                        />
                                    </Col>
                                </Row>
                                <Row className='mt-6 px-3'>
                                    <Button className="w-auto">Send</Button>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}