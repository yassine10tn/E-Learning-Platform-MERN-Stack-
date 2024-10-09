import React, { useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import AOS from "aos";
import "aos/dist/aos.css";

const courses = [
  {
    title: "Assistance",
    description:
      '"Experience personalized assistance and support from our dedicated team—join our online platform to get the help you need to master time management and achieve your goals with confidence."',
    imgSrc: "../images/assistance.png",
  },
  {
    title: "Certification",
    description:
      "Earn valuable certifications with our online platform and showcase your time management skills to advance your career and stand out in your field.",
    imgSrc: "../images/certificat.png",
  },
  {
    title: "Supportive Community",
    description:
      "Join our supportive community and discover how our online platform can help you master time management while connecting with like-minded individuals who share your goals.",
    imgSrc: "../images/community.png",
  },
  {
    title: "Flexible Learning",
    description:
      "Enjoy the freedom of flexible learning with our online platform—tailor your study schedule to fit your life and learn time management at your own pace, anytime and anywhere.",
    imgSrc: "../images/learning.png",
  },
  {
    title: "Expert Instructors",
    description:
      "Learn from expert instructors who bring real-world experience and insights—join our online platform to benefit from their guidance and take your time management skills to the next level.",
    imgSrc: "../images/supervisor.png",
  },
  {
    title: "Time",
    description:
      "Unlock the power of productivity and make every minute count—join our online platform today and transform the way you manage your time!",
    imgSrc: "../images/timer.png",
  },
];

const team = [
  {
    title: "Dr. Maria Thompson - Senior Lecturer in Computer Science",
    description:
      "Dr. Maria Thompson, with a Ph.D. from MIT, teaches Python and Java at Tech University. She focuses on practical applications and has published extensively in AI and machine learning.",
    imgSrc: "../images/team1.jpg",
  },
  {
    title: "Emily Carter - Lead Developer and Trainer",
    description:
      "Emily Carter, a Lead Developer at Tech Innovators Inc., teaches Ruby, Python, and Kotlin. She uses her industry experience to create engaging, interactive learning environments.",
    imgSrc: "../images/team2.jpg",
  },
  {
    title: "John Stevens - Programming Instructor",
    description:
      "John Stevens is a Programming Instructor at CodeCamp Academy with over a decade of software development experience. He excels in teaching C++ and JavaScript to beginners through hands-on exercises.",
    imgSrc: "../images/team3.png",
  },
  {
    title: "Dr. Ahmed Patel - Associate Professor of Software Engineering",
    description:
      "Dr. Ahmed Patel, an Associate Professor at Global Tech University, specializes in Haskell and Scala. He is known for his methodical teaching approach and extensive research in formal methods.",
    imgSrc: "../images/team4.jpeg",
  },
  {
    title: "David Kim - Senior Software Engineer and Part-Time Instructor",
    description:
      "David Kim, a Senior Software Engineer at Innovatech Solutions, teaches C# and Rust at Code University. He emphasizes problem-solving and software design patterns in his advanced programming courses.",
    imgSrc: "../images/team5.png",
  },
  {
    title: "Michael Brown - Software Development Trainer",
    description:
      "Michael Brown is a Software Development Trainer at CodeMasters Institute. With a Master's degree in Computer Science, he specializes in teaching JavaScript and PHP. Michael is known for his engaging teaching style and his ability to simplify complex programming concepts, making them accessible to all students.",
    imgSrc: "../images/team6.jpg",
  },
];
export const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate("/signup");
  };
  const toggleCollapse = (collapseKey) => {
    setCollapse((prevState) => ({
      ...prevState,
      [collapseKey]: !prevState[collapseKey],
    }));
  };

  const [collapse, setCollapse] = useState({
    collapse1: false,
    collapse2: false,
    collapse3: false,
    collapse4: false,
  });

  return (
    <div data-aos="fade-right">
      <div className="container-fluid bg-light py-5">
        <div className="row" data-aos="fade-right">
          <div className="row align-items-center">
            <div className="col-lg-6 text-lg-start text-center">
              <h1 className="display-4 fw-bold">
                We are building the future of technology education in Africa and
                the Middle East
              </h1>
              <button
                className="btn btn-outline-primary mt-3 p-2 fw-bold w-100"
                onClick={handleSignUpClick}
              >
                Sign up now, what are you waiting for?
              </button>
            </div>
            <div className="col-lg-6 text-center mt-4 mt-lg-0">
              <div className="circle-image-container">
                <img
                  data-aos="flip-up"
                  src="../images/15.jpg"
                  className="img-fluid rounded-circle small-width me-3"
                  alt="Image 15"
                  style={{ width: 250, height: 300 }}
                />
                <img
                  data-aos="flip-up"
                  src="../images/14.jpg"
                  className="img-fluid rounded-circle small-width"
                  alt="Image 14"
                  style={{ width: 250, height: 300 }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      {/* questions Sections */}
      <div className="container d-flex mt-4 p-2" data-aos="fade-left">
        <div className="m-3 d-flex align-self-center" data-aos="fade-left">
          <h2 className="fs-2 fw-bold text-center">
            We Answer Your Questions!
          </h2>
        </div>
        <div
          className="collapse-sections flex-grow-1 mt-2 w-50 "
          data-aos="fade-left"
        >
          {/* First Section */}
          <div className="accordion-item mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleCollapse("collapse1")}
            >
              <h5
                className="fw-normal text-decoration-none fs-5"
                style={{ cursor: "pointer" }}
              >
                What is "hel mokhék" and what does it offer?
              </h5>
              <i
                className={`fas fa-chevron-down ms-2 ${
                  collapse.collapse1 ? "rotate-180" : ""
                }`}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div
              className={`collapse ${collapse.collapse1 ? "show" : ""}`}
              id="collapse1"
            >
              <div className="card card-body" style={{ width: "100%" }}>
                "hel mokhék" is an online platform dedicated to providing a wide
                range of programming languages and resources. We offer
                comprehensive courses, tutorials, and materials to help
                individuals learn and master various programming languages.
                Whether you’re a beginner or an experienced developer, our
                website provides the tools and knowledge you need to advance
                your coding skills.
              </div>
            </div>
          </div>
          <hr className="w-100 mt-2" />

          {/* Second Section */}
          <div className="accordion-item mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleCollapse("collapse2")}
            >
              <h5
                className="fw-normal text-decoration-none"
                style={{ cursor: "pointer" }}
              >
                How can I choose the right programming language to learn on "hel
                mokhék"?
              </h5>
              <i
                className={`fas fa-chevron-down ms-2 ${
                  collapse.collapse2 ? "rotate-180" : ""
                }`}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div
              className={`collapse ${collapse.collapse2 ? "show" : ""}`}
              id="collapse2"
            >
              <div className="card card-body" style={{ width: "100%" }}>
                Choosing the right programming language depends on your goals
                and interests. On "hel mokhék," we provide detailed descriptions
                and recommendations for each language we offer. Our platform
                includes guides on the applications and career opportunities for
                different languages, so you can make an informed decision based
                on your personal or professional objectives.
              </div>
            </div>
          </div>
          <hr className="w-100 mt-2" />

          {/* Third Section */}
          <div className="accordion-item mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleCollapse("collapse3")}
            >
              <h5
                className="fw-normal text-decoration-none"
                style={{ cursor: "pointer" }}
              >
                What makes "hel mokhék" different from other programming
                education platforms?
              </h5>
              <i
                className={`fas fa-chevron-down ms-2 ${
                  collapse.collapse3 ? "rotate-180" : ""
                }`}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div
              className={`collapse ${collapse.collapse3 ? "show" : ""}`}
              id="collapse3"
            >
              <div className="card card-body" style={{ width: "100%" }}>
                "hel mokhék" stands out due to its curated selection of
                programming languages and practical, hands-on learning approach.
                We focus on providing high-quality content, including real-world
                projects and interactive exercises, to ensure a thorough
                understanding of each language. Additionally, our customer
                support team is always available to assist you with any
                questions or challenges you may encounter during your learning
                journey.
              </div>
            </div>
          </div>
          <hr className="w-100 mt-2" />

          {/* Fourth Section */}
          <div className="accordion-item mb-2">
            <div
              className="d-flex justify-content-between align-items-center"
              onClick={() => toggleCollapse("collapse4")}
            >
              <h5
                className="fw-normal text-decoration-none"
                style={{ cursor: "pointer" }}
              >
                Are there any prerequisites or required skills to start learning
                on "hel mokhék"?
              </h5>
              <i
                className={`fas fa-chevron-down ms-2 ${
                  collapse.collapse4 ? "rotate-180" : ""
                }`}
                style={{ cursor: "pointer" }}
              ></i>
            </div>
            <div
              className={`collapse ${collapse.collapse4 ? "show" : ""}`}
              id="collapse4"
            >
              <div className="card card-body" style={{ width: "100%" }}>
                No prior experience is required to start learning on "hel
                mokhék." Our platform offers courses and resources for all skill
                levels, from absolute beginners to advanced programmers. Each
                course is designed to guide you step-by-step, ensuring you build
                a strong foundation in programming. For more advanced topics, we
                provide resources and support to help you progress smoothly.
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />
      {/* Location section */}
      <section className="text-center mb-5 mt-5 h0">
        <div className="text-center m-5">
          <h2 className="fs-2 ">You can visite our local place!</h2>
        </div>
        <div className="row" data-aos="fade-down">
          <div className="col-lg-7">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12231.872214527178!2d10.1348!3d36.7985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d1b758bbf8c4a1%3A0x29d80a058a3c066e!2sDouar%20Hicher%2C%20Tunis!5e0!3m2!1sen!2stn!4v1698827940667!5m2!1sen!2stn"
              className="h-100 w-100 mb-5"
              style={{ border: "0" }}
              loading="lazy"
            ></iframe>
          </div>
          <div className="col-lg-5">
            <h3 className="fw-bold">
              We create future Tech leaders in Africa and the Middle East
            </h3>
            <p className="fs-4">
              At Hel Mokhék, our mission is to democratize education by
              providing technology enthusiasts with the means to learn technical
              skills. Founded in Tunisia, we have created a safe learning
              environment that allows you to challenge yourself with new skills.
              It's an ideal place to connect with like-minded individuals, even
              outside your professional field. Join us to learn, grow, and
              succeed in the world of technology.
            </p>
            <div
              className="btn btn-outline-primary w-100 fw-bold"
              onClick={handleSignUpClick}
            >
              Sign up
            </div>
          </div>
        </div>
      </section>

      {/* Courses section */}
      <div className="container mb-5">
        <div className="text-center m-5">
          <h2 className="fs-2">Discover all the benefits of the experience!</h2>
        </div>
        <div
          className="row"
          data-aos="fade-up-right"
          style={{
            backgroundColor: "#52796f",
            borderRadius: "15px",
            minWidth: "500px",
            minHeight: "200px",
            padding: "10px",
          }}
        >
          {courses.map((course, index) => (
            <div className="col-lg-4 p-2 col-md-6 col-4" key={index}>
              <div className="card h-100 w-100">
                <img
                  src={course.imgSrc}
                  className="card-img-top"
                  style={{ width: 100 }}
                  alt={course.title}
                />
                <div className="card-body">
                  <h4 className="card-title">{course.title}</h4>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our team section */}
      <div className="container mb-5 " data-aos="flip-left">
        <div className="text-center m-5">
          <h2 className="fs-2">Meet Our Instructors</h2>
        </div>
        <div
          className="row h-100"
          style={{
            backgroundColor: "#d6ccc2",
            borderRadius: "15px",
            minWidth: "500px",
            minHeight: "200px",
            padding: "10px",
          }}
        >
          {team.map((member, index) => (
            <div className="col-lg-4 p-2 col-md-6 col-4" key={index}>
              <div className="card h-100 w-100">
                <img
                  src={member.imgSrc}
                  className="card-img-top instructor-image"
                  alt={member.title}
                />
                <div className="card-body">
                  <h4 className="card-title">{member.title}</h4>
                  <p className="card-text">{member.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* statistics */}
      <div className="container mb-2" data-aos="fade-down">
        <div className="text-center">
          <h2 className="fs-2">Statistics</h2>
          <br />
          <p className="fs-5">
            Discover our active community with frequent new posts, lively
            comments, and increasing visits, reflecting strong user engagement.
          </p>
        </div>
        <section style={{ backgroundColor: "#e9ecef" }} className="border">
          <div className="row p-2">
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div className="align-self-center">
                      <i className="fas fa-pencil-alt text-info fa-3x"></i>
                    </div>
                    <div className="text-end">
                      <h3>878</h3>
                      <p className="mb-0 fw-bold">Registered Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div className="align-self-center">
                      <i className="far fa-comment-alt text-warning fa-3x"></i>
                    </div>
                    <div className="text-end">
                      <h3>156</h3>
                      <p className="mb-0 fw-bold">IT Support</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div className="align-self-center">
                      <i className="fas fa-chart-line text-success fa-3x"></i>
                    </div>
                    <div className="text-end">
                      <h3>64.89 %</h3>
                      <p className="mb-0 fw-bold">Engagement Rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div className="align-self-center">
                      <i className="fas fa-map-marker-alt text-danger fa-3x"></i>
                    </div>
                    <div className="text-end">
                      <h3>14235</h3>
                      <p className="mb-0 fw-bold">Weekly Visitors</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-danger">378</h3>
                      <p className="mb-0 fw-bold">Active Projects</p>
                    </div>
                    <div className="align-self-center">
                      <i className="fas fa-rocket text-danger fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-success">56</h3>
                      <p className="mb-0 fw-bold">Employee Count</p>
                    </div>
                    <div className="align-self-center">
                      <i className="far fa-user text-success fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-warning">64.89 %</h3>
                      <p className="mb-0 fw-bold">Conversion Rate</p>
                    </div>
                    <div className="align-self-center">
                      <i className="fas fa-chart-pie text-warning fa-3x"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-2">
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-info">78</h3>
                      <p className="mb-0 fw-bold">Course Offerings</p>
                    </div>
                    <div className="align-self-center">
                      <i className="fas fa-book-open text-info fa-3x"></i>
                    </div>
                  </div>
                  <div className="px-md-1">
                    <div
                      className="progress mt-3 mb-1 rounded"
                      style={{ height: "7px" }}
                    >
                      <div
                        className="progress-bar bg-info"
                        role="progressbar"
                        style={{ width: "80%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-12 mb-4">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex justify-content-between px-md-1">
                    <div>
                      <h3 className="text-warning">156</h3>
                      <p className="mb-0 fw-bold">User Reviews</p>
                    </div>
                    <div className="align-self-center">
                      <i className="far fa-comments text-warning fa-3x"></i>
                    </div>
                  </div>
                  <div className="px-md-1">
                    <div
                      className="progress mt-3 mb-1 rounded"
                      style={{ height: "7px" }}
                    >
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "35%" }}
                        aria-valuenow="35"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <br />
      {/* higlights section */}
      <div className="container m5">
        <div className="text-center ">
          <h2 className="fs-2 ">Meet Our Team</h2>
          <br />
          <p className="fs-5">
            Discover our active community with frequent new posts, lively
            comments, and increasing visits, reflecting strong user engagement.
          </p>
        </div>
        <section>
          <div className="row">
            {/* Image 1*/}
            {[
              "../images/h1.jpg",
              "../images/h2.jpg",
              "../images/h3.jpg",
              "../images/h4.jpg",
              "../images/h5.jpg",
              "../images/h6.jpg",
              "../images/h7.jpg",
              "../images/h8.jpg",
            ].map((src, index) => (
              <div className="col-3 mb-3" key={index}>
                <div className="card">
                  <img
                    src={src}
                    className="card-img-top"
                    style={{
                      width: "100%",
                      height: "auto",
                      borderradius: "25px;",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/*  partnership */}
      <div className="container mb-5">
        <div className="text-center m-5">
          <h2 className="fs-2 mb-2">Meet Our Busisness Partners</h2>
        </div>
        <div className="row" data-aos="zoom-in">
          <img src="../images/partners.png" alt="" />
        </div>
      </div>

      {/*     contact us    */}
      <MDBContainer fluid className="my-5" data-aos="fade-down-left">
        <MDBRow className="g-0 align-items-center">
          <MDBCol col="6">
            <MDBCard
              className="my-5 cascading-right"
              style={{
                background: "hsla(0, 0%, 100%, 0.55)",
                backdropFilter: "blur(30px)",
              }}
            >
              <MDBCardBody className="p-5 shadow-5 text-center">
                <h2 className="fw-bold mb-5">Sign up now</h2>

                <MDBRow>
                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="First name"
                      id="form1"
                      type="text"
                    />
                  </MDBCol>

                  <MDBCol col="6">
                    <MDBInput
                      wrapperClass="mb-4"
                      label="Last name"
                      id="form2"
                      type="text"
                    />
                  </MDBCol>
                </MDBRow>

                <MDBInput
                  wrapperClass="mb-4"
                  label="Email"
                  id="form3"
                  type="email"
                />
                <MDBInput
                  wrapperClass="mb-4"
                  label="Password"
                  id="form4"
                  type="password"
                />

                <div className="d-flex justify-content-center mb-4">
                  <MDBCheckbox
                    name="flexCheck"
                    value=""
                    id="flexCheckDefault"
                    label="Subscribe to our newsletter"
                  />
                </div>

                <button className="btn btn-primary w-100">Sign Up</button>

                <div className="text-center">
                  <p>or sign up with:</p>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#006494" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#d90429" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#000000" }}
                  >
                    <MDBIcon fab icon="github" size="sm" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol col="6">
            <img
              src="../images/11.png"
              class="w-100 rounded-4 shadow-4 "
              style={{ height: 616 }}
              alt=""
              fluid
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
