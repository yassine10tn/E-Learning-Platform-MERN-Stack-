import React, { useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export const Order = () => {
  const [formState, setFormState] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    zipCode: "",
    deliveryOption: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const [collapse, setCollapse] = useState({
    collapse1: true,
    collapse2: false,
    collapse3: false,
    collapse4: false,
  });

  const [showModal, setShowModal] = useState(false);
  const handleClose = () => {
    setShowModal(false);
    resetForm();
  };
  const handleShow = () => setShowModal(true);

  const toggleCollapse = (collapseKey) => {
    setCollapse((prevState) => ({
      ...prevState,
      [collapseKey]: !prevState[collapseKey],
    }));
  };

  const goToNextStep = (currentStep, nextStep) => {
    setCollapse((prevState) => ({
      ...prevState,
      [currentStep]: false,
      [nextStep]: true,
    }));
  };

  const resetForm = () => {
    setFormState({
      fullName: "",
      email: "",
      phoneNumber: "",
      streetAddress: "",
      city: "",
      zipCode: "",
      deliveryOption: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    });
  };

  const handleSubmitOrder = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });
  
      if (!response.ok) {
        throw new Error("Failed to place order");
      }
  
      const result = await response.json();
      console.log("Order saved:", result);
  
      // After saving the order, delete all wishlist items
      await fetch("http://localhost:8080/api/wishlist", {
        method: "DELETE",
      });
  
      handleShow();
    } catch (error) {
      console.error("Error submitting order:", error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container order-form-container py-4 mb-5">
      <br />
      {/* breadcrumb */}
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none text-dark">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="/order" className="text-decoration-none text-dark">
                CheckOut
              </a>
            </li>
          </ol>
        </nav>
      </div>

      {/* main content */}
      <div className="row mb-2">
        {/* collapsible sections with forms */}
        <div className="col-lg-6 col-md-12 w-50">
          <div className="collapse-sections" data-aos="fade-left">
            {/* personal information */}
            <Section
              title="Personal Information"
              isOpen={collapse.collapse1}
              toggle={() => toggleCollapse("collapse1")}
              content={
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    id="fullName"
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={formState.fullName}
                    onChange={(e) =>
                      setFormState({ ...formState, fullName: e.target.value })
                    }
                  />

                  <label htmlFor="email" className="mt-3">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                  />

                  <label htmlFor="phoneNumber" className="mt-3">
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    type="tel"
                    className="form-control"
                    placeholder="Enter your phone number"
                    value={formState.phoneNumber}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        phoneNumber: e.target.value,
                      })
                    }
                  />

                  <div className="text-end">
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => goToNextStep("collapse1", "collapse2")}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              }
            />

            {/* address */}
            <Section
              title="Address"
              isOpen={collapse.collapse2}
              toggle={() => toggleCollapse("collapse2")}
              content={
                <div className="form-group">
                  <label htmlFor="streetAddress">Street Address</label>
                  <input
                    id="streetAddress"
                    type="text"
                    className="form-control"
                    placeholder="Enter your street address"
                    value={formState.streetAddress}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        streetAddress: e.target.value,
                      })
                    }
                  />

                  <label htmlFor="city" className="mt-3">
                    City
                  </label>
                  <input
                    id="city"
                    type="text"
                    className="form-control"
                    placeholder="Enter your city"
                    value={formState.city}
                    onChange={(e) =>
                      setFormState({ ...formState, city: e.target.value })
                    }
                  />

                  <label htmlFor="zipCode" className="mt-3">
                    Zip Code
                  </label>
                  <input
                    id="zipCode"
                    type="text"
                    className="form-control"
                    placeholder="Enter your zip code"
                    value={formState.zipCode}
                    onChange={(e) =>
                      setFormState({ ...formState, zipCode: e.target.value })
                    }
                  />

                  <div className="text-end">
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => goToNextStep("collapse2", "collapse3")}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              }
            />

            {/* delivery method */}
            <Section
              title="Delivery Method"
              isOpen={collapse.collapse3}
              toggle={() => toggleCollapse("collapse3")}
              content={
                <div className="form-group">
                  <label htmlFor="deliveryOption">Delivery Option</label>
                  <select
                    id="deliveryOption"
                    className="form-control"
                    value={formState.deliveryOption}
                    onChange={(e) =>
                      setFormState({
                        ...formState,
                        deliveryOption: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Delivery Option</option>
                    <option value="Standard Delivery">Standard Delivery</option>
                    <option value="Express Delivery">Express Delivery</option>
                  </select>

                  <div className="text-end">
                    <button
                      className="btn btn-primary mt-3"
                      onClick={() => goToNextStep("collapse3", "collapse4")}
                    >
                      Next Step
                    </button>
                  </div>
                </div>
              }
            />

            {/* payment method */}
            <Section
              title="Payment Method"
              isOpen={collapse.collapse4}
              toggle={() => toggleCollapse("collapse4")}
              content={
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    id="cardNumber"
                    type="text"
                    className="form-control"
                    placeholder="Enter your card number"
                    value={formState.cardNumber}
                    onChange={(e) =>
                      setFormState({ ...formState, cardNumber: e.target.value })
                    }
                  />

                  <label htmlFor="expiryDate" className="mt-3">
                    Expiry Date (MM/YY)
                  </label>
                  <input
                    id="expiryDate"
                    type="text"
                    className="form-control"
                    placeholder="Enter expiry date"
                    value={formState.expiryDate}
                    onChange={(e) =>
                      setFormState({ ...formState, expiryDate: e.target.value })
                    }
                  />

                  <label htmlFor="cvv" className="mt-3">
                    CVV
                  </label>
                  <input
                    id="cvv"
                    type="text"
                    className="form-control"
                    placeholder="Enter CVV"
                    value={formState.cvv}
                    onChange={(e) =>
                      setFormState({ ...formState, cvv: e.target.value })
                    }
                  />

                  <div className="text-end">
                    <button
                      className="btn btn-success mt-3"
                      onClick={handleSubmitOrder}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              }
            />
          </div>
        </div>
        <div className="col-lg-6 col-md-12">
          <img
            src="../images/ord.jpg"
            className="w-100 "
            data-aos="fade-right"
            alt=""
          />
        </div>

        {/* confirmation model */}
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Order Confirmation</Modal.Title>
          </Modal.Header>
          <Modal.Body>Your order has been placed successfully!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

const Section = ({ title, isOpen, toggle, content }) => (
  <div className="card mb-3">
    <div className="card-header" onClick={toggle}>
      <h5 className="mb-0">{title}</h5>
    </div>
    <div className={`collapse ${isOpen ? "show" : ""}`}>
      <div className="card-body">{content}</div>
    </div>
  </div>
);
