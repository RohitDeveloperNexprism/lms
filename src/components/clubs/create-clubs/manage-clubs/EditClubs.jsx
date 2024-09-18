import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'
import Select from 'react-select'

export default function EditClubs({ show, onHide }) {
    const options = [
        { value: 'rohit', label: 'rohit' },
        { value: 'rohit1', label: 'rohit1' },
        { value: 'rohit2', label: 'rohit2' },
        { value: 'rohit3', label: 'rohit3' },
        { value: 'rohit4', label: 'rohit4' },
    ];

    return (
        <>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>
                        Edit
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row >
                            <Col as={Col} xs={12} md={6}>
                                <Form.Label>Club Name</Form.Label>
                            </Col>
                            <Col as={Col} xs={12} md={6}>
                                <Form.Control
                                    name='club_name'
                                />
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col as={Col} xs={12} md={6}>
                                <Form.Label>Description</Form.Label>
                            </Col>
                            <Col as={Col} xs={12} md={6}>
                                <textarea
                                    name='club_name'
                                    className='border-new-primary  rounded-3'
                                    rows={5}
                                    style={{
                                        width: '100%'
                                    }}
                                />
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col xs={12} md={6}>
                                <Form.Label>Select Member</Form.Label>
                            </Col>
                            <Col xs={12} md={6}>
                                <Select
                                    isMulti
                                    options={options}
                                    className=''
                                />
                            </Col>
                        </Row>
                        <Row className='mt-5'>
                            <Col xs={12} md={6}>
                                <p>Admin Name</p>
                            </Col>
                            <Col xs={12} md={6}>
                                <p className='fw-bolder'>Jayesh Sharma</p>
                            </Col>
                        </Row>
                        <Row className=' mt-5 justify-content-end'>
                            <Button onClick={() => onHide()} className="accordian-rounded-radious w-auto px-6">Update</Button>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}