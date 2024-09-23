import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import CustomDatePicker from '../pages/Students/Student-details/CustomDatePicker';


export default function DashboardComplaint() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Notice Board</h3>
                        </Col>
                        <Col md={6} className='d-flex justify-content-end'>
                            <CustomDatePicker />
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <div className="mt-6">
                        <Row className="justify-content-center">
                            {[1, 2, 3].map((item, index) => (
                                <Col key={index} md={6} lg={4} className='mb-4'>
                                    <div className="text-white dashboard_complaint complaint">
                                        <div className="complaint_title">
                                            <span className=''>Math Olympiad <br />Competition</span>
                                            <span className='arrow'><i class="ion ion-ios7-arrow-forward"></i></span>
                                        </div>
                                        <div className="mt-4 mb-4">
                                            <p className="complaint_text">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed placerat mi.
                                                Pellentesque nulla mauris. Vivamus sed placerat mi. Pellentesque nulla mauris.
                                            </p>
                                        </div>
                                        <div className="complaint_title">
                                            <span><b>To Ms. xyz</b> <br /> <span className='dashboard_complaint_to'>(Math Teacher)</span></span>
                                            <span className='dashboard_complaint_to fw-semibold'>22/7/2023</span>
                                        </div>
                                    </div>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </Card.Body>
            </Card>
        </>
    )
}
