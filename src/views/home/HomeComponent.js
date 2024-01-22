import React from 'react'
import '../../App.css'
import './styles.css'
import VideoCard from '../../components/VideoCard.js'
import { useNavigate } from 'react-router-dom'
import { courses } from '../../data.js'
import BadgeComponent from './BadgeComponent.js'

const videoList = []

export default function HomeComponent() {
  const navigate = useNavigate()
  const handleClick = (course) => () => {
    navigate("/course", {state: {course}})
  }

  for(let i = 1; i < 4; i++) {
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
    <div className="fade-in">
    <div className="title-container">
      <h1 className="title text-start">¡Bienvenido, José Luis!</h1>

      <div className="status-container">
        <div className="status-box">
          <div>
            <p>Llevas <strong>5 reconocimientos</strong>. ¡Aún puedes más!</p>
            </div>
          <div>
            <p>Estás en el ranking <strong>#32 de 180</strong> usuarios con tu mismo perfil.</p>
            </div>
        </div>

        <div className="profile-img-container grow">
          <img src="assets/JL.jpeg" alt="Profile" className="profile-image"></img>
        </div>
      </div>

    </div>

    <div className="home-container d-flex justify-content-center">
      <div className="text-center home-element">
        <div className="home-element-title">
          <h2>Curso en progreso</h2>
        </div>

        <VideoCard
          title={courses[0].title}
          description={courses[0].description}
          imageSrc={courses[0].imageSrc}
          clickAction={ handleClick(courses[0]) }
        />

      </div>

      <div className="text-center home-element">
        <div className="home-element-title">
          <h2>Cursos realizados</h2>
        </div>
        {videoList}
      </div>

      <div className="text-center home-element">
        <div className="home-element-title">
          <h2>Mi Malla</h2>
        </div>
          {videoList.slice().reverse()}
      </div>

      <div className=" home-element">
        <div className="home-element-title">
          <h2>Mis Reconocimientos</h2>
        </div>

        <BadgeComponent />

      </div>

    </div>
    </div>
  );
}


