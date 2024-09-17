import React, { useState } from 'react';
import { Modal, Button, Col, Row } from 'react-bootstrap';

export default function FeesStructure({ show, onHide }) {


    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton className='border-bottom pb-0'>
                <Modal.Title className='fw-bolder pb-0'>Class 1 Fees</Modal.Title>
            </Modal.Header>
            <Modal.Body className=' border-bottom-0'>
                <Row className='mb-2'>
                    <Col as={Col} md={6}>
                        <p className=''>Tution Fees</p>
                    </Col>
                    <Col as={Col} md={6}>
                        <p className=''>Rs. 1250</p>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col as={Col} md={6}>
                        <p className=''>Tution Fees</p>
                    </Col>
                    <Col as={Col} md={6}>
                        <p className=''>Rs. 1250</p>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col as={Col} md={6}>
                        <p className=''>Tution Fees</p>
                    </Col>
                    <Col as={Col} md={6}>
                        <p className=''>Rs. 1250</p>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col as={Col} md={6}>
                        <p className=''>Tution Fees</p>
                    </Col>
                    <Col as={Col} md={6}>
                        <p className=''>Rs. 1250</p>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col as={Col} md={6}>
                        <p className=''>Tution Fees</p>
                    </Col>
                    <Col as={Col} md={6}>
                        <p className=''>Rs. 1250</p>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col as={Col} md={6}>
                        <p className=''>Tution Fees</p>
                    </Col>
                    <Col as={Col} md={6}>
                        <p className=''>Rs. 1250</p>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col as={Col} md={6}>
                        <p className=''>Tution Fees</p>
                    </Col>
                    <Col as={Col} md={6}>
                        <p className=''>Rs. 1250</p>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer className='border-top-0 justify-content-between'>

                <p>  Total : Rs.25000</p>


                <Button>Update</Button>

            </Modal.Footer>
        </Modal >
    );
}