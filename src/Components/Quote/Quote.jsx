// Code for React component in frontend
// Filename - frontend/src/components/Quote.js

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Quote.css";
import toast, { Toaster } from "react-hot-toast";
import { useEffect } from "react";

function Quote() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      handleShow();
    }, 5000); // 5000ms = 5s

    // Clean up function
    return () => clearTimeout(timer);
  }, []); // Empty dependency array means this effect runs once on mount


  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // Check if name and phone number are provided
    if (!name || !phone) {
      toast.error('Name and phone number are required.');
      return;
    }
  
    // Check if phone number is valid
    if (phone.length !== 10) {
      toast.error('Phone number should have 10 digits.');
      return;
    }
  
    // Generate a unique, dummy email if the email field is empty
    const finalEmail = email || `dummy-${Date.now()}@example.com`;
  
    // If all validations pass, submit the form
    toast.promise(
      fetch(import.meta.env.VITE_SERVER_URL, {
        method: 'post',
        body: JSON.stringify({ name, phone, email: finalEmail }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((result) => result.json())
        .then((data) => {
          console.log(data);
          if (data) {
            setEmail('');
            setName('');
            setPhone('');
            handleClose();
          }
          return data;
        }),
      {
        loading: 'Submitting, please wait!',
        success: 'Success! We will contact you as soon as possible.',
        error: 'Something went wrong. Please try again later.',
      }
    );
  };
  

  return (
    <>
      <Toaster />
      <Button variant="primary" onClick={handleShow}>
        Get a free quote!
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Get a free Quote!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="text-white">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Form.Label className="text-white mt-2">Phone Number</Form.Label>
              <Form.Control
                type="number"
                placeholder="+91 12345 67899"
                autoFocus
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Form.Label className="text-white mt-2">Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="bg-dark">
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" onClick={handleOnSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Quote;