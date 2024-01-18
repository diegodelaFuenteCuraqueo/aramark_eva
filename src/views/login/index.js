import React from 'react';
import '../../App.css'
import LoginComponent from './LoginComponent'
import ModalComponent from '../../components/Modal/ModalComponent'

const disclaimer = `
  Las vistas disponibles se enfocan en las siguientes funcionalidades (por implementar):

  - Modelo Micro Learning
  - Rutas de Aprendizaje formadas por Tutoriales, Cursos, Cursos Avanzados y Especializaciones, enfocadas en desarrollar habilidades y/o conocimientos específicos.
  - Certificación de Logros Intermedios.
  - Complementadas por asistentes virtuales inteligentes (IA Generativa)`

function Login() {
  return (
    <div>
      <ModalComponent title="Prototipo de funcionalidad de baja calidad" message={disclaimer}/>
      <LoginComponent />
    </div>
  );
}

export default Login;
