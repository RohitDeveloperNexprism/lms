import React from 'react'
import { Row, Col, Card } from "react-bootstrap";
import ItemListDataTable from '../../../../commondata/inventory/item-list';


export default function ItemList() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Add Item</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <ItemListDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
