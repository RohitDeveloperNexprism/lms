import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import MessDataTable from '../../../../commondata/room/mess';

export default function Mess() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Available Food Items</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <MessDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
