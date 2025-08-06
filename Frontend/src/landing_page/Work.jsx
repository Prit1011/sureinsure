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
    desc: "Our specialists design a custom insurance plan that fits your lifestyle and goals.",
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
  if (type === "vertical-up") {
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
      <div className="icon-title mb-3 d-flex flex-column justify-content-start align-items-start text-start">
        <div className="icon-container mb-2">{icon}</div>
        <h5 className="fw-medium pt-1 step-title mb-0" style={{fontSize:"1rem", color: "#084f3cff"}}>{title}</h5>
      </div>
      <p className="step-desc" style={{fontSize:"0.8rem"}}>{desc}</p>

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
          min-height: 220px;
          max-width: 230px;
          padding: 3rem 1rem 1rem 1.5rem!important;
          box-sizing: border-box;
          background-color: #ffffff;
          color: #0b3b2e;
          border-top-left-radius: 25px !important;
          border-top-right-radius: 25px !important;
          border-bottom-right-radius: 25px !important;
          border-bottom-left-radius: 0 !important;
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

        @media (max-width: 1199.98px) {
          .step-card {
            min-height: 240px;
          }
        }

        @media (max-width: 991.98px) {
          .offset-card {
            margin-top: 40px;
          }
          .step-card {
            max-width: 100%;
            min-height: auto;
            margin-bottom: 3rem;
            padding-left: 20px;
            padding-top: 28px;
          }
          .step-badge,
          .step-badge-top {
            position: relative;
            top: 3rem !important;
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
        
        @media (max-width: 767.98px) {
          .step-card {
            padding: 1.5rem !important;
            margin-bottom: 2rem;
          }
          .offset-card {
            margin-top: 0;
          }
        }
        
        @media (max-width: 575.98px) {
          .step-card {
            padding: 1.25rem !important;
            margin-bottom: 1.5rem;
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
    <div className="position-relative" style={{backgroundColor:"#ebefef", paddingBottom: "180px"}}>
      <Container fluid className="px-lg-5">
        <div className="text-center  " style={{
            fontSize: "0.75rem",
            color: "#2fab7a",
            fontWeight: "600",
            letterSpacing: "1px",
            paddingTop:"6.5rem"
          }}>
          <h2 style={{fontSize:"0.7rem", letterSpacing:"0.1rem"}}>● HOW IT WORK</h2>
        </div>
        
        <h2 className="text-center pt-0 mb-4 mb-lg-5" style={{ color: "#0b3b2e", fontWeight: 400, fontSize: "2rem" }}>
          A Simple Process to <strong>Get Covered</strong> with Ease
        </h2>
        
        <p className="text-center text-secondary mb-5 mb-lg-5 pt-1 mx-auto" style={{
            maxWidth: "620px",
            fontSize: "0.80rem",
            lineHeight: 1.5,
            padding: "0 15px"
          }}>
          Our insurance services are designed to give you peace of mind—tailored
          to your needs and delivered in just a few easy steps.
        </p>

        {/* Steps row */}
        <Row className="justify-content-center align-items-start position-relative steps-row g-0">
          {steps.map(({ id, icon, title, desc, offset, badgeTop }, idx) => (
            <Col
              key={id}
              xs={12}
              md={6}
              lg={3}
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

              {/* Arrows - hidden on mobile */}
              {idx === 0 && (
                <div className="arrow-container arrow-1 d-none d-lg-block">
                  <Arrow type="horizontal-up" />
                </div>
              )}
              {idx === 1 && (
                <div className="arrow-container arrow-2 d-none d-lg-block">
                  <Arrow type="horizontal" />
                </div>
              )}
              {idx === 2 && (
                <div className="arrow-container arrow-3 d-none d-lg-block">
                  <Arrow type="horizontal-up" />
                </div>
              )}
            </Col>
          ))}
        </Row>
      </Container>

      <style jsx>{`
        .steps-row {
          max-width: 1070px;
          margin-left: auto;
          margin-right: auto;
          position: relative;
          padding: 0 1.5rem;
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
          bottom: -80px;
          left: calc(20% + 140px);
          transform: translateX(-50%) scaleY(-1) rotate(-15deg);
        }
        /* Second arrow: top of second card, horizontal arrow */
        .arrow-2 {
          width: 90px;
          height: 40px;
          top: -30px;
          left: calc(40% + 80px);
          transform: translateX(-30%) rotate(-10deg);
        }
        /* Third arrow: bottom of third card, vertical-up arrow */
        .arrow-3 {
          width: 60px;
          height: 40px;
          bottom: -75px;
          left: calc(15% + 140px);
          transform: translateX(-50%) scaleY(-1) rotate(-15deg);
        }
        
        @media (max-width: 1199.98px) {
          .arrow-1 {
            left: calc(20% + 120px);
          }
          .arrow-2 {
            left: calc(40% + 60px);
          }
          .arrow-3 {
            left: calc(15% + 120px);
          }
        }
        
        @media (max-width: 991.98px) {
          .offset-col {
            margin-top: 40px !important;
          }
          .arrow-container {
            display: none !important;
          }
        }
        
        @media (max-width: 767.98px) {
          .offset-col {
            margin-top: 0 !important;
          }
        }
      `}</style>
      
      {/* Bottom white curve */}
      <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "100%",
          height: "100px",
          backgroundColor: "#ffffff",
          borderTopLeftRadius: "100% 100px",
          borderTopRightRadius: "100% 100px",
          zIndex: 0,
        }}></div>
    </div>
  );
}