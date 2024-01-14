import React from "react"

export default function QuizCard ({pregunta, alternativas, index}) {
  return (
    <>
      <div className="question-container">
        <h3 className="question-title">{pregunta}</h3>
        <form className="alternatives-box">
          {alternativas.map((alternativa, i) => (
            <div key={i}>
              <input
                className="question-alternative-radio"
                type="radio"
                id={`${i}-option-${index}`}
                name="quiz-option"
                //checked={selectedOption === index}
                //onChange={() => handleOptionChange(index)}
              />
              <label className="question-alternative" htmlFor={`${i}-option-${index}`}>{alternativa}</label>
            </div>
          ))}
        </form>
      </div>
    </>
  )
}