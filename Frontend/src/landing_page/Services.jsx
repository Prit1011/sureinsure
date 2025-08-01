import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeartbeat, FaHandsHelping, FaBuilding, FaCar } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import "bootstrap/dist/css/bootstrap.min.css";

const services = [
  {
    icon: <FaHeartbeat size={30} color="#fff" />,
    title: "Health Insurance",
    description: "Covers your medical expenses with full protection for health."
  },
  {
    icon: <FaHandsHelping size={30} color="#fff" />,
    title: "Life Insurance",
    description: "Ensures financial security for your loved ones through tailored life coverage."
  },
  {
    icon: <FaBuilding size={30} color="#fff" />,
    title: "Business Insurance",
    description: "Safeguards your business with reliable insurance solutions."
  },
  {
    icon: <FaCar size={30} color="#fff" />,
    title: "Car Insurance",
    description: "Protects your vehicle and covers accident or damage-related costs."
  }
];

const Services = () => {
  return (
    <section style={{ backgroundColor: "#ecf1f2", padding: "4rem 1rem", position: "relative", overflow: "visible",  zIndex: 1  }}>
      {/* Curved background behind the cards */}
      <div
  style={{
    position: "absolute",
    top: "calc(50% + 60px)",
    left: 0,
    width: "100%",
    height: "600px", // Increased height here
    backgroundColor: "#ffffff",
    borderTopLeftRadius: "90% 90px",
    borderTopRightRadius: "90% 90px",
    zIndex: 0
  }}
></div>

      <Container style={{ position: "relative", zIndex: 2 }}>
        <div className="text-center mb-4">
          <p className="text-success mb-1" style={{ letterSpacing: "2px", fontSize: "0.85rem" }}>
            ● SERVICES
          </p>
          <h2 className="fw-bold mb-2" style={{ fontSize: "2rem" }}>
            Complete <span className="text-dark">Insurance Coverage</span> Options
          </h2>
          <p className="text-muted">
            We offer a full range of insurance services designed to deliver peace of mind, no matter your <br />     needs.
          </p>
        </div>
<Row className="gx- gy-1 justify-content-center align-items-stretch" >
          {services.map((service, index) => (
            <Col xs={12} sm={6} md={6} lg={3} key={index} className="d-flex">
              <Card
  className="border-0 shadow-sm w-100 rounded-4 text-start d-flex flex-column justify-content-between"
  style={{
    minHeight: "290px",
    maxWidth: "245px",
    paddingLeft: "0.8rem",
    paddingRight: "0.6rem", // reduced right-side padding
    paddingTop: "1rem",
    paddingBottom: "1rem",
    zIndex: 3,
    position: "relative",
  }}
>

                <div>
                  <div
                    className="d-flex align-items-center justify-content-center mx-auto mb-3"
                    style={{ width: 60, height: 60, backgroundColor: "#009f4d", borderRadius: "50%" }}
                  >
                    {service.icon}
                  </div>
                  <Card.Body className="d-flex flex-column mb-2">
                    <Card.Title className="fw-bold" style={{ fontSize: "1rem" }}>
                      {service.title}
                    </Card.Title>
                    <Card.Text className="text-start" style={{ fontSize: "0.9rem", color: "#6c757d", minHeight: "60px" }}>
                      {service.description}
                    </Card.Text>
                  </Card.Body>
                </div>
                <div>
                  <hr className="my-3"  />
                  <div className=" pb-2">
                    <a
                      href="#"
                      className="fw-bold text-success text-decoration-none d-inline-flex align-items-center"
                      style={{ fontSize: "0.95rem" }}
                    >
                      Learn More <FiArrowUpRight className="ms-1" />
                    </a>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Services;
