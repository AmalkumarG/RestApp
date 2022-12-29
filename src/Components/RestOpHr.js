import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import ListGroup from 'react-bootstrap/ListGroup';

function RestOpHr({operate}) {
    console.log("operate",operate);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    < >{
        <>
            
    <Button className='me-4' variant="primary" onClick={handleShow}>
     operating_hours
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>operating hours</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <ListGroup>
      <ListGroup.Item>Monday : {operate.Monday}</ListGroup.Item>
      <ListGroup.Item>Tuesday : {operate.Tuesday}</ListGroup.Item>
      <ListGroup.Item>Friday : {operate.Wednesday}</ListGroup.Item>
      <ListGroup.Item>Wednesday{operate.Thursday}</ListGroup.Item>
      <ListGroup.Item>Saturday : {operate.Friday}</ListGroup.Item>
      <ListGroup.Item>Sunday : {operate.Saturday}</ListGroup.Item>
    </ListGroup>
      </Modal.Body>

    </Modal>
        </>
    }
  </>
  )
}

export default RestOpHr