import React from 'react'
import { Button, Card, Col, Form, Row } from 'react-bootstrap'
import { Link, useLocation, useParams } from 'react-router-dom';
import { getVisitorAddRoutePage, getVisitorRoutePage } from '../../../../routes/routes';

export default function VisitorAdd() {
    const location = useLocation();
    const pathName = location.pathname;
    // const pathName = location.state;
    const { id } = useParams()
    // console.log('location', location.pathname);

    return (
        <>
            <div className='my-5 align-items-center student_tab gap-3'>
                <h3 className={`studen_details_tab ${pathName === '/visitors/' ? 'active' : ''}`}><Link to={getVisitorRoutePage()}>View Visitor</Link> </h3>
                <h3 className={`studen_details_tab ${pathName === '/visitors-add/' ? 'active' : ''}`}><Link to={getVisitorAddRoutePage()}>Visitor Add</Link></h3>
            </div>
            <Card>
                <Card.Header className="card-header border-bottom-0 pb-0">
                    <Row className='w-100'>
                        <Col md={7} lg={8} xl={9}>
                            <h3 className="card-title mb-4">Visitors List</h3>
                        </Col>
                        <Col md={5} lg={4} xl={3} className="search_bar">
                            <div className='d-flex flex-wrap flex-md-nowrap gap-3 '>
                                <div className='search_bar_wrapper w-100'>
                                    <input
                                        type="text"
                                        placeholder="Search"
                                        className="form-control search_input"
                                    // value={filterText}
                                    // onChange={(e) => setFilterText(e.target.value)}
                                    />
                                    <div className='search_icon'><i className='fa fa-search'></i></div>
                                    {/* <Button type="button" className="btn btn-icon search_btn"> <i className="fa fa-sliders text-black"></i> Filters</Button> */}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Card.Header>
                <Card.Body className='pt-0 pb-6'>
                    <Form className='visitor_add_form'>
                        <Row>
                            <Col md={6}>
                                <Form.Group className="mb-3" controlId="firstName">
                                    <Form.Label>Name <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="xyz" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="lastName">
                                    <Form.Label>Email <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="email" placeholder="xyz" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="phone">
                                    <Form.Label>Phone <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="xyz" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="toMeet">
                                    <Form.Label>To meet <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="xyz" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="comingFrom">
                                    <Form.Label>Coming From <span className="required_icon">*</span></Form.Label>
                                    <Form.Control type="text" placeholder="xyz" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="comingFrom">
                                    <Form.Label>Representing <span className="required_icon">*</span></Form.Label>
                                    <Form.Select>
                                        <option value="">Select</option>
                                        <option value="option1">Option 1</option>
                                        <option value="option2">Option 2</option>
                                        <option value="option3">Option 3</option>
                                    </Form.Select>
                                </Form.Group>
                                <div className='d-flex gap-2 '>
                                    <Form.Group className='mt-4'>
                                        <Button type="submit" className="create_pass_btn ms-auto px-6 rounded-lg">Create Pass</Button>
                                    </Form.Group>
                                    <Form.Group className='mt-4'>
                                        <Button type="submit" className="cancel_btn ms-auto px-6 rounded-lg">Cancel</Button>
                                    </Form.Group>
                                </div>
                            </Col>
                            <Col md={6} className='ps-md-6'>
                                <div className='ps-md-6'>
                                    <Form.Group className='mt-6'>
                                        <Button type="submit" className="btn-primary ms-auto px-6 rounded-lg w-100">Check Out </Button>
                                    </Form.Group>
                                    <Form.Group className="mb-3 mt-4" controlId="toMeet">
                                        <Form.Label>Checkout Time <span className="required_icon">*</span></Form.Label>
                                        <Form.Control type="text" placeholder="mm-hh-ss" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="comingFrom">
                                        <Form.Label>Checkout Date <span className="required_icon">*</span></Form.Label>
                                        <Form.Control type="text" placeholder="dd-mm-yy" />
                                    </Form.Group>
                                    <Form.Group className='mt-4'>
                                        <Button type="submit" className="create_pass_btn ms-auto px-6 rounded-lg">Logout</Button>
                                    </Form.Group>
                                </div>
                            </Col>
                        </Row>
                    </Form>
                </Card.Body>
            </Card>
        </>
    )
}
