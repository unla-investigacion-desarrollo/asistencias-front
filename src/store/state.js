export default {
    usuario: {
        email: "",
        clave: "",
        nombre: "",
        apellido: "",
        dni: "",
        usuario: "",
        tipoUsuario: {
            rol: "Participante"
        },
        hash: ""
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
        seleccion: "Todas",
        actividades: [],
        idInscripcion: "",
        usuario: {},
        evento: {},
        actividad: {},
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