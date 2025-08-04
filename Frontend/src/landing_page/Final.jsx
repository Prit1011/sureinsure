import React from "react";
import { ArrowLeft } from 'lucide-react';

function Final() {
  return (
    <section
      className="container-fluid py-5 px-4  hero-section"
      style={{
        marginTop:"3rem",
        backgroundColor: "#004f4b",
        minHeight: "650px",
        padding: "4rem 1rem",
        position: "relative",
        overflow: "hidden",
        zIndex: 1,
        marginBottom:"2rem"
      }}
    >
      {/* Curved background at the bottom */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "70px",
          backgroundColor: "#ffffff",
          borderTopLeftRadius: "100% 100px",
          borderTopRightRadius: "100% 100px",

          zIndex: 0,
        }}
      ></div>
      
      <div className="row align-items-center">
        <div className="col-2 d-none d-lg-block"></div>
         <div className="col-lg-4 text-center position-relative hero-right order-1 order-lg-0">
          {/* left side */}
          <img
            src="media/Final1.png"
            alt="Insurance Discussion"
            className="img-fluid hero-img mt-5"
            style={{ maxWidth: "130%", height: "25rem" }}
          />
        </div>
        {/* right side */}
        <div className="col-lg-5 text-start position-relative hero-right order-0 order-lg-1">
          <h2
            className="fw-normal hero-title text-white "
            style={{ fontSize: "32px", marginTop:"4rem", paddingLeft: "1.6rem" }}
          >
            Protect What Matters Most <br /> Get Your{" "}
            <strong className="fw-bolder">Free Insurance Quote</strong> Now!
          </h2>
            <p className=" mb-4 hero-desc pt-3" style={{ fontSize: "12px", lineHeight: "1.8", color:"white", paddingLeft: "1.6rem" }}>
            No matter if it s your home, health, car, or business, we ve got you covered. Request <br />
            your free quote today and enjoy the confidence that comes from personalized, <br />
            dependable insurance solutions built around your needs.
          </p>
           <button className='btn navbtn btn-light px-3  py-2 mt-5 mb-4 hero-btn fw-medium' style={{marginLeft:"1.6rem", color:"#004f4b", fontSize:"0.90rem"}}>
                    Get Free Quote
                </button>
           <svg className="svgNo"
      width="220"
      height="70"
      viewBox="0 0 160 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <marker
          id="arrowhead"
          markerWidth="6"
          markerHeight="10"
          refX="5"
          refY="5"
          orient="auto"
        >
          <path d="M10 0 L0 5 L10 10" fill="white" />
        </marker>
      </defs>
      <path
        d="M10 90 C60 100, 100 80, 130 60"
        stroke="white"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
        markerStart="url(#arrowhead)"
      />
    </svg>
        </div>
      </div>
    </section>
  );
}

export default Final;
