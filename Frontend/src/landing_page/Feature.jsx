import React from 'react';

function Hero() {
  return (
    <div className="py-5">
      {/* Empty left col-2 */}
      <div className="row mx-0">
        <div className="col-12 text-center mb-1">
          <small
            className="text-success fw-semibold text-uppercase"
            style={{letterSpacing: "2px", fontSize: "11px" }}
          >
           ● Our Feature
          </small>
        </div>

        <div className="col-12">
          <h2 className="text-center fw-normal mb-4" style={{ color: '#155E63', fontSize:"2.1rem" }}>
            Discover the standout <strong>insurance benefits</strong> we offer
          </h2>
          <p
            className="text-center text-secondary mb-5"
            style={{ fontSize:"0.8rem", margin: '0 auto' }}
          >
            Uncover the essential highlights of our insurance plans – built for extensive protection, <br />
            customizable options, and top-tier service.
          </p>
        </div>

        {/* Feature Row */}
        <div className="row mx-0 text-center">
          {/* Left spacer */}
          <div className="col-2 spacer"></div>

          {/* Feature 1 */}
          <div className="feature-box col-2 custom-border-end">
            <div className="mb-3 d-flex justify-content-center">
              <div
                style={{
                  backgroundColor: '#088758',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <line x1="10" y1="9" x2="8" y2="9" />
                </svg>
              </div>
            </div>
            <h6 className="fw-bolder  mb-2" style={{color: '#155E63', fontSize:"0.9rem"}}>Customizable Plans</h6>
            <p className="text-secondary small mx-3 mx-md-0 mt-3" style={{fontSize:"0.8rem"}}>
              Get coverage tailored to your unique needs and budget for the ideal protection.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="feature-box col-2 custom-border-end">
            <div className="mb-3 d-flex justify-content-center">
              <div
                style={{
                  backgroundColor: '#088758',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a7.9 7.9 0 0 0 0-6" />
                  <path d="M4.6 9a7.9 7.9 0 0 0 0 6" />
                </svg>
              </div>
            </div>
            <h6 className="fw-bolder  mb-2" style={{color: '#155E63', fontSize:"0.9rem"}}>Multiple Policy Savings</h6>
            <p className="text-secondary small mx-3 mx-md-0 mt-3" style={{fontSize:"0.8rem"}}>
              Bundle and save! Combine policies for cost-effective and comprehensive coverage.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="feature-box col-2 custom-border-end">
            <div className="mb-3 d-flex justify-content-center">
              <div
                style={{
                  backgroundColor: '#088758',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 7 10 18l-5-5" />
                  <circle cx="20" cy="20" r="2" />
                </svg>
              </div>
            </div>
            <h6 className="fw-bolder mb-2"style={{color: '#155E63', fontSize:"0.9rem"}}>Accident Forgiveness</h6>
            <p className="text-secondary small mx-3 mx-md-0 mt-3" style={{fontSize:"0.8rem"}}>
              Stay protected even when the unexpected happens – your rates won’t increase after your first accident.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="feature-box col-2 custom-border-end">

            <div className="mb-3 d-flex justify-content-center">
              <div
                style={{
                  backgroundColor: '#088758',
                  borderRadius: '50%',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7" />
                  <path d="M9 22V12h6v10" />
                  <circle cx="18" cy="12" r="3" />
                </svg>
              </div>
            </div>
            <h6 className="fw-bolder mb-2"style={{color: '#155E63', fontSize:"0.9rem"}}>Home Replacement Cost</h6>
            <p className="text-secondary  mx-3 mx-md-0 mt-3" style={{fontSize:"0.8rem"}}>
              Ensure your home is fully covered — <br />  with replacement cost coverage that adjusts to your needs.
            </p>
          </div>
          <hr
          style={{ borderColor: "#babebeff", width: "72%", margin: "0 14rem" }}
          className="my-1"
        />

          {/* Right spacer */}
          <div className="col-2 spacer"></div>
        </div>

        
      </div>
    </div>
  );
}

export default Hero;
