// personaje de TV
let nombre = "Armin";
let anime  = "SNK";
let edad = 17;

let personaje = {
    nombre: "Armin",
    anime: "SNK",
    edad: 17, 
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje['anime']);

personaje.edad = 21;

let llave = 'edad';
personaje[llave] = 18;

delete personaje.anime;

console.log(personaje);