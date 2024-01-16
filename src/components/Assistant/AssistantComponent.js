import React, { useState, useEffect } from 'react'
import './styles.css'

const FloatingComponent = ({ onClose }) => {
  useEffect(() => {
    const closeOnEscapeKeyDown = (e) => {
      if ((e.charCode || e.keyCode) === 27) {
        onClose()
      }
    }

    const closeOnClickOutside = (e) => {
      console.log(e.target.id)
      if (e.target.id === 'outside') {
        onClose()
      }
    }

    document.body.addEventListener('keydown', closeOnEscapeKeyDown);
    document.body.addEventListener('click', closeOnClickOutside);

    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKeyDown);
      document.body.removeEventListener('click', closeOnClickOutside);
    }
}, [onClose])

  return (
    <div className='floating-component'>
      <div>
        <button onClick={onClose}>X</button>
        <h3>Asistente</h3>
        <div className="chat-box">
          <p className="chat-message">
            Bienvenido a la Academia Virtual Aramark. ¿En qué puedo ayudarte?
          </p>
        </div>
        <div className="chat-input">
          <input type="text" placeholder="Escribe tu mensaje aquí" />
          <button>></button>
        </div>
      </div>
    </div>
  )
}

export default function Assistant() {
  const [isFloatingVisible, setFloatingVisible] = useState(false)

  const handleFloatingButtonClick = () => {
    setFloatingVisible(true)
  }
  const handleCloseFloatingComponent = () => {
    setFloatingVisible(false)
  }

  return (
    <div>
      <div
        className="assistant-container"
        style={{
          position: 'fixed',
          bottom: '15px',
          right: '15px',
          zIndex: 9998,
        }}
      >
        <img src="/assets/teacher.png" alt="assistant" className="assistant-logo" onClick={handleFloatingButtonClick}/>
      </div>

      { isFloatingVisible && <FloatingComponent onClose={handleCloseFloatingComponent} />}
    </div>
  )
}
