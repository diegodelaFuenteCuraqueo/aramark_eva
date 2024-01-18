import React, { useState, useEffect } from 'react'
import './styles.css'
import '../../App.css'
import { roles, temasDeInteres } from '../../data.js'

const Spinner = ({message}) => {
  return (
    <div className="spinner-container" >
      <div className="spinner"></div>
      <p className="spinner">{message}</p>
    </div>
  )
}

const MallaCard = ({title, description, imageSrc, clickAction}) => {
  return (
    <div className="malla-card" onClick={clickAction}>
      <div className="malla-card-image">
        <img src={imageSrc} alt="Aramark Logo"></img>
      </div>
      <div className="malla-card-description">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

function MallaComponent() {
  const [showSpinner, setShowSpinner] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpinner(false)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='fade-in'>
      {showSpinner
        ? <Spinner message='Construyendo tu malla curricular' />
        : <div className="title-container fade-in">
          <h1 className="title text-start">Malla Curricular</h1>
          </div>
        }
    </div>
  )
}

export default MallaComponent