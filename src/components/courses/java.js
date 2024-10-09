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

const JavaCourse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();
  const java = () => {
    navigate("/order");
  };
  const handleAddToWishlist = async () => {
    const wishlistItem = {
      img: "../images/j2.png",
      desc: "Java Programming | From Basics to Advanced 2024",
      price: "80.00",
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
              <a href="/java" className="text-decoration-none text-dark">
                Java
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
              src="../images/j2.png"
              alt="Java Course"
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
                Java Programming | From Basics to Advanced 2024
              </h3>
              <p className="fs-6 mb-3">
                <strong>Java</strong> is a versatile, object-oriented
                programming language that is widely used for building
                enterprise-level applications. This course covers everything
                from fundamental programming concepts to advanced Java features,
                including object-oriented principles, data structures,
                algorithms, and real-world application development.
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
                $80.00
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
                onClick={java}
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
              "This Java course is excellent for anyone looking to master the
              language. The curriculum is comprehensive and the projects are
              very useful for practical experience."
            </p>
            <h6>- John D. – Software Engineer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <p>
              "The course was well-organized and the instructors provided clear
              explanations. I feel confident in my Java skills after completing
              this course."
            </p>
            <h6>- Sarah K. – Application Developer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <p>
              "I enjoyed the hands-on approach of this course. It was easy to
              follow and included a lot of practical exercises that enhanced my
              learning experience."
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
              <strong className="fs-6">1. Course Title:</strong> Java
              Programming | From Basics to Advanced 2024
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">2. Course Duration:</strong> 12 weeks
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">3. Level:</strong> Beginner to Advanced
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">4. Course Objectives:</strong>
              <ul>
                <li>Understand Java Basics and Syntax.</li>
                <li>Implement Object-Oriented Programming.</li>
                <li>Work with Data Structures and Algorithms.</li>
                <li>Build Real-World Java Applications.</li>
                <li>Learn Exception Handling and Debugging.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">5. Modules Covered:</strong>
              <ul>
                <li>Introduction to Java Programming.</li>
                <li>Classes, Objects, and Methods.</li>
                <li>Collections and Data Structures.</li>
                <li>File Handling and Exception Management.</li>
                <li>Advanced Java Features (Streams, Concurrency).</li>
                <li>Application Development and Deployment.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">6. Certification:</strong> Certificate of
              Completion upon finishing the course and passing the final
              assessment.
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">7. Up-to-Date Content:</strong> Includes
              the latest Java updates and best practices to stay current in the
              field.
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

export default JavaCourse;
