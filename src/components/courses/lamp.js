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

const LampCourse = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const handleAddToWishlist = async () => {
    const wishlistItem = {
      img: "../images/l.png",
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
        toast.success("Item added to wishlist !")
        setCounter((prevCount) => prevCount + 1);
      } else {
        console.error("Failed to add item to wishlist");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const navigate = useNavigate();
  const lamp = () => {
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
              <a href="/lamp" className="text-decoration-none text-dark">
                lamp
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
              src="../images/l.png"
              alt="LAMP Stack Course"
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
                LAMP Stack Mastery | Full-Stack Web Development 2024
              </h3>
              <p className="fs-6 mb-3">
                <strong>LAMP Stack</strong> refers to a set of open-source
                software that is used to create web applications. LAMP stands
                for Linux, Apache, MySQL, and PHP. This course covers each
                component in detail, teaching you how to set up, configure, and
                use LAMP technologies to build and deploy dynamic web
                applications.
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
                $30.00
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
                onClick={lamp}
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
              "This LAMP Stack course provided a comprehensive overview of each
              technology in the stack. The hands-on exercises were very helpful
              in understanding the integration of these technologies."
            </p>
            <h6>- John D. – Web Developer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <p>
              "The course was well-structured, covering everything from basic
              setup to advanced configuration. It’s perfect for anyone looking
              to become proficient in full-stack web development with LAMP."
            </p>
            <h6>- Sarah K. – Software Engineer</h6>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="400">
            <p>
              "I appreciated the depth of content and practical examples
              provided in this course. It was a great way to learn about LAMP
              stack and its applications in real-world scenarios."
            </p>
            <h6>- Michael R. – Full-Stack Developer</h6>
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
              <strong className="fs-6">1. Course Title:</strong> LAMP Stack
              Mastery | Full-Stack Web Development 2024
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">2. Course Duration:</strong> 12 weeks
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">3. Level:</strong> Beginner to
              Intermediate
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">4. Course Objectives:</strong>
              <ul>
                <li>Understand LAMP Stack Components.</li>
                <li>Install and Configure Linux, Apache, MySQL, and PHP.</li>
                <li>Develop Dynamic Web Applications.</li>
                <li>Manage Databases and Security.</li>
                <li>Deploy and Maintain LAMP Applications.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li">
              <strong className="fs-6">5. Modules Covered:</strong>
              <ul>
                <li>Introduction to LAMP Stack.</li>
                <li>Linux Fundamentals.</li>
                <li>Apache Web Server Configuration.</li>
                <li>MySQL Database Management.</li>
                <li>PHP Programming Basics and Advanced.</li>
                <li>Building and Deploying LAMP Applications.</li>
              </ul>
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">6. Certification:</strong> Certificate of
              Completion upon finishing the course and passing the final
              assessment.
            </ListGroup.Item>
            <ListGroup.Item as="li" disabled>
              <strong className="fs-6">7. Up-to-Date Content:</strong> Includes
              the latest versions of LAMP technologies and current best
              practices for web development.
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
                No prior experience is needed. Basic familiarity with computers
                and a willingness to learn are sufficient to get started with
                this course.
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
                The course includes video lectures, hands-on coding exercises,
                and practical projects. Additional resources and readings are
                provided for a comprehensive learning experience.
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
                Yes, a Certificate of Completion will be awarded after
                successfully finishing the course and passing the final
                assessment. This certificate can be useful for career
                advancement or job applications.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LampCourse;
