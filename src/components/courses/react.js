import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { CDBRating, CDBContainer } from "cdbreact";
import Button from "react-bootstrap/Button";
import {
  FaHeart,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaHome,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 


const ReactCourse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate();
  const react = () => {
    navigate("/order");
  };

  const handleAddToWishlist = async () => {
    const wishlistItem = {
      img: "../images/rea.jpeg",
      desc: "React Mastery | Modern Frontend Development 2024",
      price: "75.00",
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
        toast.success("Item added to wishlist !")
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
              <a href="/react" className="text-decoration-none text-dark">
                react
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
          <div className="col-lg-6 d-flex align-items-center">
            <img
              src="../images/rea.jpeg"
              alt="React Course"
              className="img-fluid rounded shadow h-100"
              style={{ maxHeight: "400px", objectFit: "" }}
              data-aos="zoom-in"
            />
          </div>
          <div
            className="col-lg-6 d-flex flex-column justify-content-between"
            data-aos="fade-left"
          >
            <div>
              <h3 className="fw-bold mb-3" data-aos="fade-down">
                React Mastery | Modern Frontend Development 2024
              </h3>
              <p className="fs-6 mb-3" data-aos="fade-down">
                <strong>React</strong> is a powerful JavaScript library
                developed by Facebook for building user interfaces. It allows
                developers to create dynamic and responsive web applications
                using reusable components and a declarative approach to
                programming.
              </p>
              <div
                className="d-flex align-items-center mb-3"
                data-aos="flip-up"
              >
                <CDBContainer>
                  <div className="d-flex align-items-center">
                    <CDBRating feedback readonly />
                    <p className="ms-2 mb-0 text-info" data-aos="flip-up">
                      (1250 reviews)
                    </p>
                  </div>
                </CDBContainer>
              </div>
              <p className="fw-bold text-primary fs-3 mb-3" data-aos="flip-up">
                $75.00
              </p>
            </div>
            <div
              className="d-flex flex-column align-items-center"
              data-aos="fade-left"
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
                onClick={react}
              >
                <FaShoppingCart className="me-2" /> Order Now!
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section
        className="mt-5 p-3 bg-danger text-white rounded shadow text-center"
        data-aos="flip-up"
      >
        <h3 className="mb-2">Offer ends in:</h3>
        <div>
          {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
          {timeLeft.seconds}s
        </div>
      </section>

      <section
        className="mt-5 p-3 bg-light rounded shadow-sm"
        data-aos="zoom-in"
      >
        <h4 className="text-center mb-4">What Our Students Say</h4>
        <div className="row text-center">
          <div className="col-lg-4" data-aos="fade-up">
            <p>
              "This React course was exceptional! The concepts were explained
              clearly, and the hands-on projects were very practical. I feel
              confident in using React for my projects now."
            </p>
            <h6>- John D. – Frontend Developer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up">
            <p>
              "The React course exceeded my expectations. The material was
              up-to-date, and the instructor was very knowledgeable. The course
              helped me build complex applications with ease."
            </p>
            <h6>- Sarah K. – Software Engineer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up">
            <p>
              "As someone new to React, I found this course to be incredibly
              helpful. The tutorials were engaging, and I learned how to use
              React to build modern web applications."
            </p>
            <h6>- Michael R. – Junior Developer</h6>
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
              <strong className="fs-6">1. Course Title:</strong> React Mastery |
              Modern Frontend Development 2024
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
                <li>Understand React Basics and Advanced Concepts.</li>
                <li>Create Reusable Components and Manage State.</li>
                <li>Implement Routing and Navigation.</li>
                <li>Handle Forms and User Inputs.</li>
                <li>Optimize Performance and Debug React Applications.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">5. Modules Covered:</strong>
              <ul>
                <li>Introduction to React and JSX.</li>
                <li>Components and Props.</li>
                <li>State Management and Hooks.</li>
                <li>React Router and Navigation.</li>
                <li>Forms, Validation, and User Interaction.</li>
                <li>Performance Optimization and Deployment.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">6. Certification:</strong> Certificate of
              Completion upon finishing the course and passing the final
              assessment.
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">7. Up-to-Date Content:</strong> Features
              the latest React versions and best practices to ensure relevance
              in modern web development.
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      <section className="mt-5 p-3 bg-light rounded shadow-sm">
        <h4 className="text-center mb-4" data-aos="fade-up">
          Frequently Asked Questions
        </h4>
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
                What prior knowledge is required for this course?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Basic understanding of HTML, CSS, and JavaScript is recommended.
                No prior knowledge of React is required.
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
                Is there any hands-on project included in the course?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, the course includes multiple hands-on projects to help
                reinforce the concepts learned and provide practical experience.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How can I contact the instructor if I have questions?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can contact the instructor through the course's online forum
                or via email. Details will be provided upon enrollment.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReactCourse;
