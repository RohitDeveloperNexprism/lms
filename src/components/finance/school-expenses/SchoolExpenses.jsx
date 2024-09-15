import React from 'react'
import { Col, Row } from 'react-bootstrap'
import SchoolExpensesDataTabel from '../../../commondata/schoolExpensesData'

export default function SchoolExpenses() {
    return (
        <>
            <Row>
                <Col>
                    <SchoolExpensesDataTabel />
                </Col>
            </Row>
        </>
    )
}