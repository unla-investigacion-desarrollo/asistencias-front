const eventos = [
      'Jornada de investigacion',
      'Expo Unla'
  ];

const normalizarCaracteres = str => {
    if (typeof str !== "string") return str;
    return str
      ? (str + "").normalize("NFD").replace(/[\u0300-\u036f]/g, "")
      : str;
  };

const normalizarDatos = payload => {
    const payloadStr = JSON.stringify(payload);
    const payloadNormalizadoStr = normalizarCaracteres(payloadStr);
    return JSON.parse(payloadNormalizadoStr);
};

const formatearFecha = f => {
  let formato = "";
  if(f != null){
    let anio = f.substring(0, 4);
    let mes = f.substring(5, 7);
    let dia = f.substring(8, 10);
    let hora = f.substring(11, 13);
    let min = f.substring(14, 16);
    formato = dia + "-" + mes + "-" + anio + ", " +  hora + ":" + min;
  }
  return formato;
};

const estados = [ 'Creado', 'Iniciado', 'Terminado', 'Suspendido', 'Aplazado' ];

const seleccionActividades = [ 'Todas', 'Elijo actividades' ];

const filtroContenido = [ 'Evento', 'Titulo' ];

const key = localStorage.getItem("keyuser");

const dominio = "http://localhost:8080/eventos"; 

const hoy = new Date();
const anio = hoy.getFullYear();
const mes = String(hoy.getMonth() + 1).padStart(2, '0');
const dia = String(hoy.getDate()).padStart(2, '0');
const hora = String(hoy.getHours()).padStart(2, '0');
const minuto = String(hoy.getMinutes()).padStart(2, '0');
const segundo = String(hoy.getSeconds()).padStart(2, '0');

// Formateo la fecha en el formato "YYYY-MM-DDTHH:mm:ss"
const hoyFormateado = `${anio}-${mes}-${dia}T${hora}:${minuto}:${segundo}`;

const usuario = localStorage.getItem("usuario");

export {
  dominio, estados, eventos,
  normalizarCaracteres,
  normalizarDatos,
  seleccionActividades, key, filtroContenido, hoyFormateado, usuario, formatearFecha
};

