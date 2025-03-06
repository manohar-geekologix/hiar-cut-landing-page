import React from "react";
import { FaEnvelopeOpen, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";
import { ArrowUp } from "react-bootstrap-icons";

export default function Footer() {
  
    return (
      <div>
         {/* Footer Start  */}

         <div
          className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-4 col-md-6">
                <h4 className="text-uppercase mb-4">Get In Touch</h4>
                <div className="d-flex align-items-center mb-2">
                  <div className="btn-square bg-dark flex-shrink-0 me-3">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <span>123 Street, New York, USA</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <div className="btn-square bg-dark flex-shrink-0 me-3">
                    <FaPhoneAlt className="text-primary" />
                  </div>
                  <span>+012 345 67890</span>
                </div>
                <div className="d-flex align-items-center">
                  <div className="btn-square bg-dark flex-shrink-0 me-3">
                    <FaEnvelopeOpen className="text-primary" />
                  </div>
                  <span>info@example.com</span>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <h4 className="text-uppercase mb-4">Quick Links</h4>
                <Link className="btn btn-link" href="/About">
                  About Us
                </Link>
                <Link className="btn btn-link" href="/Contact">
                  Contact Us
                </Link>
                <Link className="btn btn-link" href="Services">
                  Our Services
                </Link>
                <Link className="btn btn-link" href="">
                  Terms & Condition
                </Link>
                <Link className="btn btn-link" href="">
                  Support
                </Link>
              </div>
              <div className="col-lg-4 col-md-6">
                <h4 className="text-uppercase mb-4">Newsletter</h4>
                <div className="position-relative mb-4">
                  <input
                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
                <div className="d-flex pt-1 m-n1">
                  <Link
                    className="btn btn-lg-square btn-dark text-primary m-1"
                    href="https://twitter.com"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    className="btn btn-lg-square btn-dark text-primary m-1"
                    href="https://facebook.com"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    className="btn btn-lg-square btn-dark text-primary m-1"
                    href="https://youtube.com"
                  >
                    <FaYoutube />
                  </Link>
                  <Link
                    className="btn btn-lg-square btn-dark text-primary m-1"
                    href="https://linkedin.com"
                  >
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start  mb-3 mb-md-0">
                  &copy;{" "}
                  <Link className="mx-1 " href="#">
                    www.amrithairsaloon.com
                  </Link>
                  |<span className="mx-1">All Right Reserved</span>
                </div>

                <div className="col-md-6 text-center text-md-end">
                  Designed By |
                  <Link className="mx-1" href="#">
                    <span className="mx-1">PANKAJ SINGH</span>
                  </Link>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End  */}

        {/* Arrowup  start*/}
        <Link href="#" class="btn btn-primary btn-lg-square back-to-top">
          <ArrowUp />
        </Link>
        {/* Arrowup  end*/}
        
      </div>
    )
  };

