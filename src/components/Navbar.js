import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FaUser } from "react-icons/fa";
import Wishlist from "./wishlist";

const NavScrollExample = () => {
  const [wishlistCount, setWishlistCount] = useState(0);

  const fetchWishlistCount = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/wishlist");
      const data = await response.json();
      setWishlistCount(data.length); 
    } catch (error) {
      console.error("Error fetching wishlist count:", error);
    }
  };

  useEffect(() => {
    fetchWishlistCount(); 
    const interval = setInterval(fetchWishlistCount, 5000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <>
      <Navbar expand="lg" className="bg-light w-100" style={{ padding: 8 }}>
        <Container fluid>
          <Navbar.Brand
            href="/"
            className="text-info p-2 fw-bold fs-4 helmokhek"
          >
            Hel Mokhek
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <div className="d-flex w-100 justify-content-between align-items-center">
              <Nav className="me-auto">
                <Nav.Link href="/" className="fw-bold">
                  Home
                </Nav.Link>
                <Nav.Link href="/about" className="fw-bold">
                  Discover Hel Mokhek
                </Nav.Link>
                <NavDropdown
                  title="Our courses"
                  className="fw-bold"
                  id="navbarScrollingDropdown"
                >
                  <NavDropdown.Item as={Link} to="/python">
                    Python
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/java">
                    Java
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/react">
                    React
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/angular">
                    Angular
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/springboot">
                    Springboot
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/flutter">
                    Flutter
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/kotlin">
                    Kotlin
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/item">
                    Something Else
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>

              <div className="d-flex justify-content-around align-items-center gap-10">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                <div>
                  <i
                    className="fa-solid fa-cart-shopping text-primary px-3 fs-5 p-1 ms-2"
                    style={{ cursor: "pointer" }}
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                  >
                    <sup className="fs-6 text-dark fw-bold">
                      <sup>{wishlistCount}</sup>
                    </sup>
                  </i>
                </div>
                <div className="dropdown">
                  <a
                    className="btn btn-light dropdown-toggle"
                    href="#"
                    role="button"
                    id="dropdownMenuLink"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <FaUser size={19} color="black" />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuLink"
                    style={{ maxHeight: "180px", overflowY: "auto" }}
                  >
                    <li>
                      <Link className="dropdown-item" to="/login">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/signup">
                        Sign Up
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Wishlist />
    </>
  );
};

export default NavScrollExample;
