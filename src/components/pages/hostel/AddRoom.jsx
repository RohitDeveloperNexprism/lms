import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { closeModal } from '../../../redux/slice/allModalSlice';
import { useDispatch, useSelector } from 'react-redux';

const AddRoom = () => {
    const { isOpen, data } = useSelector((state) => state.allCommonModal)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        roomNumber: '',
        category: '',
        description: '',
        roomCharges: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log(formData);
    };

    return (
        <Modal show={isOpen} size='md'>
            <Modal.Header className=" mx-2">
                <Modal.Title as="h4" className="fw-semibold lh-1 my-auto text-center"> New Rooms </Modal.Title>
            </Modal.Header>
            <Button onClick={() => dispatch(closeModal())} className="btn-close position-absolute end-0 p-3" variant="" ><i className="fe fe-x fw-bolder"></i></Button>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className='add_room_form'>
                    <Form.Group controlId="roomNumber" className="mb-3 input_wrapper">
                        <Form.Label>Room Number</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="eg: 112"
                            name="roomNumber"
                            value={formData.roomNumber}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="category" className="mb-3 input_wrapper">
                        <Form.Label>Category</Form.Label>
                        <Form.Select
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                        >
                            <option>Select Category</option>
                            <option value="standard">Standard</option>
                            <option value="deluxe">Deluxe</option>
                            <option value="suite">Suite</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group controlId="description" className="mb-3 input_wrapper">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="roomCharges" className="mb-3 input_wrapper">
                        <Form.Label>Room Charges</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="eg: 1250"
                            name="roomCharges"
                            value={formData.roomCharges}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="d-flex ms-auto px-5">
                        Add Room
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddRoom;
