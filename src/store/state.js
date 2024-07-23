export default {
    usuario: {
        email: "",
        password: ""
    },
    spinner: false,
    tipoEventos: [],
    eventos: [],
    evento: {
        nombre: "",
        descripcion: "",
        fechaInicio: "",
        fechaFin: "",
        ubicacion: "",
        estado: "Creado",
        te: {},
        linkCertificado: ""
    },
    tipoEvento: {
        tipoEvento: "",
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
    imagenes: []
}