import React from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import Link from "next/link";

const PageNotFound = () => {
  return (
    <div>


    {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div class="container text-center py-5">
            <h1 class="display-3 text-white text-uppercase mb-3 animated slideInDown">404 Error</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol class="breadcrumb justify-content-center text-uppercase mb-0">
                    <li class="breadcrumb-item"><Link class="text-white" href="/Home">Home</Link ></li>
                   
                    <li class="breadcrumb-item text-primary active" aria-current="page">404</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}


    {/* <!-- 404 Start --> */}
    <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div class="container text-center">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                <FaExclamationTriangle className="display-1 text-primary" />
                    <h1 class="display-1">404</h1>
                    <h1 class="mb-4">Page Not Found</h1>
                    <p class="mb-4">We’re sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                    <Link class="btn btn-primary py-3 px-5" href="">Go Back To Home</Link >
                </div>
            </div>
        </div>
    </div>
    {/* <!-- 404 End --> */}

    </div>
  )
}

export default PageNotFound;
