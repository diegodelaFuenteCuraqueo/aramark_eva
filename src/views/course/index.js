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
    </div>
    </>
  )
}

export default Course;
