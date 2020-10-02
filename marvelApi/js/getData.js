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
        html += "</div>";
        html += "</div>";
        html += "</div>";
    });
    document.getElementById("datosPersonajes").innerHTML = html;
};


//EjecutargetData
getData(url);