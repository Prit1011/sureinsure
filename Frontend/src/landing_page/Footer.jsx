import React from "react";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#004b49", minHeight: "110px" }}
      className="text-light overflow-hidden "
    >
        <div>
      <div className=" text-center">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-2  my-4 text-start ml-0 w-4">
            <h2 className="fw-bold mb-3" style={{ fontSize: "2.8rem" }}>
              Sure<span style={{ color: "#028150ff" }}>Insure</span>
            </h2>
            <p
              style={{
                fontSize: "0.70rem",
                color: "#cfdedf",
                lineHeight: "1.6",
              }}
            >
              Whether it's health, life, car, home, or business insurance, we’re
              here to ensure you feel confident about your future. With a
              commitment to trust, transparency, and 24/7 support, SureInsure is
              built on delivering smart and reliable coverage for every stage of
              life.
            </p>
          </div>

          <div className="col-2 text-start my-5">
            <h6
              className="fw-semibold mb-4 text-start px-5"
              style={{ fontSize: "1rem", color: "#ffffff" }}
            >
              Quick Links
            </h6>
            <div className="text-start px-5" style={{ lineHeight: "2" }}>
              <div style={{ fontSize: "0.9rem", color: "#cfdedf" }}>Home</div>
              <div style={{ fontSize: "0.9rem", color: "#cfdedf" }}>
                About Us
              </div>
              <div style={{ fontSize: "0.9rem", color: "#cfdedf" }}>
                Services
              </div>
            </div>
          </div>

          <div className="col-2 text-start  my-5">
            <h6
              className="fw-semibold mb-4 px-5"
              style={{ fontSize: "1rem", color: "#ffffff" }}
            >
              Usefull Links
            </h6>
            <div className="text-start px-5" style={{ lineHeight: "2" }}>
              <div style={{ fontSize: "0.9rem", color: "#cfdedf" }}>
                Terms &amp; Condition
              </div>
              <div style={{ fontSize: "0.9rem", color: "#cfdedf" }}>
                Privacy Policy
              </div>
            </div>
          </div>

          <div className="col-2 text-start my-5">
            <h6
              className="fw-semibold mb-4 px-5"
              style={{ fontSize: "1rem", color: "#ffffff" }}
            >
              Our Services
            </h6>
            <div className="text-start px-5" style={{ lineHeight: "2" }}>
              <div style={{ fontSize: "0.9rem", color: "#cfdedf" }}>
                Health Insurance
              </div>
              <div style={{ fontSize: "0.9rem", color: "#cfdedf" }}>
                Life Insurance
              </div>
              <div style={{ fontSize: "0.9rem", color: "#cfdedf" }}>
                Business Insurance
              </div>
              <div style={{ fontSize: "0.9rem", color: "#cfdedf" }}>
                Car Insurance
              </div>
            </div>
          </div>   
      </div>
      <div className="col-2"></div>
          <hr
            style={{ borderColor: "#babebeff", width: "66%", margin: "0 auto" }}
            className="my-0 mt-0"
          />
          <div
            className="text-start py-4" 
            style={{ color: "#cfdedf", fontSize: "0.78rem", paddingLeft:"16rem" }}
          >
            Copyright © 2025 SureInsure. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
