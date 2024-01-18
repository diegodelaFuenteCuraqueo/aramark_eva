import React from "react"
import { cursosYreconocimientos } from "../../data"

const categorias = [...new Set(cursosYreconocimientos.map((curso) => curso.reconocimiento))]

function BadgeComponent() {
  const [badgeDescription, setBadgeDescription] = React.useState([])
  const handleClick = (categoria) => () => {
    const cursos = cursosYreconocimientos.filter((elem) => elem.reconocimiento === categoria)
    setBadgeDescription(cursos.map((elem) => elem.curso))
  }
  return (
    <>
      <div className="badge-container">
        {categorias.map((categoria, index) => (
          <div className="badge" key={index} onClick={handleClick(categoria)}>
            <div className="badge-image" >
              <img src="assets/badge.png" alt="badge" ></img>
            </div>
            <h4 key={index}>{categoria}</h4>
          </div>
        ))}
      </div>
      <div className="badge-description">
          {
            badgeDescription.length
            ? (
              <>
                <h3>Cursos requeridos</h3>
                <ul>
                  { badgeDescription.map((curso, index) => <li key={index}>{curso}</li>) }
                </ul>
              </>
            ) : (
              <p> Selecciona una medalla para ver su descripcion</p>
            )
          }
      </div>
    </>
  )
}

export default BadgeComponent
