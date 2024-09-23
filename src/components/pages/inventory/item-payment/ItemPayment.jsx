import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import AssignPassengerDataTable from '../../../../commondata/transport/assign-passenger';
import SupplierDataTable from '../../../../commondata/inventory/supplier';
import PaymentDataTable from '../../../../commondata/inventory/payment';

export default function ItemPayment() {

    return (
        <>
            <Card className='mt-3'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Payment Details</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='bordered_data_table pt-0'>
                    <Form className=' mb-6'>
                        <Row>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group >
                                    <Form.Label>Item Name</Form.Label>
                                    <Form.Select>
                                        <option value="">Select Item </option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                    </Form.Select>

                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group >
                                    <Form.Label>Item Category</Form.Label>
                                    <Form.Select>
                                        <option value="">Select Item Category</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group >
                                    <Form.Label>Store Name</Form.Label>
                                    <Form.Select>
                                        <option value="">Select Store</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group >
                                    <Form.Label>Supplier Company Name</Form.Label>
                                    <Form.Select>
                                        <option value="">Select Supplier</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group >
                                    <Form.Label>Payment Method </Form.Label>
                                    <Form.Select>
                                        <option value="">Select Payment Method</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                        <option value="option">Option</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group >
                                    <Form.Label>Reference No.</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={4} lg={4}>
                                <Form.Group >
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                            <Col sm={6} md={8} lg={8}>
                                <Form.Group >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="mt-4 text-right">
                            <Button variant="primary" type="submit" className='px-6'>Save</Button>
                        </div>
                    </Form>


                    <PaymentDataTable />
                    <Row className='mt-6'>
                        <Col sm={8} md={8} lg={8}></Col>
                        <Col sm={3} md={3} lg={3}>
                            <Form.Group >
                                <div className='d-flex gap-3'>
                                    <Form.Label className='h4'>Total</Form.Label>
                                    <Form.Control type="text" className='text-center' placeholder='00.00' />
                                </div>
                            </Form.Group>
                        </Col>
                        <Col sm={1} md={1} lg={1}></Col>
                    </Row>
                    <Row className='mt-6'>
                        <Col sm={6} md={4} lg={4} className='align-content-center'>
                            <Form.Group >
                                <Form.Check
                                    type="checkbox"
                                    label="Full Paid"
                                />
                            </Form.Group>
                        </Col>
                        <Col sm={6} md={4} lg={4}>
                            <Form.Group >
                                <Form.Label>Total Paid</Form.Label>
                                <Form.Control type="text" placeholder='00.00' />
                            </Form.Group>
                        </Col>
                        <Col sm={6} md={4} lg={4}>
                            <Form.Group >
                                <Form.Label>Total Due</Form.Label>
                                <Form.Control type="text" placeholder='00.00' />
                            </Form.Group>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    );
}
