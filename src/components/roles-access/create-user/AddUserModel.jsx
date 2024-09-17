import React from 'react'
import { Button, Col, Form, Modal, Row } from 'react-bootstrap'

export default function AddUserModel({ show, onHide }) {
    return (
        <>
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>New User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row className='mt-3'>
                            <Col as={Col} md={6}>
                                <Form.Label>New User Name</Form.Label>
                            </Col>
                            <Col as={Col} md={6}>
                                <Form.Control
                                    name='user_name'
                                />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col as={Col} md={6}>
                                <Form.Label>User Role</Form.Label>
                            </Col>
                            <Col as={Col} md={6}>
                                <Form.Select
                                    name='user_name'
                                >
                                    <option value="">Select</option>
                                    <option value="">Admin</option>
                                    <option value="">Student</option>
                                    <option value="">User</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col as={Col} md={6}>
                                <Form.Label>Email</Form.Label>
                            </Col>
                            <Col as={Col} md={6}>
                                <Form.Control
                                    name='email'
                                />
                            </Col>
                        </Row>
                        <Row className='mt-3'>
                            <Col as={Col} md={6}>
                                <Form.Label>Password</Form.Label>
                            </Col>
                            <Col as={Col} md={6}>
                                <Form.Control
                                    name='password'
                                />
                            </Col>
                        </Row>
                        <Row className='justify-content-end mt-4'>
                            <Button onClick={onHide} className='w-auto'>Create</Button>
                        </Row>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    )
}