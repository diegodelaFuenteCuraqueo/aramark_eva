import React, { useState } from 'react';
import './styles.css'
import '../../App.css'
import { roles, temasDeInteres } from '../../data.js'
import { useNavigate } from 'react-router-dom';

function RegisterComponent() {
  const [selectedItems, setSelectedItems] = useState([])
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/malla")
  }

  const handleCheckboxChange = (event) => {
    if (event.target.checked && selectedItems.length === 5) {
      event.preventDefault()
      return;
    }

    setSelectedItems(prevItems => {
      if (event.target.checked) {
        return [...prevItems, event.target.value]
      } else {
        return prevItems.filter(item => item !== event.target.value)
      }
    })
  }

  return (
    <div className="fade-in login-container d-flex justify-content-center">
      <div className="title-container">
        <h1 className="title text-start">Registro</h1>
      </div>

      <form>

        <div className="register-container">
          <div className="register-element">
            <h3 className="text-center">Datos de personales</h3>
          </div>

          <div className="register-element">
            <label htmlFor="username">Nombre de usuario</label>
            <input type="text" id="username" className="form-control" placeholder="Ingrese su nombre de usuario" />
          </div>

          <div className="register-element">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" id="email" className="form-control" placeholder="Ingrese su correo electrónico" />
          </div>

          <div className="register-element">
            <label htmlFor="password">Contraseña</label>
            <input type="password" id="password" className="form-control" placeholder="Ingrese su contraseña" />
          </div>

          <div className="register-element">
            <label htmlFor="password">Confirmar contraseña</label>
            <input type="password" id="password" className="form-control" placeholder="Ingrese su contraseña" />
          </div>

          <hr></hr>

          <div className="register-element">
            <h3 className="text-center">Datos profesionales</h3>
          </div>

          <div className="register-element">
            <label htmlFor="role">Rol actual</label>
            <select id="role" className="form-select">
              <option value={''} key={0}>{' - seleccione rol - '}</option>
              {
                roles.map((role, index) => <option value={role} key={index+1}>{role}</option>)
              }
            </select>
          </div>

          <div className="register-element">
            <label htmlFor="intereses-profesionales">Intereses profesionales (puede seleccionar hasta 5):</label>
            <div className='intereses-profesionales' id='intereses-profesionales'>
              {
                temasDeInteres.map((tema, index) => (
                  <div className='tema-box' key={index}>
                    <input
                      className='temas-input'
                      type="checkbox"
                      id={`checkbox-${index}`}
                      value={tema}
                      onChange={handleCheckboxChange}
                      checked={selectedItems.includes(tema)}
                    />
                    <label htmlFor={`checkbox-${index}`}>{tema}</label>
                  </div>
                ))
              }
            </div>
          </div>

          <div className="register-element register-btn">
            <button className="btn btn-primary" onClick={handleClick}>Registrarse</button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default RegisterComponent
