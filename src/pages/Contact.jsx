import React from 'react'

import { ArrowUp } from 'react-bootstrap-icons';

import { FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@/styles/bootstrap.scss';
// import './style.css';


const Contactus = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3ad05f8c-c94a-4afe-85d5-fb5ab19580d0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
       
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert("form submitted !") ;
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div>
        {/* <!-- Spinner Start -->
    <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->


    

    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
            <h1 className="display-3 text-white text-uppercase mb-3 animated slideInDown">Contact</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb justify-content-center text-uppercase mb-0">
                    <li className="breadcrumb-item"><Link className="text-white" href="#">Home</Link ></li>
                    <li className="breadcrumb-item"><Link className="text-white" href="#">Pages</Link ></li>
                    <li className="breadcrumb-item text-primary active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- Contact Start --> */}
    <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-0">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div className="bg-secondary p-5">
                        <p className="d-inline-block bg-dark text-primary py-1 px-4">Contact Us</p>
                        <h1 className="text-uppercase mb-4">Have Any Query? Please Contact Us!</h1>
                       <form onSubmit={onSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text"
                                        name='name'
                                        className="form-control bg-transparent" id="name" placeholder="Your Name"/>
                                        <label for="name">Your Name</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email"
                                        name='email'
                                        className="form-control bg-transparent" id="email" placeholder="Your Email"/>
                                        <label for="email">Your Email</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text"
                                        name='subject'
                                        className="form-control bg-transparent" id="subject" placeholder="Subject"/>
                                        <label for="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea 
                                        name='message'
                                        className="form-control bg-transparent" placeholder="Leave a message here" id="message" style={{ height: '100px' }}></textarea>
                                        <label for="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div className="h-100" style={{ minHeight: '400px' }}>
                        <iframe className="google-map w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" style={{
                            filter: 'grayscale(100%) invert(92%) contrast(83%)',
                            border: '0',
                          }}></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- Contact End --> */}


    
    {/* <!-- Back to Top --> */}
    <Link href="#" className="btn btn-primary btn-lg-square back-to-top"><ArrowUp/></Link >


    {/* <!-- JavaScript Libraries -->
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

export default Contactus;
