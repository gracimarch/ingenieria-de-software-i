function crearUsuario(name, email) {
    return {
        id: 1,
        email,
        name,
        activo: true,
        recuperarClave: function () {
            console.log('Recuperando clave...');
        },
    };
}

let user1 = crearUsuario('Juan', 'juan@holamundo.io');
let user2 = crearUsuario('Ramoncito', 'ramoncito@holamundo.io');

console.log(user1, user2);