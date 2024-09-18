import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import logo from "../../assets/images/logo/Photo.png"

export default function ManageGroup() {
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
                <Col >
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Col as={Col} md={6}>
                                <Card.Title>
                                    Manage Group
                                </Card.Title>
                            </Col>
                            <Col as={Col} md={6} className='text-end'>
                                <Button className="filter-button"><i className='fa fa-filter'>&nbsp;Filter</i></Button>
                            </Col>
                        </Card.Header>

                        <Card.Body>
                            <Row>
                                {
                                    data.map((item, index) => (
                                        <Col key={index} as={Col} xs={12} md={4} xl={3}>
                                            <Card className="bg-secondry">
                                                <Card.Header className='justify-content-end'>
                                                    <i className='fa fa-edit'></i>
                                                </Card.Header>
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
                                                    <Row>
                                                        <p className='text-center'>Group For</p>
                                                    </Row>
                                                    <Row className='mt-6'>
                                                        <Col as={Col} md={12} className='d-flex justify-content-between'>
                                                            <p>DOB</p>
                                                            <p>{item.dob}</p>
                                                        </Col>
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
            </Row>
        </>
    )
}