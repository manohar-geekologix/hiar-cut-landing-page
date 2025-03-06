"use client";

import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/bootstrap.scss";

import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      require('bootstrap/dist/js/bootstrap.bundle.min.js'); // Import Bootstrap JS
    }
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />;
      <Footer></Footer>

    </>
  );
}
