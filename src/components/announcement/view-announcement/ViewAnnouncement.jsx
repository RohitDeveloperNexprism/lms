import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'

export default function ViewAnnouncement() {

    const data = [
        {
            heading: "Math Olympiad Competition",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            receptient: "To Ms. xyz",
            designation: "(Math Teacher)",
            date: "22/7/2023"
        },
        {
            heading: "Math Olympiad Competition",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            receptient: "To Ms. xyz",
            designation: "(Math Teacher)",
            date: "22/7/2023"
        },
        {
            heading: "Math Olympiad Competition",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            receptient: "To Ms. xyz",
            designation: "(Math Teacher)",
            date: "22/7/2023"
        },
        {
            heading: "Math Olympiad Competition",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            receptient: "To Ms. xyz",
            designation: "(Math Teacher)",
            date: "22/7/2023"
        },
        {
            heading: "Math Olympiad Competition",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            receptient: "To Ms. xyz",
            designation: "(Math Teacher)",
            date: "22/7/2023"
        },
        {
            heading: "Math Olympiad Competition",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            receptient: "To Ms. xyz",
            designation: "(Math Teacher)",
            date: "22/7/2023"
        },
        {
            heading: "Math Olympiad Competition",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            receptient: "To Ms. xyz",
            designation: "(Math Teacher)",
            date: "22/7/2023"
        },
        {
            heading: "Math Olympiad Competition",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            receptient: "To Ms. xyz",
            designation: "(Math Teacher)",
            date: "22/7/2023"
        },
    ]

    return (
        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title>
                                View Announcement
                            </Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                <Form>
                                    <Row>
                                        <Col as={Col} xs={12} md={4}>
                                            <Form.Group>
                                                <Form.Label>Select Date</Form.Label>
                                                <Form.Control
                                                    type='date'
                                                    name='date'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={4}>
                                            <Form.Group>
                                                <Form.Label>Search By Name</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    name='name'
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col as={Col} xs={12} md={4}>
                                            <Form.Group>
                                                <Form.Label>Description</Form.Label>
                                                <Form.Control
                                                    type='text'
                                                    name='description'
                                                />
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    <Row className='mt-5 ps-3'>
                                        <Button className='w-auto'>Search</Button>
                                    </Row>
                                </Form>
                            </Row>
                            <Row className='mt-6'>
                                {
                                    data && data.map((item, index) => {
                                        return (
                                            <>
                                                <Col as={Col} xs={12} md={6} xl={4} xxl={3} key={index}>
                                                    <Card className='bg-notice-card px-0'>
                                                        <Card.Header className='border-bottom-0 px-0'>
                                                            <Col as={Col} md={6}>
                                                                <Card.Title>{item?.heading}</Card.Title>
                                                            </Col>
                                                            <Col as={Col} md={6} className='text-end'>
                                                                <Button className="anglebutton" variant=''><i className='fa fa-angle-right fw-bolder fs-5'></i></Button>
                                                            </Col>
                                                        </Card.Header>
                                                        <Card.Body className='px-0'>
                                                            <p className='text-center'>
                                                                {item?.description}
                                                            </p>
                                                        </Card.Body>
                                                        <Card.Footer className='px-1'>
                                                            <Row className='align-items-center'>
                                                                <Col as={Col} md={6}>
                                                                    <p className='fw-bolder text-dark'>{item?.receptient}</p>
                                                                    <p>{item?.designation}</p>
                                                                </Col>
                                                                <Col as={Col} md={6}>
                                                                    {item?.date}
                                                                </Col>
                                                            </Row>
                                                        </Card.Footer>
                                                    </Card>
                                                </Col>
                                            </>
                                        )
                                    })
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}