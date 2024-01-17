import React from 'react'
import '../../App.css'
import './styles.css'
import VideoCard from '../../components/VideoCard.js'
import { useNavigate } from 'react-router-dom';

export default function HomeComponent() {
  const navigate = useNavigate()
  const handleClick = (course) => () => {
    navigate("/course", {state: {course}})
  }

  const videoList = []

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
      <h1 className="title text-start">Bienvenido usuario!</h1>
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
          <h2>Mis reconocimientos</h2>
        </div>
      </div>

    </div>
    </div>
  );
}


const courses = [
  {
    title: "Microbiología de los Alimentos y Seguridad Alimentaria",
    description: "Curso que aborda la consideración general de microbiología de los alimentos y la seguridad en los procesos de manipulación y almacenamiento de éstos.",
    imageSrc:"https://expociencia.unileon.es/wp-content/uploads/2020/01/SAMA.jpg",
    classes: [
      {
        title: "Introducción a la Microbiología de los Alimentos",
        description: "Esta sesión introductoria aborda la consideración general de microbiología de los alimentos y la seguridad en los procesos de manipulación y almacenamiento de éstos.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 1
      },
      {
        title: "Microorganismos de los Alimentos",
        description: "Esta sesión aborda los microorganismos de los alimentos, incluyendo bacterias, virus, hongos y parásitos.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 2
      },
      {
        title: "Factores que Afectan el Crecimiento Microbiano",
        description: "Esta sesión aborda los factores que afectan el crecimiento microbiano, incluyendo el pH, la temperatura, el oxígeno y el agua.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 3
      },
      {
        title: "Enfermedades Transmitidas por los Alimentos",
        description: "Esta sesión aborda las enfermedades transmitidas por los alimentos, incluyendo intoxicaciones alimentarias y enfermedades infecciosas.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 4
      },
      {
        title: "Control de Microorganismos",
        description: "Esta sesión aborda el control de microorganismos, incluyendo la higiene personal, la higiene de los alimentos y los métodos de conservación.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 5
      },
      {
        title: "Seguridad Alimentaria",
        description: "Esta sesión aborda la seguridad alimentaria, incluyendo el sistema HACCP, los peligros físicos y químicos, y los principios de seguridad alimentaria.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 6
      }
    ]
  },
  {
    title: "Agentes Físicos y Contaminación Química",
    description: "Curso basado en la exploración de peligros físicos y químicos que pueden afectar la seguridad alimentaria.",
    imageSrc:"https://www.infinitiaresearch.com/wp-content/uploads/contaminantes-fisicos-1.png.webp",
    classes: [
      {
        title: "Introducción a los Peligros Físicos y Químicos",
        description: "Esta sesión introductoria aborda los peligros físicos y químicos que pueden afectar la seguridad alimentaria.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 1
      },
      {
        title: "Peligros Físicos",
        description: "Esta sesión aborda los peligros físicos que pueden afectar la seguridad alimentaria, incluyendo vidrios, metales, piedras, madera, plásticos, huesos, dientes, conchas, huesos de frutas, y otros.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 2
      },
      {
        title: "Peligros Químicos",
        description: "Esta sesión aborda los peligros químicos que pueden afectar la seguridad alimentaria, incluyendo pesticidas, metales pesados, aditivos, y otros.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 3
      }
    ]
  },
  {
    title: "Principios de Seguridad Alimentaria",
    description: "Curso que introduce principios relativos a la seguridad en los alimentos, incluyendo factores implicados en enfermedades provocadas por alimentos y el control del tiempo/temperatura en parásitos.",
    imageSrc:"https://www.euraslog.com/wp-content/uploads/2020/02/SEGURIDAD-ALIMENTARIA-1024x683.jpg",
    classes: [
      {
        title: "Introducción a la Seguridad Alimentaria",
        description: "Esta sesión introductoria aborda los principios de seguridad alimentaria, incluyendo factores implicados en enfermedades provocadas por alimentos y el control del tiempo/temperatura en parásitos.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 1
      },
      {
        title: "Principios de Seguridad Alimentaria I",
        description: "Esta sesión aborda los principios de seguridad alimentaria, incluyendo factores implicados en enfermedades provocadas por alimentos y el control del tiempo/temperatura en parásitos.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 2
      },
      {
        title: "Principios de Seguridad Alimentaria II",
        description: "Esta sesión aborda los principios de seguridad alimentaria, incluyendo factores implicados en enfermedades provocadas por alimentos y el control del tiempo/temperatura en parásitos.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 3
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
        videoSrc: "",
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
        videoSrc: "",
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
        videoSrc: "",
        classNumber: 1
      }
    ]
  },
];
