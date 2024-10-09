import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/messages", {
        email,
        content: message,
      });
      console.log("Message sent:", response.data);
      setEmail("");
      setMessage("");

      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
    } catch (error) {
      console.error(
        "Error sending message:",
        error.response ? error.response.data : error.message
      );

      toast.error("Failed to send message!", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <Container className="mb-5">
      <ToastContainer />
      <div className="text-center m-5">
        <h2 className="fs-2">Contact Us</h2>
        <p className="fs-5">Have Questions? Contact Us Today</p>
      </div>
      <Card className="mb-3 bg-light" data-aos="fade-right">
        <Row noGutters>
          <Col>
            <Card.Body>
              <Card.Title>Contact Us!</Card.Title>
              <Card.Text style={{ fontWeight: "600" }}>
                We'd Love to Hear from You
              </Card.Text>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Form.Text className="text-danger">
                    <small>We'll never share your email with anyone else.</small>
                  </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="warning" type="submit">
                  Send
                </Button>
              </Form>
            </Card.Body>
          </Col>
          <Col>
            <Card.Img
              variant="bottom"
              src="../images/10.png"
              alt="..."
              className="h-100"
            />
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Contact;
