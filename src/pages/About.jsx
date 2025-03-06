import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { ArrowUp } from "react-bootstrap-icons";
import Link from "next/link";

// import '@/styles/bootstrap.scss';


export default function Aboutus  ()  {
  return (
    <div>
     
      {/* <!-- Page Header Start --> */}
      <div
        className="container-fluid page-header py-5 mb-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container text-center py-5">
          <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">
            About
          </h1>
          <nav aria-label="breadcrumb animated slideInDown">
            <ol className="breadcrumb justify-content-center text-uppercase mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" href="/Home">
                  Home
                </Link >
              </li>
           
              <li
                className="breadcrumb-item text-primary active"
                aria-current="page"
              >
                About
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- About Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid w-75 align-self-end"
                  src="images/about.jpg"
                  alt=""
                />
                <div
                  className="w-50 bg-secondary p-5"
                  style={{ marginTop: "-25%" }}
                >
                  <h1 className="text-uppercase text-primary mb-3">25 Years</h1>
                  <h2 className="text-uppercase mb-0">Experience</h2>
                </div>
              </div>
            </div>
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p className="d-inline-block bg-secondary text-primary py-1 px-4">
                About Us
              </p>
              <h1 className="text-uppercase mb-4">
                More Than Just A Haircut. Learn More About Us!
              </h1>
              <p>
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p className="mb-4">
                Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No
                stet est diam rebum amet diam ipsum. Clita clita labore, dolor
                duo nonumy clita sit at, sed sit sanctus dolor eos.
              </p>
              <div className="row g-4">
                <div className="col-md-6">
                  <h3 className="text-uppercase mb-3">Since 1990</h3>
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos.
                  </p>
                </div>
                <div className="col-md-6">
                  <h3 className="text-uppercase mb-3">1000+ clients</h3>
                  <p className="mb-0">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- About End --> */}

      {/* <!-- Team Start --> */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <p className="d-inline-block bg-secondary text-primary py-1 px-4">
              Our Barber
            </p>
            <h1 className="text-uppercase">Meet Our Barber</h1>
          </div>
          <div className="row g-4">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src="images/team-1.jpg" alt="" />
                  <div className="team-social">
                    <Link className="btn btn-square" href="#">
                      <FaFacebookF />
                    </Link >
                    <Link className="btn btn-square" href="#">
                      <FaTwitter />
                    </Link >
                    <Link className="btn btn-square" href="#">
                      <FaInstagram />
                    </Link >
                  </div>
                </div>
                <div className="bg-secondary text-center p-4">
                  <h5 className="text-uppercase">Barber Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src="images/team-2.jpg" alt="" />
                  <div className="team-social">
                    <Link className="btn btn-square" href="#">
                      <FaFacebookF />
                    </Link >
                    <Link className="btn btn-square" href="#">
                      <FaTwitter />
                    </Link >
                    <Link className="btn btn-square" href="#">
                      <FaInstagram />
                    </Link >
                  </div>
                </div>
                <div className="bg-secondary text-center p-4">
                  <h5 className="text-uppercase">Barber Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src="images/team-3.jpg" alt="" />
                  <div className="team-social">
                    <Link className="btn btn-square" href="#">
                      <FaFacebookF />
                    </Link >
                    <Link className="btn btn-square" href="#">
                      <FaTwitter />
                    </Link >
                    <Link className="btn btn-square" href="#">
                      <FaInstagram />
                    </Link >
                  </div>
                </div>
                <div className="bg-secondary text-center p-4">
                  <h5 className="text-uppercase">Barber Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src="images/team-4.jpg" alt="" />
                  <div className="team-social">
                    <Link className="btn btn-square" href="#">
                      <FaFacebookF />
                    </Link >
                    <Link className="btn btn-square" href="#">
                      <FaTwitter />
                    </Link >
                    <Link className="btn btn-square" href="#">
                      <FaInstagram />
                    </Link >
                  </div>
                </div>
                <div className="bg-secondary text-center p-4">
                  <h5 className="text-uppercase">Barber Name</h5>
                  <span className="text-primary">Designation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Team End --> */}

     
      {/* <!-- Back to Top --> */}
      <Link href="#" className="btn btn-primary btn-lg-square back-to-top">
        <ArrowUp />
      </Link >
      
    </div>
  );
}


