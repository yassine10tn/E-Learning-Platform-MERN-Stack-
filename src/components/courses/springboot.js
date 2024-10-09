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

const SpringBootCourse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleAddToWishlist = async () => {
    const wishlistItem = {
      img: "../images/spring.jpg",
      desc: "Spring Boot Mastery | Comprehensive Backend Development 2024",
      price: "90.00",
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
        toast.success("Item added to wishlist")
        setCounter((prevCount) => prevCount + 1);
      } else {
        console.error("Failed to add item to wishlist");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const navigate = useNavigate();
  const springboot = () => {
    navigate("/order");
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
      <ToastContainer></ToastContainer>
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
              <a href="/springboot" className="text-decoration-none text-dark">
                springboot
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
              src="../images/sp.jpg"
              alt="Spring Boot Course"
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
                Spring Boot Mastery | Comprehensive Backend Development 2024
              </h3>
              <p className="fs-6 mb-3" data-aos="fade-down">
                <strong>Spring Boot</strong> is an extension of the Spring
                framework that simplifies the development of production-ready
                applications. It helps you create stand-alone, production-grade
                Spring-based applications with minimal effort.
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
                $90.00
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
                onClick={springboot}
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
              "The Spring Boot course provided in-depth knowledge and practical
              skills for backend development. The projects were well-designed
              and the instructor's insights were invaluable."
            </p>
            <h6>- John D. – Backend Developer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up">
            <p>
              "I gained a solid understanding of Spring Boot and how to create
              robust applications. The course was comprehensive and the support
              from the instructor was great."
            </p>
            <h6>- Sarah K. – Software Engineer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up">
            <p>
              "This course made learning Spring Boot easy and enjoyable. The
              hands-on approach and practical exercises helped me apply the
              concepts effectively."
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
              <strong className="fs-6">1. Course Title:</strong> Spring Boot
              Mastery | Comprehensive Backend Development 2024
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">2. Course Duration:</strong> 16 weeks
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">3. Level:</strong> Beginner to Advanced
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">4. Course Objectives:</strong>
              <ul>
                <li>Understand the fundamentals of Spring Boot.</li>
                <li>Develop RESTful APIs and microservices.</li>
                <li>Implement security features and data access.</li>
                <li>Optimize performance and handle exceptions.</li>
                <li>Deploy Spring Boot applications.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">5. Modules Covered:</strong>
              <ul>
                <li>Introduction to Spring Boot and its Features.</li>
                <li>Building RESTful Services with Spring Boot.</li>
                <li>Data Access with Spring Data JPA and MongoDB.</li>
                <li>Security with Spring Security.</li>
                <li>Testing and Debugging Spring Boot Applications.</li>
                <li>Deployment and Cloud Integration.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">6. Certification:</strong> Certificate of
              Completion upon finishing the course and passing the final
              assessment.
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">7. Up-to-Date Content:</strong> Features
              the latest Spring Boot versions and best practices to ensure
              relevance in modern backend development.
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
                Basic understanding of Java programming is recommended.
                Familiarity with web development concepts will also be helpful.
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
                Will there be hands-on projects included in the course?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, the course includes practical projects to reinforce the
                concepts learned and provide real-world experience.
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
                How can I get support during the course?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                You can reach out to the instructor through the course's online
                forum or via email. Support details will be provided upon
                enrollment.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpringBootCourse;
