import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import ViewPendingFees from './FeesStructure';
import FeesStructure from './FeesStructure';

export default function StudentFees() {
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
            class: "Class 1",
            fees: "Rs. 25000"
        },
        {
            class: "Class 2",
            fees: "Rs. 25000"
        },
        {
            class: "Class 3",
            fees: "Rs. 25000"
        },
        {
            class: "Class 4",
            fees: "Rs. 25000"
        },
        {
            class: "Class 5",
            fees: "Rs. 25000"
        },
        {
            class: "Class 6",
            fees: "Rs. 25000"
        },
        {
            class: "Class 7",
            fees: "Rs. 25000"
        },
        {
            class: "Class 8",
            fees: "Rs. 25000"
        },
        {
            class: "Class 9",
            fees: "Rs. 25000"
        },
        {
            class: "Class 10",
            fees: "Rs. 25000"
        },
        {
            class: "Class 11",
            fees: "Rs. 25000"
        },
        {
            class: "Class 12",
            fees: "Rs. 25000"
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
                                                                    Total Fees: {fee.fees}
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
            <FeesStructure show={show} onHide={handleClose} />
        </>
    )
}
