export const quizQuestions = [
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

export const roles = [
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
]

export const cursosYreconocimientos = [
  { reconocimiento: "Reconocimiento de Higiene", curso: "Higiene personal y lavado de manos" },
  { reconocimiento: "Reconocimiento de Higiene", curso: "Manipulación segura de alimentos" },
  { reconocimiento: "Reconocimiento de Higiene", curso: "Control de temperaturas (cocción, enfriamiento, almacenamiento)" },
  { reconocimiento: "Reconocimiento de Higiene", curso: "Prevención de la contaminación cruzada" },
  { reconocimiento: "Reconocimiento de Salud", curso: "Limpieza y saneamiento de utensilios y superficies" },
  { reconocimiento: "Reconocimiento de Salud", curso: "Almacenamiento adecuado de alimentos" },
  { reconocimiento: "Reconocimiento de Salud", curso: "Identificación y manejo de alérgenos alimentarios" },
  { reconocimiento: "Reconocimiento de Salud", curso: "Procedimientos de seguridad en la cocina" },
  { reconocimiento: "Reconocimiento de Manipulacion de Alimentos", curso: "Normativas de salud y seguridad alimentaria" },
  { reconocimiento: "Reconocimiento de Manipulacion de Alimentos", curso: "Primeros auxilios y manejo de emergencias alimentarias" },
  { reconocimiento: "Reconocimiento de Manipulacion de Alimentos", curso: "Rotación de alimentos y manejo de fechas de caducidad" },
  { reconocimiento: "Reconocimiento de Manipulacion de Alimentos", curso: "Técnicas de cocción y preparación de alimentos" },
  { reconocimiento: "Reconocimiento de Manipulacion de Alimentos", curso: "Uso y mantenimiento de equipos de cocina" },
  { reconocimiento: "Reconocimiento de Manipulacion de Alimentos", curso: "Gestión de residuos y reciclaje en la cocina" },
  { reconocimiento: "Reconocimiento de Atencion al Cliente", curso: "Comunicación efectiva y servicio al cliente" },
  { reconocimiento: "Reconocimiento de Atencion al Cliente", curso: "Normas de etiquetado y presentación de alimentos" },
  { reconocimiento: "Reconocimiento de Atencion al Cliente", curso: "Manejo de quejas y situaciones difíciles con clientes" },
  { reconocimiento: "Reconocimiento de Atencion al Cliente", curso: "Conocimiento de dietas especiales y opciones de menú (vegano, sin gluten, etc.)" },
  { reconocimiento: "Reconocimiento de Atencion al Cliente", curso: "Legislación local e internacional sobre seguridad alimentaria" },
  { reconocimiento: "Reconocimiento de Atencion al Cliente", curso: "Conciencia ambiental y sostenibilidad en la industria alimentaria" }
]

export const temasDeInteres = [
  "Higiene y seguridad en la cocina",
  "Manejo adecuado de alimentos",
  "Seguridad alimentaria y normativas",
  "Cuidado y limpieza de utensilios y superficies",
  "Primeros auxilios en situaciones alimentarias",
  "Gestión sostenible en la cocina",
  "Comunicación efectiva con clientes",
  "Dietas especiales y opciones de menú",
  "Conciencia ambiental en la industria alimentaria"
]

export const courses = [
  {
    title: "Microbiología de los Alimentos y Seguridad Alimentaria",
    description: "Curso que aborda la consideración general de microbiología de los alimentos y la seguridad en los procesos de manipulación y almacenamiento de éstos.",
    imageSrc:"https://expociencia.unileon.es/wp-content/uploads/2020/01/SAMA.jpg",
    classes: [
      {
        title: "Introducción a la Microbiología de los Alimentos",
        description: "Esta sesión introductoria aborda la consideración general de microbiología de los alimentos y la seguridad en los procesos de manipulación y almacenamiento de éstos.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 1
      },
      {
        title: "Microorganismos de los Alimentos",
        description: "Esta sesión aborda los microorganismos de los alimentos, incluyendo bacterias, virus, hongos y parásitos.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 2
      },
      {
        title: "Factores que Afectan el Crecimiento Microbiano",
        description: "Esta sesión aborda los factores que afectan el crecimiento microbiano, incluyendo el pH, la temperatura, el oxígeno y el agua.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 3
      },
      {
        title: "Enfermedades Transmitidas por los Alimentos",
        description: "Esta sesión aborda las enfermedades transmitidas por los alimentos, incluyendo intoxicaciones alimentarias y enfermedades infecciosas.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 4
      },
      {
        title: "Control de Microorganismos",
        description: "Esta sesión aborda el control de microorganismos, incluyendo la higiene personal, la higiene de los alimentos y los métodos de conservación.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 5
      },
      {
        title: "Seguridad Alimentaria",
        description: "Esta sesión aborda la seguridad alimentaria, incluyendo el sistema HACCP, los peligros físicos y químicos, y los principios de seguridad alimentaria.",
        imageSrc:"",
        videoSrc: "",
        classNumber: 6
      }
    ]
  },
  {
    title: "Agentes Físicos y Contaminación Química",
    description: "Curso basado en la exploración de peligros físicos y químicos que pueden afectar la seguridad alimentaria.",
    imageSrc:"https://www.infinitiaresearch.com/wp-content/uploads/contaminantes-fisicos-1.png.webp",
    classes: [
      {
        title: "Introducción a los Peligros Físicos y Químicos",
        description: "Esta sesión introductoria aborda los peligros físicos y químicos que pueden afectar la seguridad alimentaria.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 1
      },
      {
        title: "Peligros Físicos",
        description: "Esta sesión aborda los peligros físicos que pueden afectar la seguridad alimentaria, incluyendo vidrios, metales, piedras, madera, plásticos, huesos, dientes, conchas, huesos de frutas, y otros.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 2
      },
      {
        title: "Peligros Químicos",
        description: "Esta sesión aborda los peligros químicos que pueden afectar la seguridad alimentaria, incluyendo pesticidas, metales pesados, aditivos, y otros.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 3
      }
    ]
  },
  {
    title: "Principios de Seguridad Alimentaria",
    description: "Curso que introduce principios relativos a la seguridad en los alimentos, incluyendo factores implicados en enfermedades provocadas por alimentos y el control del tiempo/temperatura en parásitos.",
    imageSrc:"https://www.euraslog.com/wp-content/uploads/2020/02/SEGURIDAD-ALIMENTARIA-1024x683.jpg",
    classes: [
      {
        title: "Introducción a la Seguridad Alimentaria",
        description: "Esta sesión introductoria aborda los principios de seguridad alimentaria, incluyendo factores implicados en enfermedades provocadas por alimentos y el control del tiempo/temperatura en parásitos.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 1
      },
      {
        title: "Principios de Seguridad Alimentaria I",
        description: "Esta sesión aborda los principios de seguridad alimentaria, incluyendo factores implicados en enfermedades provocadas por alimentos y el control del tiempo/temperatura en parásitos.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 2
      },
      {
        title: "Principios de Seguridad Alimentaria II",
        description: "Esta sesión aborda los principios de seguridad alimentaria, incluyendo factores implicados en enfermedades provocadas por alimentos y el control del tiempo/temperatura en parásitos.",
        imageSrc: "",
        videoSrc: "",
        classNumber: 3
      }

    ]
  },
  {
    title: "Introducción a HACCP",
    description: "Curso introductorio sobre el sistema HACCP, cubriendo la secuencia de alimentos y los siete principios de HACCP.",
    imageSrc:"https://www.halalflash.com/wp-content/uploads/2023/03/Logo_HACCP.jpg",
    classes: [
      {
        title: "",
        description: "",
        imageSrc: "",
        videoSrc: "",
        classNumber: 1
      }
    ]
  },
  {
    title: "Procedimientos de Control en HACCP",
    description: "Curso que explora cómo establecer procedimientos de control dentro del sistema HACCP.",
    imageSrc: "https://5.imimg.com/data5/SELLER/Default/2023/8/331747720/UR/RM/XD/37556463/haccp-certification-500x500.jpg",
    classes: [
      {
        title: "",
        description: "",
        imageSrc: "",
        videoSrc: "",
        classNumber: 1
      }
    ]
  },
  {
    title: "Procedimientos de Verificación en HACCP",
    description: "Curso que aborda cómo realizar procedimientos de verificación en el sistema HACCP.",
    imageSrc:"https://www.halalflash.com/wp-content/uploads/2023/03/Logo_HACCP.jpg",
    classes: [
      {
        title: "",
        description: "",
        imageSrc: "",
        videoSrc: "",
        classNumber: 1
      }
    ]
  },
]
