import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function CreateBook() {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>
                                Add Book
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row>
                                    <Col as={Col} xs={12} md={6} lg={3}>
                                        <Form.Group>
                                            <Form.Label>Enter Name</Form.Label>
                                            <Form.Control
                                                name='name'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col as={Col} xs={12} md={6} lg={3}>
                                        <Form.Group>
                                            <Form.Label>Author/Writer</Form.Label>
                                            <Form.Control
                                                name='writer'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col as={Col} xs={12} md={6} lg={3}>
                                        <Form.Group>
                                            <Form.Label>Quantity</Form.Label>
                                            <Form.Control
                                                name='quantity'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col as={Col} xs={12} md={6} lg={3}>
                                        <Form.Group>
                                            <Form.Label>Price</Form.Label>
                                            <Form.Control
                                                name='price'
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col as={Col} xs={12} md={6} lg={3}>
                                        <Form.Group>
                                            <Form.Label>Code No. / Book Id</Form.Label>
                                            <Form.Control
                                                name='name'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col as={Col} xs={12} md={6} lg={3}>
                                        <Form.Group>
                                            <Form.Label>Upload Cover Photo</Form.Label>
                                            <Form.Control
                                                name='writer'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col as={Col} xs={12} md={6} lg={3}>
                                        <Form.Group>
                                            <Form.Label>Subject</Form.Label>
                                            <Form.Control
                                                name='quantity'
                                            />
                                        </Form.Group>
                                    </Col>
                                    <Col as={Col} xs={12} md={6} lg={3}>
                                        <Form.Group>
                                            <Form.Label>Edition Date</Form.Label>
                                            <Form.Control
                                                name='price'
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col as={Col} xs={12} md={6} lg={3}>
                                        <Form.Group>
                                            <Form.Label>Published Date</Form.Label>
                                            <Form.Control
                                                type='date'
                                                name=''
                                            />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row className='mt-6 px-3'>
                                    <Button className='w-auto'>Create</Button>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}