import React from 'react';
import { CheckCircle, DollarSign, FileText, Clock } from "lucide-react";

function Hero() {
    return ( 
          <section className="container-fluid py-5 px-4 bg-white  hero-section " style={{height:"100%"}}>
      <div className="row align-items-center">
        {/* Left Padding Column */}
        <div className="col-2 d-none d-lg-block"></div>

        {/* Left Content */}
        <div className="col-lg-4 mb-5 mb-lg-0 hero-left">
          <p className="text-success fw-medium mb-2 hero-subtitle" style={{ letterSpacing: "1.5px", fontSize: "11px" }}>
            ● WHY CHOOSE US
          </p>
          <h2 className="fw-normal hero-title" style={{ fontSize: "35px", color: "rgb(1, 67, 1)" }}>
            Why You <strong className="fw-bolder">Should Choose</strong> Our Insurance Policies
          </h2>
          <p className="text-muted mt-3 mb-4 hero-desc" style={{ fontSize: "12px", lineHeight: "1.8" }}>
            Select from our insurance plans designed for comprehensive coverage, personalized support,
            and competitive pricing. We ensure a seamless experience with fast claims processing and expert
            guidance—giving you peace of mind and protection for your future.
          </p>

          {/* Features */}
          <div className="row gy-4  hero-feature mt-2">
            <div className="col-6 d-flex mt-0">
              <div className="me-3 d-flex align-items-center justify-content-center bg-success rounded-circle icon-circle" style={{ width: "45px", height: "45px" }}>
                <FileText size={22} className="text-white" />
              </div>
              <div>
                <p className="fw-semibold mb-1 mt-2 feature-text" style={{ fontSize: "15px", color: "rgb(1, 67, 1)" }}>Full Control of Your Policy</p>
                <hr className='feature-separator' style={{ color: "grey" }} />
              </div>
            </div>
            <div className="col-6 d-flex mt-0">
              <div className="me-3 d-flex align-items-center justify-content-center bg-success rounded-circle icon-circle" style={{ width: "53px", height: "45px" }}>
                <DollarSign size={22} className="text-white" />
              </div>
              <div>
                <p className="fw-semibold mb-1 mt-2 feature-text " style={{ fontSize: "15px", color: "rgb(1, 67, 1)" }}>Affordable Premium Options</p>
                <hr className='feature-separator' style={{ color: "grey" }} />
              </div>
            </div>
            <div className="col-6 d-flex mt-0">
              <div className="me-3  d-flex align-items-center justify-content-center bg-success rounded-circle icon-circle" style={{ width: "45px", height: "45px" }}>
                <Clock size={22} className="text-white" />
              </div>
              <div>
                <p className="fw-semibold mb-1 mt-2 feature-text " style={{ fontSize: "15px", color: "rgb(1, 67, 1)" }}>Quick & Simple Process</p>
              </div>
            </div>
            <div className="col-6 d-flex mt-0">
              <div className="me-3 d-flex align-items-center justify-content-center bg-success rounded-circle icon-circle" style={{ width: "45px", height: "45px" }}>
                <CheckCircle size={22} className="text-white" />
              </div>
              <div>
                <p className="fw-semibold mb-1 mt-2 feature-text " style={{ fontSize: "15px", color: "rgb(1, 67, 1)" }}>24/7 Customer Support</p>
              </div>
            </div>
          </div>

          <button className='btn navbtn btn-success px-3 px-3 py-2 mt-5 mb-4 hero-btn'
                >
                    Get Free Quote
                </button>
        </div>

        {/* Right Image */}
        <div className="col-lg-4 text-center position-relative  hero-right">
            <img
              src="media/WhyUs.png"
              alt="Insurance Discussion"
              className="img-fluid hero-img"
              style={{  maxWidth: "130%", height: "30rem" }}
            />
        </div>

        {/* Right Padding Column */}
        <div className="col-2 d-none d-lg-block"></div>
      </div>
    </section>
     );
}

export default Hero;