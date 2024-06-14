export default {
    getUsuario: state => () => state.usuario,
    getTipoEventos: state => () => state.tipoEventos,
    getEvento: state => () => state.evento,
    getParticipante: state => () => state.participante,
    getTipoUsuario: state => () => state.tipoUsuario,
  };