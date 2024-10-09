import React, { useState, useEffect } from "react";
import { CDBRating, CDBContainer } from "cdbreact";
import Button from "react-bootstrap/Button";
import { FaHeart, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import "aos/dist/aos.css";
import Aos from "aos";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const AngularCourse = () => {
  const [counter, setCounter] = useState(0);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const handleAddToWishlist = async () => {
    const wishlistItem = {
      img: "../images/a2.jpeg",
      desc: "Angular Pro | Advanced Training 2024",
      price: "70.00",
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
        setCounter((prevCount) => prevCount + 1);
        toast.success("Item added to wishlist!");
      } else {
        console.error("Failed to add item to wishlist");
        toast.error("Failed to add item to wishlist");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred");
    }
  };

  const navigate = useNavigate();

  const Angularoder = () => {
    navigate("/order");
  };

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const targetDate = new Date("Oct 30, 2024 23:59:59").getTime();

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
    Aos.init({ duration: 1000 });
  }, []);
  const handleAddToCart = () => {
    setCounter((prevCount) => prevCount + 1);
  };

  return (
    <div className="container mb-4">
            <ToastContainer />
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
              <a href="/angular" className="text-decoration-none text-dark">
                Angular
              </a>
            </li>
          </ol>
        </nav>
      </div>

      <section className="mt-4 p-4 bg-light rounded shadow-sm">
        <div className="row">
          <div className="col-lg-6 d-flex align-items-center">
            <img
              data-aos="fade-up-right"
              src="../images/a2.jpeg"
              alt="Python Course"
              className="img-fluid rounded shadow h-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between">
            <div>
              <h3 className="fw-bold mb-3" data-aos="fade-down">
                Angular Pro | Advanced Training 2024
              </h3>
              <p className="fs-6 mb-3" data-aos="fade-down">
                <strong>Angular</strong> is a robust, open-source framework from
                Google designed for building dynamic single-page applications
                (SPAs). Using TypeScript, Angular features two-way data binding,
                a component-based architecture, and powerful tools for
                developing scalable and maintainable apps. It provides a
                comprehensive solution for modern web development with its
                extensive ecosystem and built-in functionalities.
              </p>
              <div className="d-flex align-items-center mb-3">
                <CDBContainer>
                  <div className="d-flex align-items-center">
                    <CDBRating feedback readonly />
                    <p className="ms-2 mb-0 text-info" data-aos="flip-up">
                      (12650 reviews)
                    </p>
                  </div>
                </CDBContainer>
              </div>
              <p className="fw-bold text-primary fs-3 mb-3" data-aos="flip-up">
                $70.00
              </p>
            </div>
            <br />
            <div
              className="d-flex flex-column align-items-center"
              data-aos="fade-left"
            >
              <Button
                variant="primary"
                className="p-2 mb-2 w-75 d-flex align-items-center justify-content-center"
                onClick={() => {
                  handleAddToCart();
                  handleAddToWishlist();
                }}
              >
                <FaHeart className="me-2" /> Add To Wishlist
              </Button>

              <Button
                variant="success"
                className="p-2 w-75 d-flex align-items-center justify-content-center"
                onClick={Angularoder}
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
          <div className="col-lg-4">
            <p>
              "Enrolling in this course was a game-changer for my career. The
              interactive lessons and practical projects gave me hands-on
              experience that I could apply immediately. Highly recommended for
              anyone looking to advance their programming skills!"
            </p>
            <h6>- John D. – Software Engineer </h6>
          </div>
          <div className="col-lg-4">
            <p>
              "Comprehensive and up-to-date! The course helped me land my first
              job as a Python developer. Highly recommend it!"
            </p>
            <h6>- Sarah K. – Data Analyst</h6>
          </div>
          <div className="col-lg-4">
            <p>
              "As a beginner, I found this course extremely easy to follow. The
              hands-on approach kept me engaged throughout."
            </p>
            <h6>- Michael R. – Web Developer </h6>
          </div>
        </div>
      </section>

      <div
        className="d-flex justify-content-center mt-5"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <div className="w-75">
          <ListGroup as="ul">
            <ListGroup.Item as="li" active>
              Course Characteristics
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">1. Course Title:</strong> Angular Pro |
              Advanced Training 2024
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">2. Course Duration:</strong> 14 weeks
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">3. Level:</strong> Beginner to Advanced
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">4. Course Objectives:</strong>
              <ul>
                <li>Understand Angular Basics.</li>
                <li>Develop Components & Services.</li>
                <li>Manage Routing & Forms.</li>
                <li>Make HTTP Requests & Optimize Performance.</li>
                <li>Test, Debug, & Deploy Applications.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">5. Modules Covered:</strong>
              <ul>
                <li>Introduction to Angular & TypeScript.</li>
                <li>Components, Templates, and Directives.</li>
                <li>Services, Dependency Injection, and State Management.</li>
                <li>Routing, Navigation, and Forms.</li>
                <li>HTTP Client, APIs, and Performance Optimization.</li>
                <li>Testing, Debugging, and Deployment.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">6. Certification:</strong> Certificate of
              Completion upon finishing the course and passing the final
              assessment.
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">7. Up-to-Date Content:</strong> Features
              the latest Angular versions and best practices to ensure relevance
              in the fast-evolving tech landscape.
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>

      <section
        className="mt-5 p-3 bg-light rounded shadow-sm"
        data-aos="zoom-in-up"
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
                This course is designed for absolute beginners. No prior
                programming experience is required, although basic knowledge of
                computers is helpful.
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
                Yes, after successfully completing the course and passing the
                final assessment, you will receive a Certificate of Completion.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AngularCourse;
