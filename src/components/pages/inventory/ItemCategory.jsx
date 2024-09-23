import React from 'react'
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import ItemCategoryDataTable from '../../../commondata/inventory/item-category';

export default function ItemCategory() {
    return (
        <>
            <Card>
                <Card.Body >
                    <Row >
                        <Col lg={4} md={6}>
                            <div className="pe-6">
                                <h4 className='ps-1 mb-4 card-title'>Add Category</h4>
                                <Form.Group as={Col} md="12" className=''>
                                    <Form.Label>Category Name <span className="required_icon">*</span></Form.Label>
                                    <Form.Control title="text" name="title" />
                                </Form.Group>
                                <Form.Group as={Col} md="12" className=' mt-4 mb-4'>
                                    <Button type="submit" className="btn-primary ms-auto px-6">Save</Button>
                                </Form.Group>
                            </div>
                        </Col>
                        <Col lg={8} md={6}>
                            <div className='bordered_data_table'>
                                <h4 className='ps-1 mb-4 card-title'>Item Category  List</h4>
                                <ItemCategoryDataTable />
                            </div>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </>
    )
}
