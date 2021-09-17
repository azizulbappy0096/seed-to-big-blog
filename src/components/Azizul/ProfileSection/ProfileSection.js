import React from "react";
import { Col } from "react-bootstrap";

function ProfileSection() {
  return (
    <div className="blog__profile row justify-content-center">
      <Col xs="auto">
        <div
          className="blog__profileImg"
          style={{
            backgroundImage:
              "url(/tempImg/jose-alejandro-cuffia-k1LNP6dnyAE-unsplash.jpg)",
            marginTop: "-20px",
          }}
        ></div>
      </Col>
      <Col xs="10" md="4" className="mt-3 mt-md-0">
        <div className="d-md-flex justify-content-md-between text-center text-md-start">
          <div className="text-capitalize ">
            <h3 className="mb-0"> John doe </h3>
            <p className="text-secondary mt-0"> Core writer </p>
          </div>
          <div className="my-3 my-md-0">
            <button className="blog__profileButton"> Follow </button>
          </div>
        </div>
        <div className="d-flex justify-content-center justify-content-md-start gap-4">
          <div className="text-center">
            <div className="fs-4 fw-bolder">
              <span> 29 </span>
            </div>
            <label className="text-secondary fw-bold" htmlFor="">
              {" "}
              Posts{" "}
            </label>
          </div>
          <div className="text-center">
            <div className="fs-4 fw-bolder">
              <span> 144 </span>
            </div>
            <label className="text-secondary fw-bold" htmlFor="">
              {" "}
              Followers{" "}
            </label>
          </div>
          <div className="text-center">
            <div className="fs-4 fw-bolder">
              <span> 99 </span>
            </div>
            <label className="text-secondary fw-bold" htmlFor="">
              {" "}
              Following{" "}
            </label>
          </div>
        </div>
      </Col>
    </div>
  );
}

export default ProfileSection;
