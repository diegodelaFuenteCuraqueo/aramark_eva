import React from 'react';
import '../../App.css'
import './styles.css'

function Course({nombreClase = "nombre de la clase", videoSrc, descripcion= "descripción de la clase", nombreCurso = "nombre del curso"}) {
  return (
    <>
    <div className="title-container">
      <h1 className="title text-start">Curso {nombreCurso}</h1>
    </div>
    <div className="d-flex justify-content-center course-container" style={{borderColor: "green"}}>

      <div className="home-element video-container">
        <h2>{nombreClase}</h2>
        <video width="900" height="600" controls src={videoSrc} ></video>
        <br></br>
        <div className="button-container">
          <div className="button"><button className="btn btn-primary">anterior</button></div>
          <div className="button"><button className="btn btn-primary">siguiente</button></div>
        </div>
      </div>

      <div className=" home-element class-description">
        <div className="class-description-element">
          <h3>{nombreClase} - {nombreCurso}</h3>
        </div>
        <div className="class-description-element">
          <p>{descripcion}</p>
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
