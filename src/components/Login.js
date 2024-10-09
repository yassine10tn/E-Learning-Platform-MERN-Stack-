import React, { useState } from "react";
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBBtn,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setEmail("");
        setPassword("");

        setTimeout(() => navigate("/"), 2000);
      } else {
        toast.error("User not registered or incorrect credentials.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } catch (error) {
      console.error("Error during login:", error);

      toast.error("An error occurred. Please try again.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <MDBContainer fluid className="my-5 login">
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
                <h2 className="fw-bold mb-5">Login now</h2>

                <form onSubmit={handleLogin}>
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Email"
                    id="form3"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <MDBInput
                    wrapperClass="mb-4"
                    label="Password"
                    id="form4"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <div className="d-flex justify-content-center mb-4">
                    <MDBCheckbox
                      name="flexCheck"
                      value=""
                      id="flexCheckDefault"
                      label="Subscribe to our newsletter"
                    />
                  </div>

                  <button className="w-100 mb-4 btn btn-primary" type="submit">
                    Login
                  </button>
                </form>

                <div className="text-center">
                  <p>or Login with:</p>

                  <MDBBtn tag="a" color="none" className="mx-3">
                    <MDBIcon fab icon="facebook-f" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="twitter" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
                  >
                    <MDBIcon fab icon="google" size="sm" />
                  </MDBBtn>

                  <MDBBtn
                    tag="a"
                    color="none"
                    className="mx-3"
                    style={{ color: "#1266f1" }}
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
              className="w-100 rounded-4 shadow-4"
              style={{ height: 700 }}
              alt=""
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <ToastContainer />
    </>
  );
}

export default Login;
