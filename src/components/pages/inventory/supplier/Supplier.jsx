import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import AssignPassengerDataTable from '../../../../commondata/transport/assign-passenger';
import SupplierDataTable from '../../../../commondata/inventory/supplier';

export default function Supplier() {

    return (
        <>
            <Card className='mt-3'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Add Supplier</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <Form className='mb-6'>
                        <Row>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group controlId="staffNo">
                                    <Form.Label>Company Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group controlId="role">
                                    <Form.Label>Company Address</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group controlId="department">
                                    <Form.Label>Supplier Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group controlId="designation">
                                    <Form.Label>Supplier Contact No.</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group controlId="designation">
                                    <Form.Label>Supplier Email</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group controlId="designation">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-4 text-right">
                            <Button variant="primary" type="submit" className='px-6'>Save</Button>
                        </div>
                    </Form>


                    <SupplierDataTable />
                </Card.Body>
            </Card>
        </>
    );
}
