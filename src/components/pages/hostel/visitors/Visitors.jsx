import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import VisitorDataTable from '../../../../commondata/room/visitor'
import { Link, useLocation, useParams } from 'react-router-dom';
import { getVisitorAddRoutePage, getVisitorRoutePage } from '../../../../routes/routes';

export default function Visitors() {
    const location = useLocation();
    const pathName = location.pathname;
    // const pathName = location.state;
    const { id } = useParams()
    // console.log('location', location.pathname);

    return (
        <>
            <div className='my-5 align-items-center student_tab gap-3'>
                <h3 className={`studen_details_tab ${pathName === '/visitors/' ? 'active' : ''}`}><Link to={getVisitorRoutePage()}>View Visitor</Link> </h3>
                <h3 className={`studen_details_tab ${pathName === 'change_profile_password' ? 'active' : ''}`}><Link to={getVisitorAddRoutePage()}>Visitor Add</Link></h3>
            </div>
            <Card>
                <Card.Header className="card-header border-bottom-0">
                    {/* <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Visitors List</h3>
                        </Col>
                    </Row> */}
                </Card.Header>
                <Card.Body className='pt-0'>
                    <VisitorDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
