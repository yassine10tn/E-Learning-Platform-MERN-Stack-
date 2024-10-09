import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { CDBRating, CDBContainer } from "cdbreact";
import Button from "react-bootstrap/Button";
import { FaHeart, FaShoppingCart, FaHome } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

const GoCourse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();
  const go = () => {
    navigate("/order");
  };

  const handleAddToWishlist = async () => {
    const wishlistItem = {
      img: "../images/go2.jg",
      desc: "Go Programming | Mastering Concurrency and Performance 2024",
      price: "60.00",
    };

    try {
      const response = await fetch("http://localhost:8080/api/wishlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(wishlistItem),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Item added to wishlist:", data);
        toast.success("Item added to wishlist!")
        setCounter((prevCount) => prevCount + 1);
      } else {
        console.error("Failed to add item to wishlist");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const targetDate = new Date("Sep 30, 2024 23:59:59").getTime();

    const timerInterval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(timerInterval);
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  // Handlers for incrementing and decrementing the quantity
  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="container mb-4">
      <ToastContainer/>
      <div className="mb-4">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="/" className="text-decoration-none text-dark">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="/item" className="text-decoration-none text-dark">
                All Courses
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <a href="/go" className="text-decoration-none text-dark">
                Go
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <section
        className="mt-4 p-4 bg-light rounded shadow-sm"
        data-aos="fade-up"
      >
        <div className="row">
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="fade-right"
          >
            <img
              src="../images/go2.jpg"
              alt="Go Course"
              className="img-fluid rounded shadow h-100"
              style={{ maxHeight: "400px", objectFit: "" }}
            />
          </div>
          <div
            className="col-lg-6 d-flex flex-column justify-content-between"
            data-aos="fade-left"
          >
            <div>
              <h3 className="fw-bold mb-3">
                Go Programming | Mastering Concurrency and Performance 2024
              </h3>
              <p className="fs-6 mb-3">
                <strong>Go</strong>, also known as Golang, is an open-source
                programming language developed by Google. It is known for its
                simplicity, efficiency, and strong support for concurrency. This
                course will cover the fundamentals of Go programming, including
                its syntax, concurrency features, and best practices for
                performance optimization.
              </p>
              <div className="d-flex align-items-center mb-3">
                <CDBContainer>
                  <div className="d-flex align-items-center">
                    <CDBRating feedback readonly />
                    <p className="ms-2 mb-0 text-info" data-aos="flip-up">
                      (11250 reviews)
                    </p>
                  </div>
                </CDBContainer>
              </div>
              <p className="fw-bold text-primary fs-3 mb-3" data-aos="flip-up">
                $60.00
              </p>
            </div>
            <div
              className="d-flex flex-column align-items-center"
              data-aos="fade-up"
            >
              <br />
              <Button
                variant="primary"
                className="p-2 mb-2 w-75 d-flex align-items-center justify-content-center"
                onClick={handleAddToWishlist}
              >
                <FaHeart className="me-2" /> Add To Wishlist
              </Button>

              <Button
                variant="success"
                className="p-2 w-75 d-flex align-items-center justify-content-center"
                onClick={go}
              >
                <FaShoppingCart className="me-2" /> Order Now!
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-5 p-3 bg-danger text-white rounded shadow text-center"
        data-aos="zoom-in"
      >
        <h3 className="mb-2">Offer ends in:</h3>
        <div>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </div>
      </section>

      <section
        className="mt-5 p-3 bg-light rounded shadow-sm"
        data-aos="zoom-in-up"
      >
        <h4 className="text-center mb-4">What Our Students Say</h4>
        <div className="row text-center">
          <div className="col-lg-4" data-aos="fade-up">
            <p>
              "This Go programming course was a game-changer for my
              understanding of concurrency and performance. The hands-on
              projects were very effective."
            </p>
            <h6>- John D. – Software Engineer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <p>
              "The course provided a thorough introduction to Go, with practical
              examples and best practices that improved my coding skills
              significantly."
            </p>
            <h6>- Sarah K. – Backend Developer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <p>
              "I appreciated the focus on concurrency in this Go course. The
              lessons were clear and the exercises were relevant to real-world
              applications."
            </p>
            <h6>- Michael R. – Systems Programmer</h6>
          </div>
        </div>
      </section>

      <div className="d-flex justify-content-center mt-5" data-aos="fade-up">
        <div className="w-75">
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Course Characteristics
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">1. Course Title:</strong> Go Programming
              | Mastering Concurrency and Performance 2024
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">2. Course Duration:</strong> 10 weeks
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">3. Level:</strong> Beginner to
              Intermediate
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">4. Course Objectives:</strong>
              <ul>
                <li>Understand Go Basics & Syntax.</li>
                <li>Implement Concurrency with Goroutines.</li>
                <li>Manage Data & Performance.</li>
                <li>Optimize Code & Debug Applications.</li>
                <li>Work with Go Packages & Tools.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">5. Modules Covered:</strong>
              <ul>
                <li>Introduction to Go Programming.</li>
                <li>Variables, Functions, and Data Types.</li>
                <li>Concurrency with Goroutines and Channels.</li>
                <li>Handling Errors & Performance Tuning.</li>
                <li>Testing & Debugging Go Code.</li>
                <li>Advanced Go Features & Best Practices.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">6. Certification:</strong> Certificate of
              Completion upon finishing the course and passing the final
              assessment.
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">7. Up-to-Date Content:</strong> Features
              the latest Go updates and best practices for modern development.
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      <section
        className="mt-5 p-3 bg-light rounded shadow-sm"
        data-aos="fade-up"
      >
        <h4 className="text-center mb-4">Frequently Asked Questions</h4>
        <div className="accordion" id="faqAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>What are the prerequisites for this course?</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Basic knowledge of programming concepts is recommended.
                Familiarity with another programming language will be helpful
                but not required.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Will I get a certificate upon completion?</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, you will receive a Certificate of Completion after
                successfully finishing the course and passing the final
                assessment.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GoCourse;
