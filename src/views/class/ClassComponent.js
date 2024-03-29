import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../../App.css'
import './styles.css'

function ClassComponent() {
  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/quiz")
  }

  const {course, title, description, videoSrc} = location.state.classData

  return (
    <div className="fade-in">
    <div className="d-flex justify-content-center course-container" style={{borderColor: "green"}}>

      <div className="class-element video-container">
        <div className="title-container">
          <h1>{title}</h1>
        </div>
        <video width="900" height="600" controls src={videoSrc} ></video>
        <div className="button-container">
          <div className="button"><button className="btn btn-primary">anterior</button></div>
          <div className="">
            <p className="title text-start">Curso {course}</p>
          </div>
          <div className="button"><button className="btn btn-primary">siguiente</button></div>
        </div>
      </div>

      <div className=" class-element class-description">

        <div className="class-description-element">
          <h3 className="home-element-title">{title} - {course}</h3>
        </div>
        <div className="class-description-element">
          <p>{description}</p>
        </div>

        <div className="class-description-element">
          <h3 className="home-element-title">Material de apoyo</h3>
        </div>
        <div className="class-description-element">
          <p>En esta sección puedes encontrar links, pdf's, imágenes y otros elementos de apoyo para tu aprendizaje.</p>
        </div>
        <div className="class-description-material">
          <button className="btn btn-link">Resumen de la clase (PDF)</button>
          <button className="btn btn-link">Normativa Vigente (link)</button>
          <button className="btn btn-link">Diagrama de contenidos (img)
            <img src="https://www.fao.org/3/Y4893S/y4893s1o.jpg" alt="Diagrama" className="diagrama-image"></img>
          </button>

        </div>

        <div className="class-description-element">
          <h3 className="home-element-title">Cuestionario de la clase</h3>
        </div>
        <div className="class-description-element">
          <p>Realiza el cuestionario para evaluar tus aprendizajes y continuar con el curso</p>
        </div>

        <div className="class-description-element">
          <button className="btn btn-primary quiz-btn" onClick={handleClick}>Realizar Quiz</button>
        </div>
      </div>
    </div>

    </div>
  )
}

export default ClassComponent
