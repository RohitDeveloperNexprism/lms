import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import RoomStudentDataTable from '../../../../commondata/room/room-student'

export default function HostelStudent() {
    return (
        <>
            <Card >
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Room Number 201</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <RoomStudentDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
