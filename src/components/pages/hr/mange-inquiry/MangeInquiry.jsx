import React from 'react'
import { Row, Col, Card, Dropdown } from "react-bootstrap";
import MangeInquiryDataTable from '../../../../commondata/hr/manage-enquiry';


export default function MangeInquiry() {
    return (
        <>
            <Card className='mt-0 pt-0'>
                <Card.Header className="card-header border-bottom-0">
                    <div className='d-flex gap-3 w-100 justify-content-end'>
                        <div className="report_card hr_inqury_dropdown_card">
                            <Dropdown className="btn-group mb-2">
                                <Dropdown.Toggle type="button" className="btn dropdown-toggle hr_inqury_dropdown report_card_dropdown" variant="" title="Action" >Select Date Rage</Dropdown.Toggle>
                                <Dropdown.Menu className="w-100">
                                    <Dropdown.Item className='d-flex align-content-center justify-content-center gap-4'>
                                        New
                                    </Dropdown.Item>
                                    <Dropdown.Item className='d-flex align-content-center justify-content-center gap-4'>
                                        In Progress
                                    </Dropdown.Item>
                                    <Dropdown.Item className='d-flex align-content-center justify-content-center gap-4'>
                                        Resolved
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="report_card hr_inqury_dropdown_card">
                            <Dropdown className="btn-group mb-2">
                                <Dropdown.Toggle type="button" className="btn dropdown-toggle hr_inqury_dropdown report_card_dropdown" variant="" title="Action" >Inquiry Type</Dropdown.Toggle>
                                <Dropdown.Menu className="w-100">
                                    <Dropdown.Item className='d-flex align-content-center justify-content-center gap-4'>
                                        New
                                    </Dropdown.Item>
                                    <Dropdown.Item className='d-flex align-content-center justify-content-center gap-4'>
                                        In Progress
                                    </Dropdown.Item>
                                    <Dropdown.Item className='d-flex align-content-center justify-content-center gap-4'>
                                        Resolved
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </Card.Header>
                <Card.Body className='pt-0 bordered_data_table'>
                    <MangeInquiryDataTable />
                </Card.Body>
            </Card>
        </>
    )
}
