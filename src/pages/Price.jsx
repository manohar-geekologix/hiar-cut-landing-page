import React from 'react'
import { ArrowUp } from 'react-bootstrap-icons';
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const PricingPlan = () => {
  return (
    <div>
        {/* <!-- Spinner Start --> */}
    {/* <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div> */}
    {/* <!-- Spinner End --> */}

    {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-5">
            <h1 class="display-3 text-white text-uppercase mb-3 animated slideInDown">Pricing Plan</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center text-uppercase mb-0">
                    <li class="breadcrumb-item"><Link class="text-white" href="#">Home</Link ></li>
                    <li class="breadcrumb-item"><Link class="text-white" href="#">Pages</Link ></li>
                    <li class="breadcrumb-item text-primary active" aria-current="page">Pricing Plan</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Price Start --> */}
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-0">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="bg-secondary h-100 d-flex flex-column justify-content-center p-5">
                        <p class="d-inline-flex bg-dark text-primary py-1 px-4 me-auto">Price & Plan</p>
                        <h1 class="text-uppercase mb-4">Check Out Our Barber Services And Prices</h1>
                        <div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Haircut</h6>
                                <span class="text-uppercase text-primary">$29.00</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Beard Trim</h6>
                                <span class="text-uppercase text-primary">$35.00</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Mans Shave</h6>
                                <span class="text-uppercase text-primary">$23.00</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Hair Dyeing</h6>
                                <span class="text-uppercase text-primary">$19.00</span>
                            </div>
                            <div class="d-flex justify-content-between border-bottom py-2">
                                <h6 class="text-uppercase mb-0">Mustache</h6>
                                <span class="text-uppercase text-primary">$15.00</span>
                            </div>
                            <div class="d-flex justify-content-between py-2">
                                <h6 class="text-uppercase mb-0">Stacking</h6>
                                <span class="text-uppercase text-primary">$39.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="h-100">
                        <img class="img-fluid h-100" src="images/price.jpg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Price End --> */}


    

    {/* <!-- Back to Top --> */}


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
  )
}

export default PricingPlan;
