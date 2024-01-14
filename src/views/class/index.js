import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../App.css'
import './styles.css'

function Course() {
  const location = useLocation()
  const {course, title, description, videoSrc} = location.state.classData

  return (
    <>
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
          <h3>{title} - {course}</h3>
        </div>
        <div className="class-description-element">
          <p>{description}</p>
        </div>
        <div className="class-description-element">
          <h3>Cuestionario de la clase</h3>
        </div>
        <div className="class-description-element">
          <p>Realiza el cuestionario para evaluar tus aprendizajes y continuar con el curso</p>
        </div>
        <div className="class-description-element">
          <button className="btn btn-primary quiz-btn">Realizar Quiz</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Course;
