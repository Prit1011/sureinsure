import React from "react";
import { MessageSquareQuote, CheckCircle } from "lucide-react";

export default function InsuranceComponent() {
  return (
    <section className="container-fluid bg-white px-4 py-5">
      <div className="row align-items-center">
        {/* Image with overlay boxes */}
        <div className="col-md-2"></div>
        <div className="col-md-4 position-relative ps-md-4">
          <img
            src="media/About.jpg"
            alt="Happy Group"
            className="img-fluid insurance-image "
            style={{
              height: "500px",
              width: "90%",
              objectFit: "cover",
              marginLeft: "-3rem",
            }}
          />

          {/* Fast Claims box */}
          <div
            className="position-absolute bg-white rounded-3 py-2 d-flex shadow fast-claims-box"
            style={{
              top: "3rem",
              right: "2rem", // shift rightward relative to container
              paddingLeft: "0.5rem",
              paddingRight: "4.5rem",
            }}
          >
            <CheckCircle className="text-success" width={20} height={20} />
            <div className="small fw-medium">
              Fast Claims <br /> Processing
            </div>
          </div>

          {/* Quote box */}
          <div
            className="position-absolute bg-white rounded-3 p-2 shadow quote-box"
            style={{ bottom: "4rem", right: "4%", maxWidth: "250px" }}
          >
            <div className="position-relative">
              <MessageSquareQuote
                className="position-absolute text-success"
                style={{ top: "-1.24rem", left: "-1.20rem" }}
                width={24}
                height={28}
              />
              <div className="pt-1 ps-2 fw-light" style={{fontWeight:"2px"}}>
                Exceptional service and peace of mind.{" "}
                <strong style={{fontWeight:"6px"}}>Highly recommend!</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Text content */}
        <div className="col-md-4 mt-4 mt-md-0">
          <p
            className="d-flex align-items-center gap-2 text-success fw-semibold mb-2"
            style={{ fontSize: "0.7rem", letterSpacing: "2px" }}
          >
            <span
              className="d-inline-block rounded-circle bg-success"
              style={{ width: "7px", height: "7px" }}
            ></span>
            ABOUT US
          </p>

          <h2 className="h2 fw-normal mb-3" style={{ color: "rgb(1, 67, 1)" }}>
            Reliable Insurance <span className="fw-bold">Plans</span> for <br />{" "}
            All Your <span className="fw-bold">Needs</span>
          </h2>

          <p className="text-secondary mb-4 " style={{ fontSize: "0.8rem" }}>
            We offer a diverse range of plans designed to match your unique
            requirements. <br /> Our goal is to help you choose the right
            coverage so you can enjoy peace of mind every day.
          </p>

          <ul className="list-unstyled mb-4">
            {[
              "Customer-First Service",
              "Clear, Honest Communication",
              "24/7 Support, All Year Round",
              "Specialized Coverage",
            ].map((item, index) => (
              <li key={index} className="d-flex align-items-start gap-2 mb-2">
                <CheckCircle
                  className="text-success mt-1"
                  width={16}
                  height={16}
                />
                <span
                  className="fw-medium lh-lg small"
                  style={{ color: "rgba(1, 53, 1, 0.87)" }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center gap-3">
  <button className="btn navbtn btn-success px-3 px-3 py-2 " style={{width:"9rem"}}>
    Get Free Quote
  </button>

            <div
              className="position-relative ms-sm-auto navbtn stats-box" 
              style={{
                marginTop: "-10rem",
                backgroundColor: "rgba(194, 202, 194, 0.37)",
                paddingTop: "1.6rem",
                paddingBottom: "2.1rem",
                paddingLeft: "2rem",
                paddingRight: "6rem",
                borderTopLeftRadius: "25px",
                borderTopRightRadius: "25px",
                borderBottomRightRadius: "25px",
                borderBottomLeftRadius: "0",
              }}
            >
              <p className="text-success h2 fw-bold mb-1">100%</p>
              <p className="text-secondary small mb-2">Success Rate</p>
              <hr className="my-2 h2" style={{ borderColor: "white" }} />
              <p className="text-success h2 fw-bold mb-1">2891+</p>
              <p className="text-secondary small">Satisfied Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
