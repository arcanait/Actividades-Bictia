//URL de la API
const PUBLIC_KEY  = '1242c056d3aff787a2b3b4a084cebd59';
const PRIVATE_KEY  = 'a055e76ac458fdcfd98ff58e62eed5c654f76c2f';
let ts = new Date();
let llave = ts + PUBLIC_KEY + PRIVATE_KEY;
const url = 'https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=1242c056d3aff787a2b3b4a084cebd59&hash=5a2f6b2ccee9f7386f11828d19705ceb';
let heroes = []
// Obtener resultado de API
const getData = (api) => {
    heroes = []
    return fetch(api)
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            obtenerDescripcion(json.data.results)
            // paginacion(json);
        })
        .catch((error) => {
            console.log("Error :", error);
        });
};

const obtenerDescripcion = (results) => {
    results.forEach(superHero => {
        heroes.push({
            name: superHero.name,
            image: superHero.thumbnail.path + '.' + superHero.thumbnail.extension
        })
    })
    llenarDatos()
}



const llenarDatos = () => {
    let html = "";
    heroes.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 10rem;">';
        html += `<img src="${pj.image}" class="card-img-top" alt="...">`;
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
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
getData(url);