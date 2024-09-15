import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/slice/allModalSlice';
import { Dropimg } from '../../../../commondata/form';

const AddFood = () => {
    const { isOpen, data } = useSelector((state) => state.allCommonModal)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        category: '',
        sub_category: '',
        food_item: '',
        price: '',
        food_image: '',
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
                    <Form.Group controlId="category" className="mb-3 input_wrapper">
                        <Form.Label>Sub Category</Form.Label>
                        <Form.Select
                            name="sub_category"
                            value={formData.sub_category}
                            onChange={handleChange}
                        >
                            <option>Select Category</option>
                            <option value="standard">Standard</option>
                            <option value="deluxe">Deluxe</option>
                            <option value="suite">Suite</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group controlId="roomNumber" className="mb-3 input_wrapper">
                        <Form.Label>Food Item</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="food_item"
                            value={formData.food_item}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group controlId="roomNumber" className="mb-3 input_wrapper">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder=""
                            name="price"
                            value={formData.price}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group controlId="roomCharges" className="mb-3 input_wrapper food_img_upload">
                        <Form.Label>Food Image</Form.Label>
                        <Dropimg type="file" className="dropify" />
                    </Form.Group>

                    <Button variant="primary" type="submit" className="d-flex ms-auto px-5">
                        Add Food
                    </Button>
                </Form>
            </Modal.Body>
        </Modal>
    );
};

export default AddFood;
