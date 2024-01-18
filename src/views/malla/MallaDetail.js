import React from 'react'
import '../../App.css'
import { courses } from '../../data.js'
import VideoCard from '../../components/VideoCard.js'
import { useNavigate } from 'react-router-dom'

export default function MallaDetail() {
  const navigate = useNavigate()
  const handleClick = (course) => () => {
    navigate("/course", {state: {course}})
  }

  const videoList = []

  for(let i = 3; i > 0; i--) {
    videoList.push(
      <VideoCard
        key={i}
        title={courses[i].title}
        description={courses[i].description}
        imageSrc={courses[i].imageSrc}
        clickAction={ handleClick(courses[i]) }
      />
    )
  }

  return (
    <>
      <div className="home-element">
        <div className="home-element-title">
          <h2>Ruta de aprendizaje</h2>
        </div>
        <div className="text-center home-element">
          <div className="course-element-description">
            <p>
            La ruta de aprendizaje que verás a continuación fue construida utilizando inteligencia artificial (IA) y se basa en tus intereses profesionales expresadas a través de nuestro formulario de registro.
            </p>
            <p>
            Esta malla curricular personalizada no solo resalta cursos específicos, sino que también proporciona una guía detallada para tu travesía educativa. Cada curso recomendado se alinea con tus áreas de interés, ofreciéndote una formación más enfocada y relevante para tu vocación.
            </p>
          </div>
        </div>

        <div className="home-element-title">
          <h2>Cursos</h2>
        </div>
          {videoList}
      </div>
    </>
  )
}
