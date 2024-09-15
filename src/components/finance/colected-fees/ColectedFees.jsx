import React from 'react'
import { Col, Row } from 'react-bootstrap'
import FeesCollection from './FeesGraph'
import FeesCollectedDataTabel from './FeesCollectedData'

export default function CollectedFees() {
    return (
        <>
            <Row>
                <FeesCollection />
                <br />
                <br />
                <br />
                <FeesCollectedDataTabel />
            </Row>
        </>
    )
}