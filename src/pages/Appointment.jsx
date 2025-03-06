import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { ToastContainer, toast } from 'react-toastify'; // Import toast methods
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    appointmentDate: "", // Single field for appointment date
    startTime: "",
    endTime: "",
    services: "",
  });

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/appointment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({
          firstName: "",
          lastName: "",
          phoneNumber: "",
          email: "",
          streetAddress: "",
          streetAddress2: "",
          city: "",
          state: "",
          appointmentDateMonth: "",
          appointmentDateDay: "",
          appointmentDateYear: "",
          startTime: "",
          endTime: "",
          services: "",
        });
        toast.success(result.message, { autoClose: 3000, position: "top-right" }); // Use string for position
      } else {
        toast.error('Error: ' + result.message, { autoClose: 5000, position: "top-right" }); // Use string for position
      }
    } catch (error) {
      toast.error('An unexpected error occurred. Please try again later.', { autoClose: 5000, position: "top-right" }); // Use string for position
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  return (



    <div className="container mt-5">
      <div className="card shadow">


        <div class="container text-center py-5">
          <h1 class="display-3 text-white text-uppercase mb-3 animated slideInDown">
            Appointment
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center text-uppercase mb-0">
              <li class="breadcrumb-item">
                <Link class="text-white" href="/Home">
                  Home
                </Link >
              </li>

              <li
                class="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Appointment
              </li>
            </ol>
          </nav>
        </div>


        <div className="card-header bg-danger text-white text-center">
          <h3> Appointment Form</h3>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-6">
                <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Please enter a valid phone number"
                  required
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="example@example.com"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="streetAddress" className="form-label">Street Address</label>
              <input
                type="text"
                className="form-control"
                id="streetAddress"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleInputChange}
                placeholder="Street Address"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="streetAddress2"
                name="streetAddress2"
                value={formData.streetAddress2}
                onChange={handleInputChange}
                placeholder="Street Address Line 2"
              />
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="City"
                  required
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  placeholder="State/Province"
                  required
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-md-4">
                <label htmlFor="appointmentDate" className="form-label">Preferred Appointment Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="appointmentDate"
                  name="appointmentDate"
                  value={formData.appointmentDate}
                  onChange={handleInputChange}
                // required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="startTime" className="form-label">Start Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="startTime"
                  name="startTime"
                  value={formData.startTime}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="col-md-4">
                <label htmlFor="endTime" className="form-label">End Time</label>
                <input
                  type="time"
                  className="form-control"
                  id="endTime"
                  name="endTime"
                  value={formData.endTime}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="services" className="form-label">What services are you interested in?</label>
              <textarea
                className="form-control"
                id="services"
                name="services"
                value={formData.services}
                onChange={handleInputChange}
                rows="3"
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>

      </div>
      <ToastContainer />
    </div>
  );
};

export default AppointmentForm;
