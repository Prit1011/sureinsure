import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaRulerHorizontal,
  FaIdCardAlt,
  FaHeadset,
  FaClipboardList,
} from "react-icons/fa";

const steps = [
  {
    id: "01",
    icon: <FaRulerHorizontal size={24} />,
    title: "Tailored Solutions",
    desc: "Our specialists design a custom  insurance plan that fits your lifestyle and goals.",
    offset: false,
    badgeTop: false,
  },
  {
    id: "02",
    icon: <FaIdCardAlt size={24} />,
    title: "Seamless Enrollment",
    desc: "We walk you through a quick, stress-free process to get your coverage set up.",
    offset: true,
    badgeTop: true,
  },
  {
    id: "03",
    icon: <FaHeadset size={24} />,
    title: "Continuous Support",
    desc: "Get 24/7 expert assistance and ongoing help whenever you need it.",
    offset: false,
    badgeTop: false,
  },
  {
    id: "04",
    icon: <FaClipboardList size={24} />,
    title: "Hassle-Free Claims & Adjustments",
    desc: "Enjoy fast claim processing and flexible policy updates with ease.",
    offset: true,
    badgeTop: true,
  },
];

function Arrow({ type }) {
  /**
   * We have 3 arrows and each placed differently:
   * - first arrow: bottom of 1st card pointing up to 2nd card top-left area
   * - second arrow: top of 2nd card pointing right to 3rd card top-left area
   * - third arrow: bottom of 3rd card pointing up to 4th card top-left area
   *
   * We can adjust SVG path, position and rotate accordingly.
   */
  // Base arrow path reused, but for vertical arrows (1st and 3rd), rotated.
  if (type === "vertical-up") {
    // Curved arrow going upward inside narrow width and height.
    return (
      <svg
        width="48"
        height="70"
        viewBox="0 0 48 70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="arrow-svg vertical-up"
      >
        <path
          d="M47 68C23 45 23 5 1 3"
          stroke="#138256"
          strokeWidth="1.5"
          strokeDasharray="6 5"
          markerEnd="url(#arrowhead)"
          strokeLinecap="round"
        />
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="6"
            refX="8"
            refY="3"
            orient="auto"
            fill="#138256"
          >
            <path d="M0 0L8 3L0 6" />
          </marker>
        </defs>
      </svg>
    );
  }
  // Horizontal arrow - used for second arrow
  return (
    <svg
      width="90"
      height="40"
      viewBox="0 0 102 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="arrow-svg horizontal"
    >
      <path
        d="M1 30C23 2 76 2 101 30"
        stroke="#138256"
        strokeWidth="1.5"
        strokeDasharray="6 5"
        markerEnd="url(#arrowhead)"
      />
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="6"
          refX="8"
          refY="3"
          orient="auto"
          fill="#138256"
        >
          <path d="M0 0L8 3L0 6" />
        </marker>
      </defs>
    </svg>
  );
}

const StepCard = ({ id, icon, title, desc, offset, badgeTop }) => {
  return (
    <div
      className={`step-card bg-white rounded-4 shadow-sm p-5 position-relative ${
        offset ? "offset-card" : ""
      }`}
    >
      <div className="icon-title d-flex align-items-center mb-3">
        <div className="icon-container text-success">{icon}</div>
        <h5 className="fw-bold step-title mb-0">{title}</h5>
      </div>
      <p className="step-desc">{desc}</p>

      {badgeTop ? (
        <div className="step-badge-top bg-success text-white rounded-pill d-flex align-items-center justify-content-center shadow-lg">
          <small>{id}</small>
        </div>
      ) : (
        <div className="step-badge bg-success text-white rounded-pill d-flex align-items-center justify-content-center shadow-lg">
          <small>{id}</small>
        </div>
      )}

      <style jsx>{`
        .step-card {
          position: relative;
          min-height: 180px;
          max-width: 280px;
          padding-left: 24px;
          padding-top: 32px;
          box-sizing: border-box;
          background-color: #ffffff;
          color: #0b3b2e;
        }
        .offset-card {
          margin-top: 56px;
        }
        .icon-container {
          font-size: 24px;
          color: #138256;
          margin-right: 12px;
          flex-shrink: 0;
          line-height: 1;
          display: flex;
          align-items: center;
        }
        .step-title {
          font-size: 1.05rem;
          font-weight: 600;
        }
        .step-desc {
          font-size: 0.88rem;
          line-height: 1.4;
          color: #6c757d;
          margin: 0;
          padding-right: 12px;
        }

        /* Badge bottom */
        .step-badge {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          width: 36px;
          height: 52px;
          border: 3px solid #138256;
          background-color: #138256;
          font-weight: 700;
          font-size: 0.95rem;
          user-select: none;
          z-index: 10;
          box-shadow: 0 4px 8px rgba(19, 130, 86, 0.35);
        }

        /* Badge top center */
        .step-badge-top {
          position: absolute;
          top: -26px;
          left: 50%;
          transform: translateX(-50%);
          width: 36px;
          height: 52px;
          border: 3px solid #138256;
          background-color: #138256;
          font-weight: 700;
          font-size: 0.95rem;
          user-select: none;
          z-index: 10;
          box-shadow: 0 4px 8px rgba(19, 130, 86, 0.35);
        }

        @media (max-width: 991.98px) {
          .offset-card {
            margin-top: 40px;
          }
          .step-card {
            max-width: 100%;
            min-height: auto;
            margin-bottom: 2.5rem;
            padding-left: 20px;
            padding-top: 28px;
          }
          .step-badge,
          .step-badge-top {
            position: relative;
            top: auto !important;
            bottom: auto !important;
            left: auto !important;
            transform: none !important;
            margin: 0 auto 1rem auto;
            width: 36px;
            height: 52px;
            font-size: 0.9rem;
            border-width: 2px;
            box-shadow: 0 2px 6px rgba(19, 130, 86, 0.25);
          }
          .step-desc {
            padding-right: 0;
          }
        }
        @media (max-width: 575.98px) {
          .step-card {
            padding-left: 16px;
            padding-top: 20px;
          }
          .icon-container {
            font-size: 22px;
            margin-right: 8px;
          }
          .step-title {
            font-size: 1rem;
          }
          .step-desc {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default function InsuranceSteps() {
  return (
    <div className=" pt-5 pb-2 position-relative" style={{paddingLeft:"10rem", paddingRight:"10rem", backgroundColor:"#ebefef", height:"78  0px"}}>
      <Container>
        <div
          className="text-center "
          style={{
            paddingTop:"3rem",
            fontSize: "0.75rem",
            color: "#2fab7a",
            fontWeight: "600",
            letterSpacing: "1px",
          }}
        >
          <span className="me-2 " style={{ fontSize: "0.6rem" }}>
           <h2  style={{fontSize:"0.7rem", letterSpacing:"0.1rem"}} > ●   HOW IT WORK</h2>
          </span>
        </div>
        <h2
          className="text-center pt-0 mb-5"
          style={{ color: "#0b3b2e", fontWeight: 400, fontSize: "2rem" }}
        >
          A Simple Process to <strong>Get Covered</strong> with Ease
        </h2>
        <p
          className="text-center text-secondary mb-5 pt-1"
          style={{
            maxWidth: "620px",
            margin: "0 auto",
            fontSize: "0.80rem",
            lineHeight: 1.5,
          }}
        >
          Our insurance services are designed to give you peace of mind—tailored
          to your needs and <br /> delivered in just a few easy steps.
        </p>

        {/* Steps row */}
      <Row
      className="justify-content-center align-items-start position-relative steps-row"
      style={{ padding: "0 5.5rem" }} // ✅ Fixed padding
    >
      {steps.map(({ id, icon, title, desc, offset, badgeTop }, idx) => (
        <Col
          key={id}
          xs={10}
          md={3}
          className={`d-flex justify-content-center position-relative ${
            offset ? "offset-col" : ""
          }`}
        >
          <StepCard
            id={id}
            icon={icon}
            title={title}
            desc={desc}
            offset={offset}
            badgeTop={badgeTop}
          />

          {/* Arrows */}
          {idx === 0 && (
            <div className="arrow-container arrow-1 d-none d-md-block">
              <Arrow type="horizontal-up" />
            </div>
          )}
          {idx === 1 && (
            <div className="arrow-container arrow-2 d-none d-md-block">
              <Arrow type="horizontal" />
            </div>
          )}
          {idx === 2 && (
            <div className="arrow-container arrow-3 d-none d-md-block">
              <Arrow type="horizontal-up" />
            </div>
          )}
        </Col>
      ))}
    </Row>
      </Container>

      <style jsx>{`
        .bg-light {
          background-color: #e9f0ef;
           max-height: 1000px; 
        }
        .steps-row {
          max-width: 1300px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
        }
        .offset-col {
          margin-top: 56px;
        }
        .arrow-container {
          position: absolute;
          z-index: 0;
          pointer-events: none;
        }
        /* First arrow: bottom of first card, vertical-up arrow */
        .arrow-1 {
          width: 90px;
          height: 40px;
          bottom: -100px; /* place outside below card */
            left: calc(50% + 140px);
          transform: translateX(-50%);
        }
        /* Second arrow: top of second card, horizontal arrow */
        .arrow-2 {
          width: 90px;
          height: 40px;
          top: -30px;
          left: calc(50% + 80px); /* approx between 2nd and 3rd card */
          transform: translateX(-30%);
        }
        /* Third arrow: bottom of third card, vertical-up arrow */
        .arrow-3 {
             width: 90px;
          height: 40px;
          bottom: -100px; /* place outside below card */
            left: calc(50% + 140px);
          transform: translateX(-50%);
        }
        @media (max-width: 991.98px) {
          .offset-col {
            margin-top: 40px !important;
          }
          .arrow-container {
            display: none !important;
          }
        }
      `}</style>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          backgroundColor: "#ffffff",
          borderTopLeftRadius: "100% 100px",
          borderTopRightRadius: "100% 100px",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
}