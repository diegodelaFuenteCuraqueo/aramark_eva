import React from 'react'
import './styles.css'

export const Spinner = ({message}) => {
  return (
    <div className="spinner-container" >
      <div className="spinner"></div>
      <p className="spinner">{message}</p>
    </div>
  )
}