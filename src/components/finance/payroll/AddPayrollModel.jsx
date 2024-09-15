import React from 'react'
import { Button, Col, Form, Modal, Row, Table } from 'react-bootstrap'

export default function AddPayrollModel({ show, onHide }) {

    const closeButton = () => {
        onHide()
    }
    return (
        <>
            <Modal show={show} onHide={onHide} size="lg">
                <Modal.Header closeButton className='border-bottom-0'>
                    <Modal.Title className='fw-bolder'>payroll Details</Modal.Title>
                </Modal.Header>
                <Modal.Body className='border-bottom-0'>
                    <Row>
                        <Col as={Col} xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Select Role</Form.Label>
                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="">One</option>
                                    <option value="">Two</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col as={Col} xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Select member</Form.Label>
                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="">One</option>
                                    <option value="">Two</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col as={Col} xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Month</Form.Label>
                                <Form.Select>
                                    <option value="">Select</option>
                                    <option value="">One</option>
                                    <option value="">Two</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className='my-6'>
                        <h2 className='border-bottom-2'>Payroll Summery</h2>
                        <br />
                        <br />
                        <p><span className='fw-bolder'>Teacher Name</span> : Yash Trapathi</p>
                        <p><span className='fw-bolder'>Contact Number</span> : 55555555555</p>
                        <p><span className='fw-bolder'>Email</span> : one@gmail.com</p>
                    </Row>
                    <Row>
                        <Col as={Col} xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Basic Salary</Form.Label>
                                <Form.Control
                                    name='basic-salary'
                                />
                            </Form.Group>
                        </Col>
                        <Col as={Col} xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Deduction</Form.Label>
                                <Form.Control
                                    name='deduction'
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col as={Col} xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Account No</Form.Label>
                                <Form.Control
                                    name='basic-salary'
                                />
                            </Form.Group>
                        </Col>
                        <Col as={Col} xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Branch Name</Form.Label>
                                <Form.Control
                                    name='deduction'
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col as={Col} xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Mode of Payment</Form.Label>
                                <Form.Control
                                    name='basic-salary'
                                />
                            </Form.Group>
                        </Col>
                        <Col as={Col} xs={12} md={6}>
                            <Form.Group>
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type='date'
                                    name='deduction'
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer className='border-top-0 justify-content-between'>
                    <p className='fw-bolder'>Total: 24,500 Rs</p>
                    <Button variant="" className='btn-dark text-white' onClick={closeButton}>
                        Paid
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}