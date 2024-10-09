import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Signup() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = () => {
    console.log("Form Data:", formData);

    fetch("http://localhost:8080/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);

        toast.success("User registered successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
        });

        setTimeout(() => navigate("/"), 3000);
      })
      .catch((error) => {
        console.error("Error:", error);

        toast.error("Failed to register user. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  return (
    <MDBContainer fluid className="my-5">
      <ToastContainer />

      <MDBRow className="g-0 align-items-center">
        <MDBCol col="6">
          <MDBCard
            className="my-5 cascading-right"
            style={{
              background: "hsla(0, 0%, 100%, 0.55)",
              backdropFilter: "blur(30px)",
            }}
          >
            <MDBCardBody
              className="p-5 shadow-5 text-center"
              style={{ height: 700 }}
            >
              <h2 className="fw-bold mb-5">Sign up now</h2>
              <MDBRow>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="First name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    type="text"
                  />
                </MDBCol>
                <MDBCol col="6">
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Last name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    type="text"
                  />
                </MDBCol>
              </MDBRow>
              <MDBInput
                wrapperClass="mb-4"
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
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
              <button className="btn btn-primary w-100" onClick={handleSignUp}>
                Sign Up
              </button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol col="6">
          <img
            src="../images/11.png"
            className="w-100 rounded-4 shadow-4"
            style={{ height: 700 }}
            alt=""
            fluid
          />
        </MDBCol>
      </MDBRow>
      <br />
    </MDBContainer>
  );
}

export default Signup;
