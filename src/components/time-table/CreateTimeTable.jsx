import React, { useRef, useState } from 'react'
import { Button, Card, Col, Form, Row, Table } from 'react-bootstrap';

export default function CreateTimeTable() {

    const [examDetails, setExamDetails] = useState({
        term: '',
        class: '',
        section: ''
    });
    const fileInputRef = useRef(null);

    const [examRows, setExamRows] = useState([
        { subject: '', class: '', section: '', teacher: '', date: '', startTime: '', endTime: '', roomNumber: '' }
    ]);

    const handleExamDetailsChange = (e) => {
        setExamDetails({ ...examDetails, [e.target.name]: e.target.value });
    };

    const handleExamRowChange = (index, field, value) => {
        const updatedRows = [...examRows];
        updatedRows[index][field] = value;
        setExamRows(updatedRows);
    };

    const addExamRow = () => {
        setExamRows([...examRows, { subject: '', class: '', section: '', teacher: '', date: '', startTime: '', endTime: '', roomNumber: '' }]);
    };

    const removeExamRow = (index) => {
        const updatedRows = examRows.filter((_, i) => i !== index);
        setExamRows(updatedRows);
    };




    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            console.log("Selected file:", file);
        }
    };


    return (
        <>
            <Row>
                <Col>
                    <Card className="px-2 bg-white rounded-lg shadow-md pb-3">
                        <Card.Header className='border-bottom-0 px-0'>
                            <Col as={Col} md={6}>
                                <Card.Title className="text-2xl font-bold mb-6">Create Time Table</Card.Title>
                            </Col>
                            <Col as={Col} md={6}>
                                <Form.Control
                                    name=''
                                    placeholder='Search by Id, Name and Section'
                                    className='w-auto accordian-rounded-radious'
                                />
                            </Col>
                        </Card.Header>

                        <Row className='mb-3'>
                            <Col as={Col} xs={12} md={4} className='mb-3'>
                                <Form.Label>Search Term</Form.Label>
                                <Form.Select name="term" value={examDetails.term} onChange={handleExamDetailsChange} className='border-primary rounded-3'>
                                    <option value="">Select Term</option>
                                    <option value="First">First Term</option>
                                    <option value="Second">Second Term</option>
                                    <option value="Third">Third Term</option>
                                </Form.Select>
                            </Col>
                            <Col as={Col} xs={12} md={4} className='mb-3'>
                                <Form.Label>Class</Form.Label>
                                <Form.Select name="class" value={examDetails.class} onChange={handleExamDetailsChange} className='border-primary rounded-3'>
                                    <option value="">Class</option>
                                    <option value="1">Class 1</option>
                                    <option value="2">Class 2</option>
                                    <option value="3">Class 3</option>
                                </Form.Select>
                            </Col>
                            <Col as={Col} xs={12} md={4} className='mb-3'>
                                <Form.Label>Section</Form.Label>
                                <Form.Select name="section" value={examDetails.section} onChange={handleExamDetailsChange} className='border-primary rounded-3'>
                                    <option value="">Section</option>
                                    <option value="A">Section A</option>
                                    <option value="B">Section B</option>
                                    <option value="C">Section C</option>
                                </Form.Select>
                            </Col>
                        </Row>
                        <Row className='justify-content-end px-3'>
                            <Button className="w-auto">Create</Button>
                        </Row>

                        <p className="fw-semibold">
                            Exam: {examDetails.term} Term, Class {examDetails.class}, Section {examDetails.section}
                        </p>

                        <div className='table-responsive border-radious-20'>
                            <Table striped hover className='custom-table border-0'>
                                <thead className='bg-primary text-white'>
                                    <tr>
                                        <th>Period</th>
                                        <th>Monday</th>
                                        <th>Tuesday</th>
                                        <th>Wednesday</th>
                                        <th>Thrusday</th>
                                        <th>Friday</th>
                                        <th>Saturday</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {examRows.map((row, index) => (
                                        <tr key={index} className='border-bottom'>

                                            <td>
                                                <Form.Control type="text" value={row.date} onChange={(e) => handleExamRowChange(index, 'date', e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="text" value={row.startTime} onChange={(e) => handleExamRowChange(index, 'startTime', e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="text" value={row.endTime} onChange={(e) => handleExamRowChange(index, 'endTime', e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="text" value={row.roomNumber} onChange={(e) => handleExamRowChange(index, 'roomNumber', e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="text" value={row.roomNumber} onChange={(e) => handleExamRowChange(index, 'roomNumber', e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="text" value={row.roomNumber} onChange={(e) => handleExamRowChange(index, 'roomNumber', e.target.value)} />
                                            </td>
                                            <td>
                                                <Form.Control type="text" value={row.roomNumber} onChange={(e) => handleExamRowChange(index, 'roomNumber', e.target.value)} />
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </div>
                        <div className="mt-4 d-flex justify-content-between">
                            <Button onClick={addExamRow}>Add Row</Button>
                            <Button>Save</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}