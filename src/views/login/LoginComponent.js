import React from "react"
import './styles.css'
import { useNavigate } from 'react-router-dom';

export default function LoginComponent() {
  
  const navigate = useNavigate()

  const handleClick = () => {
    navigate("/home")
  }

  return (
    <>
      <div className="login-container d-flex justify-content-center">

        <div className="login-image w-100 text-center">
          <img className='main-logo' src="/assets/Aramark_logo_vertical.png" alt="Aramark Logo"></img>
        </div>
        <div className="login-form w-100 text-center">

        <div className="login-title w-100 text-center">
          <h1>Academia Virtual</h1>
        </div>

          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="Login" className="btn btn-success login-btn" onClick={handleClick}/>
          </form>
        </div>

      </div>
    </>
  )
}