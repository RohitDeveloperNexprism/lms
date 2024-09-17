import React from 'react'
import { Card, Col, Form, Row, Button } from 'react-bootstrap';
import logo from "../../assets/images/logo/Photo.png"


export default function Alumini() {

    const data = [
        {
            name: "Rohit Joshi",
            year: 2021,
            dob: "17/09/2024"
        },
        {
            name: "Rohit Joshi",
            year: 2021,
            dob: "17/09/2024"
        },
        {
            name: "Rohit Joshi",
            year: 2021,
            dob: "17/09/2024"
        },
        {
            name: "Rohit Joshi",
            year: 2021,
            dob: "17/09/2024"
        },
        {
            name: "Rohit Joshi",
            year: 2021,
            dob: "17/09/2024"
        },
        {
            name: "Rohit Joshi",
            year: 2021,
            dob: "17/09/2024"
        },
        {
            name: "Rohit Joshi",
            year: 2021,
            dob: "17/09/2024"
        },
        {
            name: "Rohit Joshi",
            year: 2021,
            dob: "17/09/2024"
        },
    ]

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className="border-bottom-0">
                            <Col as={Col} md={6}>
                                <Card.Title>Alumini Section</Card.Title>
                            </Col>
                            <Col as={Col} md={6} className="d-flex justify-content-end">
                                <Form.Control
                                    name='search'
                                    placeholder='Search By ID,Name or Subject'
                                    className="accordian-rounded-radious w-auto"
                                />
                            </Col>
                        </Card.Header>
                        <Card.Body>
                            <Row className='mb-4'>
                                <Form>
                                    <Row>
                                        <Col as={Col} md={4}>
                                            <Form.Group>
                                                <Form.Label>Student Name</Form.Label>
                                                <Form.Control
                                                    name="student_name"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} md={4}>
                                            <Form.Group>
                                                <Form.Label>Student Name</Form.Label>
                                                <Form.Select
                                                    name="student_name"
                                                >
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                    <option value="">Select</option>
                                                </Form.Select>
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} md={4}>
                                            <Form.Group>
                                                <Form.Label>Student Name</Form.Label>
                                                <Form.Control
                                                    name="student_name"
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className="justify-content-end mt-5">
                                        <Button className="w-auto">Search</Button>
                                    </Row>
                                </Form>
                            </Row>
                            <Row>
                                {

                                    data.map((item, index) => (
                                        <Col key={index} as={Col} xs={12} md={4} xl={3}>
                                            <Card className="bg-secondry">
                                                <Card.Body>
                                                    <Row className='text-center'>
                                                        <Col as={Col} md={12}>
                                                            <img
                                                                src={logo}
                                                                alt="Student Image"
                                                                height={100}
                                                            />
                                                        </Col>
                                                    </Row>
                                                    <Row className='mt-3'>
                                                        <Col as={Col} md={12} className='my-2'>
                                                            <Card.Title className='text-center text-dark fw-semibold'>{item.name}</Card.Title>
                                                        </Col>
                                                    </Row>
                                                    <Row className='my-3 justify-content-between'>
                                                        <Col as={Col} md={12} className='d-flex justify-content-between'>
                                                            <p>Year</p>
                                                            <p>{item.year}</p>
                                                        </Col>
                                                    </Row>
                                                    <Row>
                                                        <Col as={Col} md={12} className='d-flex justify-content-between'>
                                                            <p>DOB</p>
                                                            <p>{item.dob}</p>
                                                        </Col>
                                                    </Row>
                                                    <Row className='mt-4 justify-content-center'>
                                                        <Button className='w-auto'>View</Button>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))
                                }

                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row >
        </>
    )
}