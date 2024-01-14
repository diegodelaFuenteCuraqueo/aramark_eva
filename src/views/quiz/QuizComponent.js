import React from 'react'
import './styles.css'
import QuizCard from './components/QuizCard.jsx'

function QuizComponent() {
  return (
    <div className="fade-in">
      <div className="title-container">
        <h1 className="title text-start">Cuestionario</h1>
      </div>

      {
        quizQuestions.map((quizQuestion, index) => (
          <QuizCard pregunta={quizQuestion.pregunta} alternativas={quizQuestion.alternativas} key={index} index={index+1}/>
        ))
      }
    </div>
  )}

export default QuizComponent;


const quizQuestions = [
  {
    pregunta: "¿Cuáles son los factores que influyen en el desarrollo de bacterias en los alimentos?",
    alternativas: [
      "Temperatura",
      "Humedad",
      "PH",
      "Todas las anteriores"
    ],
    respuestaCorrecta: 4
  },
  {
    pregunta: "¿Cuál es el principal riesgo asociado con la contaminación química de los alimentos?",
    alternativas: [
      "Intoxicación alimentaria",
      "Alergias alimentarias",
      "Alteración del sabor",
      "Ninguno de los anteriores"
    ],
    respuestaCorrecta: 1
  },
  {
    pregunta: "¿Qué principios son fundamentales para la seguridad alimentaria según HACCP?",
    alternativas: [
      "Análisis de peligros",
      "Establecimiento de límites críticos",
      "Procedimientos de control",
      "Todos los anteriores"
    ],
    respuestaCorrecta: 4
  },
  {
    pregunta: "¿Qué agentes físicos pueden representar un peligro en la seguridad alimentaria?",
    alternativas: [
      "Radiación",
      "Presión atmosférica",
      "Electricidad estática",
      "Todas las anteriores"
    ],
    respuestaCorrecta: 1
  }
];
