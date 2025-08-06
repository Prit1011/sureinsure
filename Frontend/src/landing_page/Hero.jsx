import React from 'react';
import { FaHeartbeat, FaHandsHelping, FaBuilding, FaCar, FaUserTie } from "react-icons/fa";
import { User } from "lucide-react";

function Hero() {
    return (
        <section
            className="text-white w-100 overflow-hidden mb-5"
            style={{
                width: "100vw",
                height: `${(1 / 2.37) * 100}vw`,
                backgroundImage: "url('media/Hero.jpg')",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundColor: "#000",
                position: "relative",
                display: "flex",
                alignItems: "center",
                color: "#fff",
            }}
        >
            {/* Overlay gradient */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: "linear-gradient(to right, rgba(3, 77, 72, 1), transparent)",
                    zIndex: 1,
                }}
            ></div>

            {/* Text Content */}
            <div
                className="hero-text"
                style={{
                    paddingTop: "3rem",
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "60vw",
                    paddingLeft: "16rem",
                }}
            >
                <h1 style={{ fontSize: "44px", lineHeight: "1.3", marginBottom: "20px", letterSpacing: "1px" }}>
                    Complete Insurance<br />
                    <strong style={{ fontWeight: 750 }}>Coverage for Every Life</strong><br />
                    Stage
                </h1>

                <p className='fw-light-white' style={{ fontSize: "12px", lineHeight: "1.6", marginBottom: "30px", maxWidth: "450px" }}>
                    We provide a wide variety of customized insurance plans to suit your specific needs.
                    Let us help you choose the right coverage so you can enjoy life with confidence and peace of mind.
                </p>

                <button className='btn navbtn text-white fw-medium  px-3 py-2 mt-3 mb-4' style={{ fontSize: "0.8rem", backgroundColor:"#009a5d" }}>
                    Get Free Quote
                </button>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", marginTop: "20px" }}>
                    <div className='my-2' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <FaUserTie size={10} color="#fff" style={{
                            padding: "5px",
                            width: 40,
                            height: 40,
                            backgroundColor: "#009a5d",
                            borderRadius: "80%",
                        }} />
                        <span style={{ fontSize: "12px" }}>
                            Expert advice from<br />
                            knowledgeable professionals
                        </span>
                    </div>
                    <div className='my-2' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <User size={10} color="#fff" style={{
                            padding: "5px",
                            width: 40,
                            height: 40,
                            backgroundColor: "#009a5d",
                            borderRadius: "80%",
                        }} />
                        <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                            Quick and hassle-free claims<br />
                            with 24/7 support.
                        </span>
                    </div>
                </div>
            </div>

            {/* Embedded CSS for responsiveness */}
            <style>{`
                @media (max-width: 991.98px) {
                    section {
                        background-image: none !important;
                        height: 50rem !important;
                        flex-direction: column;
                        padding: 2rem 1rem;
                    }
                    .hero-text {
                        padding-left: 1rem !important;
                        padding-top: 8rem !important;
                        max-width: 90vw !important;
                    }
                    .hero-text h1 {
                        font-size: 26px !important;
                        line-height: 1.3 !important;
                    }
                    .hero-text p {
                        font-size: 11px !important;
                        line-height: 1.5 !important;
                        max-width: 100% !important;
                    }
                }
            `}</style>
        </section>
    );
}

export default Hero;
