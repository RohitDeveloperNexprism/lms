import React from 'react'
import { Col, Row } from 'react-bootstrap'
import PayRollGraph from './PayRollGraph'
import PayRollDataTabel from './PayRollData'

export default function PayRoll() {
    return (
        <>
            <Row>
                <Col>
                    <PayRollGraph />
                    <br />
                    <br />
                    <br />
                    <PayRollDataTabel />
                </Col>
            </Row>
        </>
    )
}