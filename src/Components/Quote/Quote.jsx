// Code for React component in frontend
// Filename - frontend/src/components/Quote.js

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "./Quote.css";
import toast, { Toaster } from "react-hot-toast";

function Quote() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    try {
      // use the same URL as your server.js file
      console.log(import.meta.env.VITE_SERVER_URL);
      const result = await fetch(import.meta.env.VITE_SERVER_URL, {
        method: "post",
        body: JSON.stringify({ name, phone, email }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await result.json();
      console.log(data);
      if (data) {
        toast.success("Success! We will contact you as soon as possible.");
        setEmail("");
        setName("");
        setPhone("");
        handleClose();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.");
    }
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