import React, { useState, useEffect } from 'react'
import './styles.css'
import '../../App.css'
import { Spinner } from '../../components/Spinner/Spinner.js'
import MallaDetail from './MallaDetail.js'

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
        : (
          <div className="home-container fade-in">
            <div className="title-container">
              <h1 className="title text-start">Malla curricular</h1>
            </div>
            <MallaDetail />
          </div>
        )
      }
    </div>
  )
}

export default MallaComponent