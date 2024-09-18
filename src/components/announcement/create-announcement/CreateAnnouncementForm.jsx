import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { options_for_sunEditor } from "../../../commondata/formEditorOptions";
import 'suneditor/dist/css/suneditor.min.css';
import SunEditor from "suneditor-react";

export default function CreateAnnouncementForm() {
    return (
        <Row>
            <Col>
                <Card className='bg-announcementp-card pb-5 px-3'>
                    <Form>
                        <Row >
                            <Col as={Col} md={6}>
                                <Form.Group>
                                    <Form.Label>
                                        Title
                                    </Form.Label>
                                    <Form.Control
                                        name='title'
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col as={Col} md={6}>
                                <Form.Group>
                                    <Form.Label>
                                        Type
                                    </Form.Label>
                                    <Form.Select
                                        name='type'
                                    >
                                        <option value="">Select</option>
                                        <option value="">one</option>
                                        <option value="one">two</option>
                                    </Form.Select>
                                    <p className='text-center'>Send a notice to all of your students or specific course students.</p>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            <Col as={Col} md={12}>
                                <Form.Group>
                                    <Form.Label>
                                        Message
                                    </Form.Label>
                                    <SunEditor
                                        name="name"
                                        setOptions={options_for_sunEditor}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row className='justify-content-end px-3 mt-5'>
                            <Button className='w-auto'>Send Notice</Button>
                        </Row>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

