import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeartbeat, FaHandsHelping, FaBuilding, FaCar } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    icon: <FaHeartbeat size={30} color="#fff" />,
    title: "Health Insurance",
    description:
      "Covers your medical expenses with full protection for health.",
  },
  {
    icon: <FaHandsHelping size={30} color="#fff" />,
    title: "Life Insurance",
    description:
      "Ensures financial security for your loved ones through tailored life coverage.",
  },
  {
    icon: <FaBuilding size={30} color="#fff" />,
    title: "Business Insurance",
    description: "Safeguards your business with reliable insurance solutions.",
  },
  {
    icon: <FaCar size={30} color="#fff" />,
    title: "Car Insurance",
    description:
      "Protects your vehicle and covers accident or damage-related costs.",
  },
];

const Services = () => {
  return (
    <section
      style={{
        backgroundColor: "#ecf1f2",
        padding: "4rem 1rem",
        position: "relative",
        overflow: "visible",
        zIndex: 1,
      }}
    >
      {/* Curved background behind the cards */}
      <div
        style={{
          position: "absolute",
          top: "calc(60% + 60px)",
          left: 0,
          width: "100%",
          height: "300px", // Increased height here
          backgroundColor: "#ffffff",
          borderTopLeftRadius: "90% 90px",
          borderTopRightRadius: "90% 90px",
          zIndex: 0,
        }}
      ></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="text-center mb-4">
          <p
            className="text-success fw-medium mb-1"
            style={{ letterSpacing: "2px", fontSize: "0.75rem" }}
          >
            ● SERVICES
          </p>
          <h2 className="fw-normal mb-2" style={{ fontSize: "2.3rem", color: "rgb(1, 67, 1)" }}>
            Complete <span className="fw-bold">Insurance Coverage</span>{" "}
            Options
          </h2>
          <p className="text-muted mt-4" style={{fontSize:"0.85rem"}}>
            We offer a full range of insurance services designed to deliver
            peace of mind, no matter your <br /> needs.
          </p>
        </div>
        <div className="row-2"></div>
       <Row className="gx-0 gy-1 align-items mt-5 mx-0 position-relative p-0">
  {services.map((service, index) => (
    <Col xs={12} sm={6} md={4} lg={3} key={index} className="d-flex justify-content-center ">
      <Card
        className="border-0 shadow-sm rounded-5 text-start d-flex flex-column"
        style={{
          minHeight: "320px",
          maxWidth: "230px",
          padding: "0.6rem",
          zIndex: 3,
          position: "relative",
        }}
      >
                <div>
                  <div
                    className="d-flex align-items-center justify-content-center mx-3 mb-3 my-4"
                    style={{
                      width: 60,
                      height: 60,
                      backgroundColor: "#009f4d",
                      borderRadius: "50%",
                    }}
                  >
                    {service.icon}
                  </div>
                  <Card.Body className="d-flex flex-column mb-2">
                    <Card.Title
                      className="fw-bold"
                      style={{ fontSize: "1rem", color: "rgba(3, 87, 3, 1)" }}
                    >
                      {service.title}
                    </Card.Title>
                    <Card.Text
                      className="text-start"
                      style={{
                        fontSize: "0.9rem",
                        color: "#6c757d",
                        minHeight: "60px",
                      }}
                    >
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </div>
                <div>
                  <hr className="my-3" style={{color:"grey"}} />
                  <div className=" pb-2">
                    <a
                      href="#"
                      className="fw-bold text-success text-decoration-none d-inline-flex align-items-center"
                      style={{ fontSize: "0.95rem" }}
                    >
                      Learn More <FiArrowUpRight className="ms-1" />
                    </a>
                  </div>
                  <div className="col-2"></div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="row-2"></div>
      </Container>
    </section>
  );
};

export default Services;
