import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import RoomDataTable from '../../../commondata/room/room';

export default function RoomList() {
    return (
        <>
            <Card>
                <Card.Body>
                    <Row>
                        <Col md={4} className=' mb-2 mb-md-0'>
                            <div className='room_card room_card_first'>
                                <h4 className='semibold h3 mb-2'>500</h4>
                                <p className='room_number'>Total Rooms</p>
                            </div>
                        </Col>
                        <Col md={4} className=' mb-2 mb-md-0'>
                            <div className='room_card room_card_second'>
                                <h4 className='semibold h3 mb-2'>150</h4>
                                <p className='room_number'>Available Rooms</p>
                            </div>
                        </Col>
                        <Col md={4} className=' mb-2 mb-md-0' >
                            <div className='room_card room_card_third'>
                                <h4 className='semibold h3 mb-2'>350</h4>
                                <p className='room_number'>Occupied  Rooms</p>
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    {/* <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Room  list</h3>
                        </Col>
                    </Row> */}
                </Card.Header>
                <Card.Body className='pt-0'>
                    <RoomDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
