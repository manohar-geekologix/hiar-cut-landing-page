import React from "react";
import {  FaPlus } from "react-icons/fa";
import Link from "next/link";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@/styles/bootstrap.scss';
// import './style.css';

const Services = () => {
  return (
    <div>
     
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div class="container text-center py-5">
          <h1 class="display-3 text-white text-uppercase mb-3 animated slideInDown">
            Service
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol class="breadcrumb justify-content-center text-uppercase mb-0">
              <li class="breadcrumb-item">
                <Link class="text-white" href="#">
                  Home
                </Link >
              </li>
       
              <li
                class="breadcrumb-item text-primary active"
                aria-current="page"
              >
                Service
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Service Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p class="d-inline-block bg-secondary text-primary py-1 px-4">
              Services
            </p>
            <h1 class="text-uppercase">What We Provide</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                <div
                  class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img class="img-fluid" src="images/haircut.png" alt="" />
                </div>
                <div class="ps-4">
                  <h3 class="text-uppercase mb-3">Haircut</h3>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam.
                  </p>
                  <span class="text-uppercase text-primary">From $15</span>
                </div>
                <Link class="btn btn-square" href="">
                  <FaPlus className="text-primary" />
                </Link >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                <div
                  class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img class="img-fluid" src="images/beard-trim.png" alt="" />
                </div>
                <div class="ps-4">
                  <h3 class="text-uppercase mb-3">Beard Trim</h3>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam.
                  </p>
                  <span class="text-uppercase text-primary">From $15</span>
                </div>
                <Link class="btn btn-square" href="">
                  <FaPlus className="text-primary" />
                </Link >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                <div
                  class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img class="img-fluid" src="images/mans-shave.png" alt="" />
                </div>
                <div class="ps-4">
                  <h3 class="text-uppercase mb-3">Mans Shave</h3>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam.
                  </p>
                  <span class="text-uppercase text-primary">From $15</span>
                </div>
                <Link class="btn btn-square" href="">
                  <FaPlus className="text-primary" />
                </Link >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                <div
                  class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img class="img-fluid" src="images/hair-dyeing.png" alt="" />
                </div>
                <div class="ps-4">
                  <h3 class="text-uppercase mb-3">Hair Dyeing</h3>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam.
                  </p>
                  <span class="text-uppercase text-primary">From $15</span>
                </div>
                <Link class="btn btn-square" href="">
                  <FaPlus className="text-primary" />
                </Link >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                <div
                  class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img class="img-fluid" src="images/mustache.png" alt="" />
                </div>
                <div class="ps-4">
                  <h3 class="text-uppercase mb-3">Mustache</h3>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam.
                  </p>
                  <span class="text-uppercase text-primary">From $15</span>
                </div>
                <Link class="btn btn-square" href="">
                  <FaPlus className="text-primary" />
                </Link >
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                <div
                  class="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <img class="img-fluid" src="images/stacking.png" alt="" />
                </div>
                <div class="ps-4">
                  <h3 class="text-uppercase mb-3">Stacking</h3>
                  <p>
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam.
                  </p>
                  <span class="text-uppercase text-primary">From $15</span>
                </div>
                <Link class="btn btn-square" href="">
                  <FaPlus className="text-primary" />
                </Link >
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Service End --> */}

      {/* <!-- Testimonial Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p class="d-inline-block bg-secondary text-primary py-1 px-4">
              Testimonial
            </p>
            <h1 class="text-uppercase">What Our Clients Say!</h1>
          </div>
          <div
            class="owl-carousel testimonial-carousel wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div
              class="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='images/testimonial-1.jpg' alt=''>"
            >
              <h4 class="text-uppercase">Client Name</h4>
              <p class="text-primary">Profession</p>
              <span class="fs-5">
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                clita erat magna elitr erat sit sit erat at rebum justo sea
                clita.
              </span>
            </div>
            <div
              class="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='images/testimonial-2.jpg' alt=''>"
            >
              <h4 class="text-uppercase">Client Name</h4>
              <p class="text-primary">Profession</p>
              <span class="fs-5">
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                clita erat magna elitr erat sit sit erat at rebum justo sea
                clita.
              </span>
            </div>
            <div
              class="testimonial-item text-center"
              data-dot="<img class='img-fluid' src='images/testimonial-3.jpg' alt=''>"
            >
              <h4 class="text-uppercase">Client Name</h4>
              <p class="text-primary">Profession</p>
              <span class="fs-5">
                Clita clita tempor justo dolor ipsum amet kasd amet duo justo
                duo duo labore sed sed. Magna ut diam sit et amet stet eos sed
                clita erat magna elitr erat sit sit erat at rebum justo sea
                clita.
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}

      

      {/* 
    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/wow/wow.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script> */}
    </div>
  );
};

export default Services;
