import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'

export default function AnnouncementCard() {
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
        </>
    )
}