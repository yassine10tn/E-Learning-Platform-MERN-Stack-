import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Jumbotron = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 1300,
      once: false,
    });
  }, []);

  const handleSignUpClick = () => {
    navigate("/Signup");
  };

  const [collapse, setCollapse] = useState({
    collapse1: false,
    collapse2: false,
    collapse3: false,
    collapse4: false,
  });

  const toggleCollapse = (collapseKey) => {
    setCollapse((prevState) => ({
      ...prevState,
      [collapseKey]: !prevState[collapseKey],
    }));
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div data-aos="fade-left">
            <div className="jumbotron text-center">
              <h1 className="display-4 text-info custom-jumbotron">
                Welcome to <strong>Hel Mokhek</strong> Platform!
              </h1>
              <p className="mt-5 fs-4">
                We offer a wide range of online courses to help you learn new
                skills and advance your career.
              </p>
              <hr className="my-4" />
              <p className="fs-5">
                Sign up today and start your learning journey with us.
              </p>
            </div>
          </div>

          <div data-aos="fade-right" className="text-center mt-3">
            <button
              className="btn btn-outline-primary p-2 w-50"
              onClick={handleSignUpClick}
            >
              Sign Up Now
            </button>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
