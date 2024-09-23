import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import AppointmentsDataTable from '../../../commondata/hr/appointments';
import AddVehicleDataTable from '../../../commondata/transport/add-vehicle';

export default function AddVehicle() {

    return (
        <>
            <Card className='mt-3'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Create Vehicle </h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body>
                    <Form className='add_vehicle_form'>
                        <Row>
                            <Col sm={6} md={6} lg={6}>
                                <Form.Group controlId="staffNo">
                                    <Form.Label>Vehicle Number</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} lg={6}>
                                <Form.Group controlId="role">
                                    <Form.Label>Driver Name</Form.Label>
                                    <Form.Control type="text" placeholder='Enter Driver Name' />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} lg={6}>
                                <Form.Group controlId="department">
                                    <Form.Label>Vehicle Model</Form.Label>
                                    <Form.Control type="text" placeholder='Enter model model' />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={6} lg={6}>
                                <Form.Group controlId="designation">
                                    <Form.Label>Driver Phone Number</Form.Label>
                                    <Form.Control type="text" placeholder='Enter Number' />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-4 text-right">
                            <Button variant="primary" type="submit" className='px-6'>Create Vehicle</Button>
                        </div>
                    </Form>
                    <Row className='mt-6 mb-6'>
                        <Col md={4} className=' mb-2 mb-md-0'>
                            <div className='room_card room_card_first'>
                                <h4 className='semibold h3 mb-2'>1000</h4>
                                <p className='room_number'>Total Bus</p>
                            </div>
                        </Col>
                        <Col md={4} className=' mb-2 mb-md-0'>
                            <div className='room_card room_card_first'>
                                <h4 className='semibold h3 mb-2'>600</h4>
                                <p className='room_number'>Total Active Bus</p>
                            </div>
                        </Col>
                        <Col md={4} className=' mb-2 mb-md-0' >
                            <div className='room_card room_card_first'>
                                <h4 className='semibold h3 mb-2'>250</h4>
                                <p className='room_number'>Total Inactive Bus</p>
                            </div>
                        </Col>
                    </Row>
                    <div className='bordered_data_table'><AddVehicleDataTable /></div>
                </Card.Body>
            </Card>
        </>
    );
}
