function validarUsuario() {
    let accede = false;
    let perfil = localStorage.getItem('usuario');
    if (perfil === 'admin' || perfil === 'semiadmin') {
        accede = true;
    }
        
    return accede;
}

function validarPerfil() {
    let accede = false;
    let perfil = localStorage.getItem('usuario');
    if (perfil === 'admin') {
        accede = true;
    }
        
    return accede;
}

function validarEvento() {
    let accede = false;
    let perfil = localStorage.getItem('usuario');
    if (perfil === 'admin' || perfil === 'semiadmin') {
        accede = true;
    }
        
    return accede;
}

function validarActividad() {
    let accede = false;
    let perfil = localStorage.getItem('usuario');
    if (perfil === 'admin' || perfil === 'semiadmin') {
        accede = true;
    }
        
    return accede;
}