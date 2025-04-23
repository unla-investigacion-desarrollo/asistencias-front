let usuario = JSON.parse(localStorage.getItem("usuario"));
let perfil = (usuario !== null || usuario !== undefined) ? null : usuario.tipoUsuario.rol;

const validarUsuarioPermisos = () => {
    let accede = false;
    if (perfil !== null && (perfil === 'Administrador' || perfil === 'SemiAdministrador')) {
        accede = true;
    }
    return accede;
}

const validarPerfil = () => {
    let accede = false;
    if (perfil === 'Administrador') {
        accede = true;
    }
        
    return accede;
}

const validarEvento = () => {
    let accede = false;
    if (perfil === 'Administrador' || perfil === 'SemiAdministrador') {
        accede = true;
    }
        
    return accede;
}

const validarActividad = () => {
    let accede = false;
    if (perfil === 'Administrador' || perfil === 'SemiAdministrador') {
        accede = true;
    }
    return accede;
}

export {
    validarUsuarioPermisos, validarPerfil, validarEvento,
    validarActividad
  };
  