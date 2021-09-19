import React from "react";
import { Col } from "react-bootstrap";

function TitleSection({ title, author, views, previewImg }) {
  return (
    <div className="container mx-auto ">
      <div className="row align-items-center">
        <Col md="auto" className="d-none d-md-block">
          <div
            className="blog__profileImg"
            style={{
              backgroundImage:
                `url(${author?.profileImg})`,
            }}
          ></div>
        </Col>
        <Col md="9" xs="12">
          <h1 className="text-capitalize lh-base">
          {title}
          </h1>
          <div className="d-flex gap-4">
            <div className="text-capitalize text-secondary">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="text-secondary"
                style={{ width: 20 }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18 12H6"
                />
              </svg>{" "}
              <span> {author?.name} </span>{" "}
            </div>
            <div className="text-capitalize text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: 20 }}
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                <path
                  fillRule="evenodd"
                  d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span> {views} Views </span>{" "}
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default TitleSection;
