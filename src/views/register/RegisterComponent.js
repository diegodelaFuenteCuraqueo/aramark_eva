import React from "react"
import './styles.css'
import '../../App.css'

function RegisterComponent() {
  return (
    <div className="fade-in login-container d-flex justify-content-center">
      <div className="title-container">
        <h1 className="title text-start">Registro</h1>
      </div>

      <form>

        <div className="register-container">
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

          <div className="register-element register-btn shadow">
            <button className="btn btn-primary">Registrarse</button>
          </div>
        </div>

      </form>

    </div>
  )
}

export default RegisterComponent
