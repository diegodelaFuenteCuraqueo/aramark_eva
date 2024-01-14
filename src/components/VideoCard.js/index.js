import React from "react"
import "./style.css"

export default function VideoCard({title, description, imageSrc, clickAction}) {
  return (
    <div className="card card-container grow shadow" onClick={clickAction}>
      <div className="card-img">
        <img src={imageSrc} alt="..." />
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text"> {description}</p>
      </div>
    </div>
  )
}
