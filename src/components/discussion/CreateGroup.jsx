import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import logo from "../../assets/images/logo/Photo.png"

export default function CreateGroup() {
    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>Create Group</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Col as={Col} md={6}>
                                    <Form.Group>
                                        <Form.Label>Griup Name</Form.Label>
                                        <Form.Control
                                            name='group_name'
                                        />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Group Photo</Form.Label>
                                        <textarea name="" className='border border-primary rounded-3 w-100' rows={5} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Member Type</Form.Label>
                                        <Form.Control name="" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Select Class</Form.Label>
                                        <Form.Select name="" >
                                            <option value="">Select</option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Select Section</Form.Label>
                                        <Form.Select name="" >
                                            <option value="">Select</option>
                                            <option value="">1</option>
                                            <option value="">2</option>
                                            <option value="">3</option>
                                            <option value="">4</option>
                                        </Form.Select>
                                    </Form.Group>
                                    <Row className='justify-content-center gap-3 mt-5'>
                                        <Button className="create-btn text-light w-auto" variant=''>Cretate</Button>

                                        <Button className="cancel-btn text-light w-auto" variant=''>Cancel</Button>
                                    </Row>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Header className='border-bottom-0'>
                                            <Card.Title>
                                                Recently created
                                            </Card.Title>
                                        </Card.Header>
                                        <Card.Body>
                                            <Card className='bg-primary'>
                                                <Card.Body>
                                                    <Row>
                                                        <Col as={Col} md={3} className='d-flex shadow-lg'>
                                                            <img src={logo} alt="error" />
                                                        </Col>
                                                        <Col as={Col} md={9}>
                                                            <p className='text-light'>Group Name</p>
                                                            <br />
                                                            <br />
                                                            <Row>
                                                                <Col as={Col} md={4} className='text-light'>
                                                                Group For
                                                                </Col>
                                                                <Col as={Col} md={4} className='text-light'>
                                                                Class
                                                                </Col>
                                                                <Col as={Col} md={4} className='text-light'>
                                                                Section
                                                                </Col>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
