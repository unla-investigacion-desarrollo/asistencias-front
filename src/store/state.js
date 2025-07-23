export default {
    usuario: {
        email: "nehuen.db@gmail.com",
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
        descripcion: "",
        audios: [],
        videos: [],
        imagenes: [],
        evento: {}
    },
    eventosFormateados: [],
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
    titulosContenido: null,
    actividades: [],
    roles: [],
    contenidos: [],
    editoActividad: false,
    editoUsuario: false,
    editoRol: false,
    editoEvento: false,
    editoTipoEvento: false,
    editoContenido: false,
    editoInscripcion: false,
    eliminoActividad: false,
    eliminoUsuario: false,
    eliminoRol: false,
    eliminoEvento: false,
    eliminoTipoEvento: false,
    eliminoInscripcion: false,
    eliminoContenido: false,
    agregoContenido: false,
    agregoActividad: false,
    agregoUsuario: false,
    agregoRol: false,
    agregoEvento: false,
    agregoTipoEvento: false,
    registroInscripcion: false,
    error: "",
    filtroCategoriaEvento: "",
    agregoAudio: false,
    eliminoAudio: false,
    editoAudio: false,
    agregoImagen: false,
    eliminoImagen: false,
    editoImagen: false,
    agregoVideo: false,
    eliminoVideo: false,
    editoVideo: false,
}