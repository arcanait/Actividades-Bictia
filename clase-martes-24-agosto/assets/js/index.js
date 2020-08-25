// let miNombre = prompt('¿Cuál es tu nombre?')
// let miApodo = prompt('¿Cuál es tu apodo?')

// alert(`tu nombre es ${miNombre} y tu apodo es ${miApodo}!!`)

var informacionArtista1 = {
    'nombre': '',
    'edad': '',
    'genero': ''
};
var informacionArtista2 = {
    'nombre': '',
    'edad': '',
    'genero': ''
};
var informacionArtista3 = {
    'nombre': '',
    'edad': '',
    'genero': ''
};

const pedirInformacion = (valor) => {
    switch(valor){
        case 'artista1':
            let nombre = prompt('¿Cuál es el nombre del artista?');
            informacionArtista1.nombre = nombre;
            let edad =  prompt('¿Cuál es la edad del artista?');
            informacionArtista1.edad = edad;
            let genero = prompt('¿Cuál es el género musical del artista?');
            informacionArtista1.genero = genero;
            break
        case 'artista2':
            let nombre2 = prompt('¿Cuál es el nombre del artista?');
            informacionArtista2.nombre = nombre2;
            let edad2 =  prompt('¿Cuál es la edad del artista?');
            informacionArtista2.edad = edad2;
            let genero2 = prompt('¿Cuál es el género musical del artista?');
            informacionArtista2.genero = genero2;
            break
        case 'artista3':
            let nombre3 = prompt('¿Cuál es el nombre del artista?');
            informacionArtista3.nombre = nombre3;
            let edad3 =  prompt('¿Cuál es la edad del artista?');
            informacionArtista3.edad = edad3;
            let genero3 = prompt('¿Cuál es el género musical del artista?');
            informacionArtista3.genero = genero3;
            default: 
                console.log('Ok')
    }  
}
const pintarInformacion = () => {
    
    let divNombre1 = document.getElementById('nombre1')
    let divEdad1 = document.getElementById('edad1')
    let divGenero1 = document.getElementById('genero1')
    let divNombre2 = document.getElementById('nombre2')
    let divEdad2 = document.getElementById('edad2')
    let divGenero2 = document.getElementById('genero2')
    let divNombre3 = document.getElementById('nombre3')
    let divEdad3 = document.getElementById('edad3')
    let divGenero3 = document.getElementById('genero3')
    divNombre1.innerText = informacionArtista1.nombre
    divEdad1.innerText = informacionArtista1.edad
    divGenero1.innerText = informacionArtista1.genero
    divNombre2.innerText = informacionArtista2.nombre
    divEdad2.innerText = informacionArtista2.edad
    divGenero2.innerText = informacionArtista2.genero
    divNombre3.innerText = informacionArtista3.nombre
    divEdad3.innerText = informacionArtista3.edad
    divGenero3.innerText = informacionArtista3.genero
}

// `tu nombre es ${array[0]} y tu apodo es ${array[1]}`
let btnartista1 = document.querySelector('#btn-artista1')
let btnartista2 = document.querySelector('#btn-artista2')
let btnartista3 = document.querySelector('#btn-artista3')

btnartista1.addEventListener('click', () => {
    pedirInformacion('artista1');
    pintarInformacion()
} )
btnartista2.addEventListener('click', () => {
    pedirInformacion('artista2');
    pintarInformacion()
} )
btnartista3.addEventListener('click', () => {
    pedirInformacion('artista3');
    pintarInformacion()
} )
