import React from 'react';
import '../../App.css'
import LoginComponent from './LoginComponent'

function Login() {
  alert(`  * Prototipo de funcionalidad de baja calidad *
  Las vistas disponibles se enfocan en las siguientes funcionalidades (por implementar):

  - Modelo Micro Learning
  - Rutas de Aprendizaje formadas por Tutoriales, Cursos, Cursos Avanzados y Especializaciones, enfocadas en desarrollar habilidades y/o conocimientos específicos.
  - Certificación de Logros Intermedios.
  - Complementadas por asistentes virtuales inteligentes (IA Generativa)`
  )
  return (
    <div>
      <LoginComponent />
    </div>
  );
}

export default Login;
