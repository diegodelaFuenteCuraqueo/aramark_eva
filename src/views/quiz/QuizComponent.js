import React from 'react'
import './styles.css'
import QuizCard from './components/QuizCard.jsx'
import { useNavigate } from 'react-router-dom'
import { quizQuestions } from '../../data.js'

function QuizComponent() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate("/home")
  }

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

      <hr></hr>
      <div className="quiz-button-container">
        <button className='btn btn-primary' onClick={handleClick}>Terminar Cuestionario</button>
      </div>
    </div>
  )}

export default QuizComponent;
