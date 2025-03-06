"use client";
import React, { useEffect, useState } from "react";
import { FaCut, FaArrowRight, FaAngleDown } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button, Form } from 'react-bootstrap';

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  // Check if user is logged in on component mount
  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  // Toggle between Sign Up and Login forms
  const toggleMode = () => {
    setIsSignUp(!isSignUp);
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission (Login or Sign Up)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(isSignUp ? "/api/signup" : "/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    const result = await response.json();

    if (result.success) {
      toast.success(result.message, { autoClose: 3000, position: "top-right" });
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");

      if (isSignUp) {
        toggleMode();  // Switch to login mode after signup
      } else {
        setShowModal(false);  // Hide modal after login
        router.push("/");     // Redirect to home after login
      }
    } else {
      toast.error("Error: " + result.message, { autoClose: 5000, position: "top-right" });
    }
  };

  // Handle appointment click
  const handleAppointmentClick = () => {
    if (!isLoggedIn) {
      setShowModal(true);  // Show login modal if not logged in
    } else {
      // Safely navigate after ensuring modal and state updates
      setTimeout(() => {
        router.replace("/Appointment"); // Replace route after logged in
      }, 100);  // Add slight delay to ensure stable routing
    }
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn"); // Clear login state
    setTimeout(() => {
      router.replace("/"); // Replace route after logged in
    }, 100);

  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-lg-0 px-lg-4 wow fadeIn sticky-top" data-wow-delay="0.1s">
        <Link href="/Home" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="mb-0 text-primary text-uppercase">
            <FaCut className="me-3" />
            HairCut
          </h1>
        </Link>
        <div className="d-flex ms-auto fs-6">
          <button type="button" className="navbar-toggler me-2 custom-font" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link href="/Home" className={`nav-item nav-link ${router?.pathname === "/Home" ? "active" : ""}`}>Home</Link>
            <Link href="/About" className={`nav-item nav-link ${router?.pathname === "/About" ? "active" : ""}`}>About</Link>
            <Link href="/Services" className={`nav-item nav-link ${router?.pathname === "/Services" ? "active" : ""}`}>Service</Link>
            <div className="nav-item dropdown">
              <Link href="#" className="nav-link dropdown-toggle">Pages <FaAngleDown className="rotate-arrow" /></Link>
              <div className="dropdown-menu m-0">
                <Link href="/Price" className={`dropdown-item ${router?.pathname === "/Price" ? "active" : ""}`}>Pricing Plan</Link>
                <Link href="/Team" className={`dropdown-item ${router?.pathname === "/Team" ? "active" : ""}`}>Our Barber</Link>
                <Link href="/Workinghour" className={`dropdown-item ${router?.pathname === "/Workinghour" ? "active" : ""}`}>Working Hours</Link>
                <Link href="/Testimonial" className={`dropdown-item ${router?.pathname === "/Testimonial" ? "active" : ""}`}>Testimonial</Link>
              </div>
            </div>
            <Link href="/Contact" className={`nav-item nav-link ${router?.pathname === "/Contact" ? "active" : ""}`}>Contact</Link>
            <div className=" nav-item nav-link  ">
              <Link
                href="#"
                className=" text-white btn btn-primary custom-radius btn-outline-dark  px-4 ms-auto"
                onClick={() => {
                  if (isLoggedIn) {
                    handleLogout(); // Call handleLogout if logged in
                  } else {
                    setShowModal(true); // Show the login modal if not logged in
                  }
                }}
              >
                {isLoggedIn ? 'Logout' : 'Login'}
              </Link>
            </div>

          </div>
        </div>
        <div className="d-sm-block d-flex justify-content-end my-sm-2 my-3 w-sm-100 w-auto">

          <Link
            href="#"
            className="btn btn-primary btn-outline-dark custom-font  custom-radius text-white py-2 px-lg-4 d-lg-block"
            onClick={handleAppointmentClick}
          >
            Appointment
            <FaArrowRight className="ms-3 rotate-arrow" />
          </Link>
        </div>
        {/* <div className="d-lg-none rounded-full">
          <span

            className="btn btn-primary btn-outline-dark text-white custom-radius  py-2 px-2 d-lg-none ms-auto"
            onClick={handleAppointmentClick}
          >
            Appointment
            <FaArrowRight className="ms-3 rotate-arrow" />
          </span>
        </div> */}
      </nav>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{isSignUp ? 'Sign Up' : 'Login'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            {isSignUp && (
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Enter username"
                  required
                />
              </Form.Group>
            )}

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter password"
                required
              />
            </Form.Group>

            {isSignUp && (
              <Form.Group className="mb-3" controlId="confirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm password"
                  required
                />
              </Form.Group>
            )}

            <Button type="submit" className="btn btn-primary w-100">
              {isSignUp ? 'Sign Up' : 'Login'}
            </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <p className="text-center">
            {isSignUp ? (
              <>
                Already have an account? <a href="#" onClick={toggleMode}>Login</a>
              </>
            ) : (
              <>
                Don&apos;t have an account? <a href="#" onClick={toggleMode}>Sign Up</a>
              </>
            )}
          </p>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={5000} />
    </div>
  );
};

export default Navbar;
