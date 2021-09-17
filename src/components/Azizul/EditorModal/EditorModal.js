import React, { useState } from 'react'
import { Col, Modal } from 'react-bootstrap'
import "./EditorModal.css"

function EditorModal() {
    const [show, setShow] = useState(true)
    return (
        <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                <div className="row">
                    <Col xs="12" md="6">
                        <h4> Preview </h4>
                        <div>
                            
                        </div>
                    </Col>
                </div>
            </div>
        </Modal.Body>
      </Modal>
    )
}

export default EditorModal
