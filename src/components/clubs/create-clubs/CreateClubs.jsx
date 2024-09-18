import React, { useState } from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import Select from 'react-select';

export default function CreateClubs() {

    const options = [
        { value: 'rohit', label: 'rohit' },
        { value: 'rohit1', label: 'rohit1' },
        { value: 'rohit2', label: 'rohit2' },
        { value: 'rohit3', label: 'rohit3' },
        { value: 'rohit4', label: 'rohit4' },
    ];


    // const [selectedOptions, setSelectedOptions] = useState([]);




    return (
        <>
            <Row>
                <Col >
                    <Card>
                        <Card.Header>
                            <Card.Title>Create Event</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <Row >
                                    <Col as={Col} xs={12} md={3}>
                                        <Form.Label>Club Name</Form.Label>
                                    </Col>
                                    <Col as={Col} xs={12} md={4}>
                                        <Form.Control
                                            name='club_name'
                                        />
                                    </Col>
                                </Row>
                                <Row className='mt-5'>
                                    <Col as={Col} xs={12} md={3}>
                                        <Form.Label>Description</Form.Label>
                                    </Col>
                                    <Col as={Col} xs={12} md={4}>
                                        <textarea
                                            name='club_name'
                                            className='border-new-primary  rounded-3'
                                            rows={5}
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                    </Col>
                                </Row>
                                <Row className='mt-5'>
                                    <Col xs={12} md={3}>
                                        <Form.Label>Select Member</Form.Label>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <Select
                                            isMulti
                                            options={options}
                                            className=''
                                        />
                                    </Col>
                                </Row>
                                <Row className='mt-5'>
                                    <Col xs={12} md={3}>
                                        <p>Admin Name</p>
                                    </Col>
                                    <Col xs={12} md={4}>
                                        <p className='fw-bolder'>Jayesh Sharma</p>
                                    </Col>
                                </Row>
                                <Row className=' mt-5'>
                                    <Col as={Col} md={8}>
                                        <Button className="accordian-rounded-radious w-auto px-6">Create Event</Button>
                                    </Col>
                                </Row>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        </>
    )
}