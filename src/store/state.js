export default {
    usuario: {
        email: "",
        password: "",
        nombre: "",
        apellido: "",
        dni: "",
        usuario: "",
        tu: {}
    },
    spinner: false,
    tipoEventos: [],
    eventos: [],
    evento: {
        nombre: "",
        descripcion: "",
        fechaInicio: "",
        fechaFin: "",
        edificio: "",
        ubicacion: "",
        estado: "Creado",
        te: {},
        linkCertificado: ""
    },
    tipoEvento: {
        nombre: "",
        descripcion: ""
    },
    participante: {
        nombre: "",
        apellido: "",
        dni: "",
        email: "",
        evento: {}
    },
    tipoUsuario: {
        rol: ""
    },
    inscripciones: [],
    inscripcion: {
        idInscripcion: "",
        p: null,
        e: null,
        asistencia: false,
        certificadoEnviado: false
    },
    audio: {
        audio: ""
    },
    video: {
        video: ""
    },
    imagen: {
        imagen: ""
    },
    contenido: {
        titulo: "",
        descripcion: ""
    },
    audios: [],
    videos: [],
    imagenes: [],
    actividad: {
        nombre: "",
        descripcion: "",
        fechaInicio: "",
        fechaFin: "",
        edificio: "",
        ubicacion: "",
        estado: "Creado",
        e: {},
        cupo: "",
        cupoLimite: ""
    },
    actividades: []
}