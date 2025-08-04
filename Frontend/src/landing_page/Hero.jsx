import React from 'react';
import { FaHeartbeat, FaHandsHelping, FaBuilding, FaCar } from "react-icons/fa";
import { User } from "lucide-react";
import { FaUserTie } from "react-icons/fa";


function Hero() {
    return ( 
        <section
            className="text-white position-relative w-100 overflow-hidden mb-5"
            style={{
                width: "100vw",
                height: `${(1 / 2.37) * 100}vw`, // ≈ 42.19vw to match 3840x1622
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
                style={{
                    paddingTop:"5rem",
                    position: "relative",
                    zIndex: 2,
                    maxWidth: "60vw",
                    paddingLeft: "16rem",
                }}
            >
                <h1 style={{ fontSize: "42px", lineHeight: "1.4", marginBottom: "20px", letterSpacing:"1px" }}>
                    Complete Insurance<br />
                    <strong style={{ fontWeight: 780 }}>Coverage for Every Life</strong><br />
                    Stage
                </h1>

                <p className=' fw-light-white' style={{ fontSize:"12px", lineHeight: "1.6", marginBottom: "30px", maxWidth: "450px" }}>
                    We provide a wide variety of customized insurance plans to suit your specific needs.
                    Let us help you choose the right coverage so you can enjoy life with confidence and peace of mind.
                </p>

                <button className='btn navbtn btn-success px-3 px-3 py-2 mt-3 mb-4 ' style={{fontSize:"0.9rem"}}
                >
                    Get Free Quote
                </button>

                <div  style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
                    <div className='my-2' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <FaUserTie  size={10} color="#fff"    style={{
                      padding:"5px",
                      width: 40,
                      height: 40,
                      backgroundColor: "#009f4d",
                      borderRadius: "80%",
                    }} />
                        <span style={{ fontSize: "12px" }}>
                            Expert advice from<br />
                            knowledgeable professionals
                        </span>
                    </div>
                    <div className='align-items-center justify-content-center mx-3 mb-3 mt-3 ' style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <User size={10} color="#fff"    style={{
                      padding:"5px",
                      width: 40,
                      height: 40,
                      backgroundColor: "#009f4d",
                      borderRadius: "80%",
                    }} />
                        <span style={{ fontSize: "13px", fontWeight: "bold" }}>
                            Quick and hassle-free claims<br />
                            with 24/7 support.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;