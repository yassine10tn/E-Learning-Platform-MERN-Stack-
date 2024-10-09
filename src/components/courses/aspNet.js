import React, { useState, useEffect } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { CDBRating, CDBContainer } from "cdbreact";
import Button from "react-bootstrap/Button";
import { FaHeart, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import { FaHome } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AspCourse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleAddToWishlist = async () => {
    const wishlistItem = {
      img: "../images/asp.jpg",
      desc: "ASP.NET Pro | Advanced Training 2024",
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
        toast.success("Item added to wishlist!");
        setCounter((prevCount) => prevCount + 1);
      } else {
        console.error("Failed to add item to wishlist");
        toast.error("Failed to add item to wishlist. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const navigate = useNavigate();
  const aspnetOrder = () => {
    navigate("/order");
  };

  const [quantity, setQuantity] = useState(1); // State to handle quantity

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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Handlers for incrementing and decrementing the quantity
  const handleIncrement = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
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
              <a href="/apsnet" className="text-decoration-none text-dark">
                AspNet
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
              src="../images/asp.jpg"
              alt="ASP.NET Course"
              className="img-fluid rounded shadow h-100"
              style={{ maxHeight: "400px", objectFit: "" }}
            />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-between">
            <div>
              <h3 className="fw-bold mb-3" data-aos="fade-down">
                ASP.NET Pro | Advanced Training 2024
              </h3>
              <p className="fs-6 mb-3" data-aos="fade-down">
                <strong>ASP.NET</strong> is a robust, open-source framework
                developed by Microsoft for building dynamic web applications.
                With a focus on server-side development, ASP.NET offers a
                powerful and scalable solution for creating modern web apps with
                efficient data handling, security features, and integration with
                the .NET ecosystem.
              </p>
              <div className="d-flex align-items-center mb-3">
                <CDBContainer>
                  <div className="d-flex align-items-center">
                    <CDBRating feedback readonly />
                    <p className="ms-2 mb-0 text-info" data-aos="flip-up">
                      (7650 reviews)
                    </p>
                  </div>
                </CDBContainer>
              </div>
              <p className="fw-bold text-primary fs-3 mb-3" data-aos="flip-up">
                $70.00
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
                onClick={aspnetOrder}
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
              "Enrolling in this ASP.NET course has significantly boosted my web
              development skills. The hands-on projects and expert guidance were
              invaluable. Highly recommended for anyone aiming to master
              ASP.NET!"
            </p>
            <h6>- John D. – Web Developer</h6>
          </div>
          <div className="col-lg-4">
            <p>
              "The course content was thorough and up-to-date. It helped me land
              a job as an ASP.NET developer. Great course for anyone serious
              about backend development!"
            </p>
            <h6>- Sarah K. – Software Engineer</h6>
          </div>
          <div className="col-lg-4">
            <p>
              "As a beginner, I found this ASP.NET course easy to follow and
              very engaging. The practical exercises made learning effective and
              enjoyable."
            </p>
            <h6>- Michael R. – Junior Developer</h6>
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
              <strong className="fs-6">1. Course Title:</strong> ASP.NET Pro |
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
                <li>Understand ASP.NET Basics.</li>
                <li>Develop Web Applications.</li>
                <li>Manage Data & Security.</li>
                <li>Optimize Performance & Deployment.</li>
                <li>Test & Debug ASP.NET Applications.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">5. Modules Covered:</strong>
              <ul>
                <li>Introduction to ASP.NET & .NET Core.</li>
                <li>Creating Web Applications & Components.</li>
                <li>Data Management & Security.</li>
                <li>Routing, Middleware, and Forms.</li>
                <li>Performance Optimization & Deployment.</li>
                <li>Testing & Debugging ASP.NET Apps.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">6. Certification:</strong> Certificate of
              Completion upon finishing the course and passing the final
              assessment.
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">7. Up-to-Date Content:</strong> Features
              the latest ASP.NET versions and best practices to ensure relevance
              in modern web development.
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
            <h2 className="accordion-header" id="faq1-heading">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq1-collapse"
                aria-expanded="true"
                aria-controls="faq1-collapse"
              >
                Do I need prior knowledge of ASP.NET before starting this
                course?
              </button>
            </h2>
            <div
              id="faq1-collapse"
              className="accordion-collapse collapse show"
              aria-labelledby="faq1-heading"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                No prior knowledge of ASP.NET is required. The course covers
                everything from basic to advanced concepts, suitable for
                beginners and experienced developers alike.
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header" id="faq2-heading">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#faq2-collapse"
                aria-expanded="false"
                aria-controls="faq2-collapse"
              >
                Will I have access to the course materials after the course
                ends?
              </button>
            </h2>
            <div
              id="faq2-collapse"
              className="accordion-collapse collapse"
              aria-labelledby="faq2-heading"
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">
                Yes, you will have lifetime access to the course materials,
                including any future updates.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AspCourse;
