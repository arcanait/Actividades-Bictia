//URL de la API
const API = "https://pokeapi.co/api/v2/pokemon";

let pokemones = []
// Obtener resultado de API
const getData = (api) => {
    pokemones = []
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            obtenerDescripcion(json)
            paginacion(json);
        })
        .catch((error) => {
            console.log("Error :", error);
        });
};

const obtenerDescripcion = (json) => {
    json.results.forEach(pokemon => {
        return  fetch(pokemon.url)
            .then(response => response.json())
            .then(descripcion => {
                // crearPokemon(json, descripcion)
                pokemones.push({
                    nombre: pokemon.name,
                    imagen: descripcion.sprites.front_default
                })
            })
            .then(()=> {
                llenarDatos()
            })
    })
}

// const crearPokemon = (json, descripcion) => {
//     json.results.forEach(pokemon => {
//         pokemones.push({
//             nombre: pokemon.name,
//             imagen: descripcion.sprites.front_default
//         })
//     })
//     llenarDatos();
// }

const llenarDatos = () => {
    let html = "";
    pokemones.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 10rem;">';
        html += `<img src="${pj.imagen}" class="card-img-top" alt="...">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.nombre}</h5>`;
        // html += `<p class="card-text">${pj.species}</p>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
    });
    document.getElementById("datosPersonajes").innerHTML = html;
};

//paginación:

const paginacion = (info) => {

    let prevDisabled = info.previous == null? "disabled": "";
    let nextDisabled = info.next == null? "disabled": "";

    let html = "";
    html += `<li class="page-item ${prevDisabled}"><a class="page-link" onclick="getData('${info.previous}')">Previous<a/></li>`;
    html += `<li class="page-item ${nextDisabled}"><a class="page-link" onclick="getData('${info.next}')">Next<a/></li>`;
    document.getElementById("paginacion").innerHTML = html;
}

//EjecutargetData
getData(API);