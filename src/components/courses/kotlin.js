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

const KotlinCourse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const navigate = useNavigate();
  const kotlin = () => {
    navigate("/order");
  };
  const handleAddToWishlist = async () => {
    const wishlistItem = {
      img: "../images/kotlin.png",
      desc: "Kotlin Programming | Beginner to Expert 2024",
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
              <a href="/kotlin" className="text-decoration-none text-dark">
                kotlin
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
              src="../images/kotlin.png"
              alt="Kotlin Course"
              className="img-fluid rounded shadow h-100"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>
          <div
            className="col-lg-6 d-flex flex-column justify-content-between"
            data-aos="fade-left"
          >
            <div>
              <h3 className="fw-bold mb-3">
                Kotlin Programming | Beginner to Expert 2024
              </h3>
              <p className="fs-6 mb-3">
                <strong>Kotlin</strong> is a modern, statically-typed
                programming language that runs on the JVM and can be used for
                Android development, server-side applications, and more. This
                course covers everything from the fundamentals to advanced
                topics in Kotlin, including language syntax, functional
                programming, and building Android apps.
              </p>
              <div className="d-flex align-items-center mb-3">
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
                onClick={kotlin}
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
              "This Kotlin course is well-structured and very informative. The
              transition from Java to Kotlin was smooth, and the projects were
              very engaging."
            </p>
            <h6>- John D. – Mobile Developer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <p>
              "The course offers a great introduction to Kotlin with practical
              examples and exercises. It's perfect for anyone looking to get
              into Android development."
            </p>
            <h6>- Sarah K. – Android Developer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <p>
              "I appreciated the depth of this course. The material was
              presented clearly, and the practical assignments helped reinforce
              the concepts."
            </p>
            <h6>- Michael R. – Software Engineer</h6>
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
              <strong className="fs-6">1. Course Title:</strong> Kotlin
              Programming | Beginner to Expert 2024
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">2. Course Duration:</strong> 10 weeks
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">3. Level:</strong> Beginner to Expert
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">4. Course Objectives:</strong>
              <ul>
                <li>Understand Kotlin Basics and Syntax.</li>
                <li>Work with Kotlin for Android Development.</li>
                <li>Implement Functional Programming Concepts.</li>
                <li>Build Real-World Applications with Kotlin.</li>
                <li>Explore Advanced Kotlin Features.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">5. Modules Covered:</strong>
              <ul>
                <li>Introduction to Kotlin Programming.</li>
                <li>Classes, Objects, and Inheritance.</li>
                <li>Functional Programming in Kotlin.</li>
                <li>Android Development with Kotlin.</li>
                <li>Advanced Kotlin Features (Coroutines, DSLs).</li>
                <li>Building and Deploying Kotlin Applications.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">6. Certification:</strong> Certificate of
              Completion upon finishing the course and passing the final
              assessment.
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">7. Up-to-Date Content:</strong> Features
              the latest Kotlin updates and best practices to ensure relevance
              in modern development.
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
            <h2 className="accordion-header" id="faqHeading1">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse1"
                aria-expanded="true"
                aria-controls="faqCollapse1"
              >
                What prerequisites are needed for this course?
              </button>
            </h2>
            <div
              id="faqCollapse1"
              className="accordion-collapse collapse show"
              aria-labelledby="faqHeading1"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                No prior programming experience is required. Basic familiarity
                with computers and a willingness to learn are sufficient to get
                started with this course.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse2"
                aria-expanded="false"
                aria-controls="faqCollapse2"
              >
                How is the course content delivered?
              </button>
            </h2>
            <div
              id="faqCollapse2"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading2"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                The course content is delivered through video lectures,
                interactive coding exercises, and practical projects. Additional
                resources and readings are also provided to enhance learning.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="faqHeading3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faqCollapse3"
                aria-expanded="false"
                aria-controls="faqCollapse3"
              >
                Will I receive a certificate upon completion?
              </button>
            </h2>
            <div
              id="faqCollapse3"
              className="accordion-collapse collapse"
              aria-labelledby="faqHeading3"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, you will receive a Certificate of Completion once you
                finish the course and pass the final assessment. The certificate
                can be shared with potential employers or added to your resume.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KotlinCourse;
