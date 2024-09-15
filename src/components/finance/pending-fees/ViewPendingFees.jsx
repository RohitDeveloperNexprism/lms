import React, { useState } from 'react';
import { Modal, Button, Row, Col, Table, Form } from 'react-bootstrap';

export default function ViewPendingFees({ show, onHide }) {
    const [paymentMode, setPaymentMode] = useState('Online');
    const [transactionId, setTransactionId] = useState('');
    const [paymentDate, setPaymentDate] = useState('');
    const [receipt, setReceipt] = useState(null);

    const handlePayment = () => {
        // Implement payment logic here
        console.log('Payment processed');
        onHide();
    };

    return (
        <Modal show={show} onHide={onHide} size="lg">
            <Modal.Header closeButton className='border-bottom-0'>
                <Modal.Title className='fw-bolder'>Student Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mb-3">
                    <Col md={6} className='border-right'>
                        <p><strong>Student Name:</strong> Rohit Joshi</p>
                        <p><strong>DOB:</strong> 09-07-2003</p>
                        <p><strong>Class:</strong> 10th</p>
                        <p><strong>Section:</strong> A</p>
                        <p><strong>Father's Name:</strong> Bhuwan Chandra Joshi</p>
                        <p><strong>Contact Number:</strong> 8279834994</p>
                    </Col>
                    <Col md={6}>
                        <p><strong>Total Amount:</strong> ₹11000</p>
                        <p><strong>Paid Amount:</strong> ₹7000</p>
                        <p><strong>Pending Amount:</strong> ₹4000</p>
                    </Col>
                </Row>

                <Table striped bordered hover className="mb-4 rounded-table">
                    <thead className="bg-primary text-white">
                        <tr>
                            <th className="top-left-radius">S.NO</th>
                            <th>Particulars</th>
                            <th className="top-right-radius">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Transport Fees</td>
                            <td>₹ 1100</td>
                        </tr>
                    </tbody>
                </Table>


                <Form>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="paymentMode">
                                <Form.Label>Mode of Payment</Form.Label>
                                <Form.Select
                                    value={paymentMode}
                                    onChange={(e) => setPaymentMode(e.target.value)}
                                >
                                    <option>Online</option>
                                    <option>Cash</option>
                                    <option>Cheque</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="transactionId">
                                <Form.Label>Transaction ID</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={transactionId}
                                    onChange={(e) => setTransactionId(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col md={6}>
                            <Form.Group controlId="paymentDate">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    value={paymentDate}
                                    onChange={(e) => setPaymentDate(e.target.value)}
                                />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group controlId="receipt">
                                <Form.Label>Upload Receipt</Form.Label>
                                <Form.Control
                                    type="file"
                                    onChange={(e) => setReceipt(e.target.files[0])}
                                />
                                <Form.Text className="text-muted">
                                    (JPG/JPEG/PNG are allowed for upload)
                                </Form.Text>
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="" className='download-button text-white' onClick={handlePayment}>
                    Paid
                </Button>
            </Modal.Footer>
        </Modal>
    );
}