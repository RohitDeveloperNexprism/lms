import React from 'react'
import { Row, Col, Card } from "react-bootstrap";
import ItemStoreDataTable from '../../../../commondata/inventory/item-store';


export default function ItemStore() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Add Store</h3>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <ItemStoreDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
