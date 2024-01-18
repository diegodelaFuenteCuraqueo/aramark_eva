import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import VideoCard from '../../components/VideoCard.js/index.js'
import { courses } from '../../data.js'
import '../../App.css'
import './styles.css'

function CourseComponent () {
  const location = useLocation()
  const navigate = useNavigate()
  const {title, description, imageSrc, classes} = location.state.course

  const handleClick = (classData) => () => {
    console.log(classData)
    navigate("/class", {state: {classData}})
  }

  const videoList = classes.map((classItem, index) => {
    return (
      <VideoCard
        key={index}
        title={ (index+1)+". "+classItem.title }
        description={classItem.description}
        imageSrc={imageSrc}
        clickAction={ handleClick({course: title, ...classItem})}
      />
    )
  })

  return (
    <div className="fade-in">
      <div className="title-container">
        <h1 className="title text-start">Curso {title}</h1>
      </div>

      <div className="course-image w-100 text-center">
        <img className="" src={imageSrc} alt="Aramark Logo"></img>
      </div>

      <div className="d-flex justify-content-center course-container" style={{borderColor: "green"}}>

        <div className="text-center home-element">
          <div className="course-element-description">
            <p>{description}</p>
          </div>
        </div>

        <div className="text-center home-element">
          <h2 className="text-start course-element-title home-element-title">Clases</h2>
          <div className="">
            {videoList}
          </div>
        </div>

      </div>
    </div>
  )
}

export default CourseComponent;
