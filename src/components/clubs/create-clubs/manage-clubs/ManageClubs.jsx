import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import EditClubs from './EditClubs';

export default function ManageClubs() {
    const [show, setShow] = useState(false);
    const [selectedStudent, setSelectedStudent] = useState(null);

    const handlePopUp = () => {
        setShow(true);
    };

    const handleClose = () => {
        setShow(false);
    };

    const feesData = [
        {
            class: "Music Club",
            fees: "05"
        },
        {
            class: "Music Club",
            fees: "05"
        },
        {
            class: "Music Club",
            fees: "05"
        },
        {
            class: "Music Club",
            fees: "05"
        },
        {
            class: "Music Club",
            fees: "05"
        },
        {
            class: "Music Club",
            fees: "05"
        },
        {
            class: "Music Club",
            fees: "05"
        },
        {
            class: "Music Club",
            fees: "05"
        },
        {
            class: "Music Club",
            fees: "05"
        },
        {
            class: "Music0",
            fees: "05"
        },
        {
            class: "Music1",
            fees: "05"
        },
        {
            class: "Music2",
            fees: "05"
        },
    ]

    return (

        <>
            <Row>
                <Col>
                    <Card>
                        <Card.Header className='border-bottom-0'>
                            <Card.Title className='fw-bolder'>Student Fees</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            <Row>
                                {
                                    feesData && feesData.length > 1 ?
                                        feesData.map((fee, index) => (
                                            <Col key={index} md={6} xl={4} xxl={3}>
                                                <Card className="bg-secondry">
                                                    <Card.Body>
                                                        <p className='fw-bolder fs-6 mb-4'>{fee.class}</p>
                                                        <Row className='align-items-center'>
                                                            <Col as={Col} md={8}>
                                                                <Button variant='outline' className='border border-dark accordian-rounded-radious shadow-sm btn-hover'>
                                                                    Total Members: {fee.fees}
                                                                </Button>
                                                            </Col>
                                                            <Col as={Col} md={4} className='text-end'>
                                                                <i className='fa fa-edit text-dark cursor-pointer text-main' onClick={() => handlePopUp()}></i>
                                                            </Col>
                                                        </Row>
                                                    </Card.Body>
                                                </Card>
                                            </Col>
                                        )) : null
                                }
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <EditClubs show={show} onHide={handleClose} />
        </>
    )
}