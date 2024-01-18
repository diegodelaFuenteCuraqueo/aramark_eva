import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalComponent = ({title, message}) => {
  const [show, setShow] = useState(true)
  const handleClose = () => setShow(false)

  return (
    <div style={{bsModalWidth: '800px'}}>
      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {message.split('\n').map((line, index) => <p key={index}>{line}</p>)}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="btn btn-warning" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ModalComponent
