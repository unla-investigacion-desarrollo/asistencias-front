export default {
    usuario: {
        email: "",
        password: "",
        nombre: "",
        apellido: "",
        dni: "",
        usuario: "",
        tipoUsuario: {}
    },
    usuarios: [],
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
        tipoEvento: {},
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
        usuario: null,
        evento: null,
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
        evento: {},
        cupo: "",
        cupoLimite: ""
    },
    actividades: [],
    roles: []
}