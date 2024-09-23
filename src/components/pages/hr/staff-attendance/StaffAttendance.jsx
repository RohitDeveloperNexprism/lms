import React from 'react'
import { Row, Col, Card } from "react-bootstrap";
import StaffAttendanceDataTable from '../../../../commondata/hr/staff-attendance';


export default function StaffAttendance() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Staff Attendance </h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0 bordered_data_table'>
                    <StaffAttendanceDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
