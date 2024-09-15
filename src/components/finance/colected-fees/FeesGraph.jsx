import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', value: 0 },
    { name: 'Feb', value: 1000 },
    { name: 'Mar', value: 500 },
    { name: 'Apr', value: 2000 },
    { name: 'May', value: 3000 },
    { name: 'Jun', value: 4000 },
    { name: 'Jul', value: 3500 },
    { name: 'Aug', value: 5000 },
    { name: 'Sep', value: 2000 },
    { name: 'Oct', value: 4000 },
    { name: 'Nov', value: 5000 },
    { name: 'Dec', value: 4500 },
];

export default function FeesCollection() {
    return (
        <Container fluid className="p-4">
            <Row>
                <Col md={7}>
                    <Card className="shadow-sm">
                        <Card.Body>
                            <Card.Title className="d-flex justify-content-between align-items-center mb-4">
                                <span>Fees Collection</span>
                                <span style={{ color: '#6c757d' }}>•••</span>
                            </Card.Title>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={data}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                                    <YAxis axisLine={false} tickLine={false} />
                                    <Tooltip
                                        content={({ active, payload }) => {
                                            if (active && payload && payload.length) {
                                                return (
                                                    <div className="custom-tooltip" style={{ backgroundColor: '#fff', padding: '5px', border: '1px solid #ccc' }}>
                                                        <p className="label">{`₹${payload[0].value}`}</p>
                                                        <p className="intro">{`Aug 10, 2023`}</p>
                                                    </div>
                                                );
                                            }
                                            return null;
                                        }}
                                    />
                                    <Line type="monotone" dataKey="value" stroke="#ffd700" strokeWidth={2} dot={false} activeDot={{ r: 8 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={5}>
                    <Row>
                        <Col xs={12} md={6} className="mb-3">
                            <Card className="shadow-sm fees-card-bg-color">
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₹126,450</Card.Title>
                                    <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d' }}>Total Collected</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Card className="shadow-sm fees-card-bg-color">
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₹67,200</Card.Title>
                                    <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d' }}>Total Tuition</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Card className="shadow-sm fees-card-bg-color">
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₹6,450</Card.Title>
                                    <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d' }}>Total Activities</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={6} className="mb-3">
                            <Card className="shadow-sm fees-card-bg-color">
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>₹6,150</Card.Title>
                                    <Card.Text style={{ fontSize: '0.9rem', color: '#6c757d' }}>Total Miscellaneous</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};