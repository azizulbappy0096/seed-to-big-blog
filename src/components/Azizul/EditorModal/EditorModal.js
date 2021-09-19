import React, { useRef, useState } from "react";
import { Col, Modal } from "react-bootstrap";
import "./EditorModal.css";
import InputTags from "./inputTags";

function EditorModal() {
  const imgRef = useRef(null);

  const [show, setShow] = useState(true);
  const [title, setTitle] = useState("");
  const [previewText, setPreviewText] = useState("");
  const [previewImg, setPreviewImg] = useState("");
  const [tags, setTags] = useState([]);

  const handlePreviewImg = (e) => {
    e.preventDefault();
    imgRef.current.click()
  };

  return (
    <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
      <Modal.Header closeButton className="border-0 p-5"></Modal.Header>
      <Modal.Body className="d-flex align-items-center">
        <div className="container">
          <div className="editorModal row gap-2 gap-md-5">
            <Col xs="12" lg="6">
              <h5> Preview </h5>
              <div className="editorModal__previewImg">
                <input hidden ref={imgRef} type="file" name="file" onChange={(e) => setPreviewImg(e.target.files[0])} />
                <button
                  className="bg-transparent border-0"
                  onClick={handlePreviewImg}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="plusIcon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </button>

                <p className="text-muted">
                  {" "}
                  Include a high-quality preview image in your story to make it
                  more inviting to readers.{" "}
                </p>
              </div>
              <div className="editorModal__inputs my-4">
                <input type="text" placeholder="Change or Write your title" />
                <input type="text" placeholder="Preview text..." />
                <p className="mt-2 text-muted">
                  {" "}
                  <span className="fw-bold"> Note: </span> Changes here will
                  affect how your story appears in public places like homepage{" "}
                </p>
              </div>
            </Col>
            <Col xs="12" lg="5" className="mt-5 mt-md-0">
              <p className="fs-5">
                {" "}
                Publishing to: <span className="fw-bold">
                  {" "}
                  Author name{" "}
                </span>{" "}
              </p>
              <div className="my-3">
                <p>
                  {" "}
                  Add or change tags (up to 5) so readers know what your story
                  is about{" "}
                </p>
                <InputTags tags={tags} setTags={setTags} />
                <p className="my-2"> other recommended design goes here </p>
                <button className="modalEditor__publish rounded-pill px-4 py-2 text-white">
                  {" "}
                  Publish now{" "}
                </button>
              </div>
            </Col>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EditorModal;
