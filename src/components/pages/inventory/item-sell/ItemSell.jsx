import React from 'react';
import { Button, Form, Row, Col, Card } from "react-bootstrap";
import ItemPurchaseListDataTable from '../../../../commondata/inventory/item-purchase-list';
import ItemSellListDataTable from '../../../../commondata/inventory/item-sell';

export default function ItemSell() {

    return (
        <>
            <Card className='mt-3'>
                <Card.Header className="card-header border-bottom-0">
                    <Row className='w-100'>
                        <Col md={6}>
                            {/* <h3 className="card-title">Add Supplier</h3> */}
                        </Col>
                        <Col md={6} className='d-flex justify-content-end'>
                            <Button><i className='fa fa-plus'></i> &nbsp;New Item Sell</Button>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0'>
                    <ItemSellListDataTable />
                </Card.Body>
            </Card>
        </>
    );
}
