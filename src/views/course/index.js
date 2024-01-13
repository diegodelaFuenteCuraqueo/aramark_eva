import React from 'react';
import '../../App.css'

function Course({nombre}) {
  return (
    <div className="title-container">
      <h1 className="title text-start">Curso {nombre}</h1>
    </div>
  );
}

export default Course;
