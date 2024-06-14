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

const dominio = "http://localhost:8080/api";

  export {
    eventos,
    normalizarCaracteres,
    normalizarDatos,
    dominio
  }

