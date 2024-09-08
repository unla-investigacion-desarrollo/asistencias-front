export default {
    getUsuario: state => () => state.usuario,
    getTipoEventos: state => () => state.tipoEventos,
    getEvento: state => () => state.evento,
    getParticipante: state => () => state.participante,
    getTipoUsuario: state => () => state.tipoUsuario,
    getTipoEvento: state => () => state.tipoEvento,
    getEventos: state => () => state.eventos,
    getAudio: state => () => state.audio,
    getVideo: state => () => state.video,
    getImagen: state => () => state.imagen,
    getContenido: state => () => state.contenido,
    getAudios: state => () => state.audios,
    getVideos: state => () => state.videos,
    getImagenes: state => () => state.imagenes,
    getActividad: state => () => state.actividad,
    getActividades: state => () => state.actividades,
    getRoles: state => () => state.roles
  };