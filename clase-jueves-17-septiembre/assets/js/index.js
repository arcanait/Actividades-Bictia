let artistArray = [];

document.getElementById('formulario').addEventListener('submit', (e) => {
    e.preventDefault()
    let nombre = document.getElementById('nombre').value
    let genero = document.getElementById('genero').value
    let edad = document.getElementById('edad').value
    
    const artist = {
        nombre,
        genero,
        edad
    }

    validarExistencia(artist)
})

const validarExistencia = (artista) => {
    let local = localStorage.getItem('artist');
    let artistArray = []
    artistArray.push(artista)
    if(local === null){
        localStorage.setItem('artist', JSON.stringify(artistArray));
        pintarDatosDeTabla()
    }else {
        let storageAntiguo = JSON.parse(localStorage.getItem('artist'));
        artistArray.push(...storageAntiguo);
        localStorage.setItem('artist', JSON.stringify(artistArray));
        pintarDatosDeTabla()
    }
}

const tabla = document.getElementById('tabla')

const pintarDatosDeTabla = () =>{
    let datos = JSON.parse(localStorage.getItem('artist'));
        let mascotas = datos.map((datos, i) => {return `
        <tr>
            <th>${i}</th>
            <td>${datos.nombre}</td>
            <td>${datos.genero}</td>
            <td>${datos.edad}</td>
        </tr>
        `})
    
        tabla.innerHTML= mascotas

}

