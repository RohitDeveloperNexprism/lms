import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import PendingFeesDataTabel from '../../../commondata/pendingFeesData'

export default function PendingFees() {

    return (
        <>
            <Row>
                <Col>
                    <PendingFeesDataTabel />
                </Col>
            </Row>
        </>
    )
}
