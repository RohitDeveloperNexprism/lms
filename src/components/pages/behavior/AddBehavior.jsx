import { Box, Rating } from '@mui/material';
import React from 'react'
import { Row, Col, Card, Form, Button } from "react-bootstrap";
import SunEditor from 'suneditor-react';
import "suneditor/dist/css/suneditor.min.css";
import { options_for_sunEditor } from '../../../commondata/formEditorOptions';


export default function AddBehavior() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Add Behavior</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0 bordered_data_table'>
                    <Row className="search_bar">
                        <Form>
                            <div className='student_search_input_wrapper'>
                                <div className="student_search_input">
                                    <Form.Group className="mb-3" controlId="firstName">
                                        <Form.Label>Select Class</Form.Label>
                                        <Form.Control as="select">
                                            <option>option</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>

                                <div className="student_search_input">
                                    <Form.Group className="mb-3" controlId="lastName">
                                        <Form.Label>Select Section</Form.Label>
                                        <Form.Control as="select">
                                            <option>Option</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                                <div className="student_search_input">
                                    <Form.Group className="mb-3" controlId="lastName">
                                        <Form.Label>Select Student Name</Form.Label>
                                        <Form.Control as="select">
                                            <option>Option</option>
                                        </Form.Control>
                                    </Form.Group>
                                </div>
                            </div>
                        </Form>
                    </Row>
                    <Card.Body className='staff_feedback_container'>
                        {/* <div className='staff_feedback_container'> */}
                        <Row className='user_review'>
                            <Col md={4} sm={4} className='feedback_column'>
                                <h3 className="feedback_title add_poppins_font">Work efficiency</h3>
                                <Box sx={{ "& > legend": { mt: 0 } }}>
                                    <Rating name="read-only" className="feedback_rating" value={5} readOnly />
                                </Box>
                            </Col>
                            <Col md={4} sm={4} className='feedback_column'>
                                <h3 className="feedback_title add_poppins_font">Communication Skills </h3>
                                <Box sx={{ "& > legend": { mt: 0 } }}>
                                    <Rating name="read-only" className="feedback_rating" value={5} readOnly />
                                </Box>
                            </Col>
                            <Col md={4} sm={4} className='feedback_column'>
                                <h3 className="feedback_title add_poppins_font">Professionalism</h3>
                                <Box sx={{ "& > legend": { mt: 0 } }}>
                                    <Rating name="read-only" className="feedback_rating" value={4} readOnly />
                                </Box>
                            </Col>
                            <Col md={6} sm={6} className='feedback_column'>
                                <h3 className="feedback_title add_poppins_font">Punctuality & Attendance</h3>
                                <Box sx={{ "& > legend": { mt: 0 } }}>
                                    <Rating name="read-only" className="feedback_rating" value={3} readOnly />
                                </Box>
                            </Col>
                            <Col md={6} sm={6} className='feedback_column'>
                                <h3 className="feedback_title add_poppins_font">Team Collaoration</h3>
                                <Box sx={{ "& > legend": { mt: 0 } }}>
                                    <Rating name="read-only" className="feedback_rating" value={5} readOnly />
                                </Box>
                            </Col>
                        </Row>
                        <Row className='add_feedback_container'>
                            <SunEditor
                                name="add_feedback"
                                setOptions={options_for_sunEditor}
                            />
                            <Form.Group as={Col} md="12" className='custom_col mt-6 text-end'>
                                <Button type="submit" className="btn-primary send_feedback_btn ms-auto px-6 rounded-lg">Add Behavior</Button>
                            </Form.Group>
                        </Row>
                        {/* </div> */}
                    </Card.Body>
                </Card.Body>
            </Card>
        </>
    )
}
