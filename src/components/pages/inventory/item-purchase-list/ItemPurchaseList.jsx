import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import ItemPurchaseListDataTable from '../../../../commondata/inventory/item-purchase-list';

export default function ItemPurchaseList() {

    return (
        <>
            <Card className='mt-3'>
                <Card.Header className="card-header border-bottom-0">
                    {/* <Row className='w-100'>
                        <Col md={6}>
                            <h3 className="card-title">Add Supplier</h3>
                        </Col>
                    </Row> */}
                </Card.Header>
                <Card.Body className='pt-0'>
                    <ItemPurchaseListDataTable />
                </Card.Body>
            </Card>
        </>
    );
}
