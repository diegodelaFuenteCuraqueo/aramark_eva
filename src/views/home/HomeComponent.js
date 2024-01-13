import React from 'react'
import '../../App.css'
import './styles.css'
import VideoCard from '../../components/VideoCard.js'

export default function HomeComponent() {
  return (
    <>
    <div className="title-container">
      <h1 className="title text-start">Bienvendio usuario!</h1>
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
          clickAction={ ()=>{console.log("Click")} }
        />

      </div>

      <div className="text-center home-element">
        <div className="home-element-title">
          <h2>Cursos realizados</h2>
        </div>
        <VideoCard
          title={courses[1].title}
          description={courses[1].description}
          imageSrc={courses[1].imageSrc}
          clickAction={ ()=>{console.log("Click")} }
        />
        <VideoCard
          title={courses[2].title}
          description={courses[2].description}
          imageSrc={courses[2].imageSrc}
          clickAction={ ()=>{console.log("Click")} }
        />
        <VideoCard
          title={courses[3].title}
          description={courses[3].description}
          imageSrc={courses[3].imageSrc}
          clickAction={ ()=>{console.log("Click")} }
        />

      </div>

      <div className="text-center home-element">
        <div className="home-element-title">
          <h2>Mis reconocimientos</h2>
        </div>
      </div>

    </div>
    </>
  );
}


const courses = [
  {
    title: "Microbiología de los Alimentos y Seguridad Alimentaria",
    description: "Curso que aborda la consideración general de microbiología de los alimentos y la seguridad en los procesos de manipulación y almacenamiento de éstos.",
    imageSrc:"https://expociencia.unileon.es/wp-content/uploads/2020/01/SAMA.jpg",
    classes: [
      {
        title: "",
        description: "",
        imageSrc:"",
        classNumber: 1
      }
    ]
  },
  {
    title: "Agentes Físicos y Contaminación Química",
    description: "Curso basado en la exploración de peligros físicos y químicos que pueden afectar la seguridad alimentaria.",
    imageSrc:"https://www.infinitiaresearch.com/wp-content/uploads/contaminantes-fisicos-1.png.webp",
    classes: [
      {
        title: "",
        description: "",
        imageSrc: "",
        classNumber: 1
      }
    ]
  },
  {
    title: "Principios de Seguridad Alimentaria",
    description: "Curso que introduce principios relativos a la seguridad en los alimentos, incluyendo factores implicados en enfermedades provocadas por alimentos y el control del tiempo/temperatura en parásitos.",
    imageSrc:"https://www.euraslog.com/wp-content/uploads/2020/02/SEGURIDAD-ALIMENTARIA-1024x683.jpg",
    classes: [
      {
        title: "",
        description: "",
        imageSrc: "",
        classNumber: 1
      }
    ]
  },
  {
    title: "Introducción a HACCP",
    description: "Curso introductorio sobre el sistema HACCP, cubriendo la secuencia de alimentos y los siete principios de HACCP.",
    imageSrc:"https://www.halalflash.com/wp-content/uploads/2023/03/Logo_HACCP.jpg",
    classes: [
      {
        title: "",
        description: "",
        imageSrc: "",
        classNumber: 1
      }
    ]
  },
  {
    title: "Procedimientos de Control en HACCP",
    description: "Curso que explora cómo establecer procedimientos de control dentro del sistema HACCP.",
    imageSrc: "https://5.imimg.com/data5/SELLER/Default/2023/8/331747720/UR/RM/XD/37556463/haccp-certification-500x500.jpg",
    classes: [
      {
        title: "",
        description: "",
        imageSrc: "",
        classNumber: 1
      }
    ]
  },
  {
    title: "Procedimientos de Verificación en HACCP",
    description: "Curso que aborda cómo realizar procedimientos de verificación en el sistema HACCP.",
    imageSrc:"https://www.halalflash.com/wp-content/uploads/2023/03/Logo_HACCP.jpg",
    classes: [
      {
        title: "",
        description: "",
        imageSrc: "",
        classNumber: 1
      }
    ]
  },
];
