import React from "react";
import { Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

function Share() {
  return (
    <div className="container mx-auto mt-2 mb-5 pb-4">
      <div className="row">
        <Col xs="12" className="text-center">
          <h3> Share your view! </h3>
        </Col>
        <Col xs="12">
          <div className="row justify-content-center py-4">
            <Col xs="auto">
              <FontAwesomeIcon
                icon={faPinterest}
                className="blog__shareIcon blog__shareIcon--pinterest"
              />
            </Col>
            <Col xs="auto">
              <FontAwesomeIcon
                icon={faFacebookSquare}
                className="blog__shareIcon blog__shareIcon--facebook"
              />
            </Col>
            <Col xs="auto">
              <FontAwesomeIcon
                icon={faTwitter}
                className="blog__shareIcon blog__shareIcon--twitter"
              />
            </Col>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default Share;
