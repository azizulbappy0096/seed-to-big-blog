import React from "react";
import { Col } from "react-bootstrap";

function Content({ content }) {
  return (
    <div className="container mx-auto  my-4">
      <div className="row ">
        <Col xs="12" className="ck-content pb-4 mb-3" dangerouslySetInnerHTML={{__html: content}}>
         
          
        </Col>

        <Col xs="12" className="my-4 py-4">
          <div className="blog__devider"></div>
        </Col>
      </div>
    </div>
  );
}

export default Content;
