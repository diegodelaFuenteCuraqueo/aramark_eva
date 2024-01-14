import React from "react"
import './styles.css'

export default function CertificateComponent() {
  return (
    <>
      <div className="title-container">
        <h1 className="title text-start">Certificado</h1>
      </div>
      <div className="diploma-container">
        <img src="/assets/diploma.png" alt="Certificate" className="diploma-image"></img>
      </div>
    </>
  )
}
