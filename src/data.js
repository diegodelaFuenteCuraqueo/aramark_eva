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
]

const roles = [
  "Chef o Cocinero",
  "Ayudante de Cocina",
  "Panadero",
  "Pastelero",
  "Carnicero",
  "Pescadero",
  "Barista",
  "Bartender o Barman",
  "Mesero o Camarero",
  "Host o Anfitrión",
  "Gerente de Restaurante",
  "Supervisor de Cocina",
  "Lavaplatos o Auxiliar de Limpieza",
  "Encargado de Almacén de Alimentos",
  "Sommelier",
  "Maître d’Hotel",
  "Catering Manager",
  "Nutricionista o Dietista",
  "Especialista en Seguridad Alimentaria",
  "Empleado de Servicio Rápido o Fast Food"
];

export default {
  roles,
  quizQuestions
}