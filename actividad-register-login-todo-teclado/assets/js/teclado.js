let espacioTeclas = document.getElementById('teclas')
const teclas = [1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ñ','z','x','c','v','b','n','m','ENTER', '<<<<<<<']
for(let i= 0; i < teclas.length; i++){
    let tecla = document.createElement('span')
    espacioTeclas.appendChild(tecla)
    document.getElementsByTagName(`span`)[i].setAttribute('id', `tecla${i}`)
    document.getElementsByTagName(`span`)[i].setAttribute('class', 'tecla')
    document.getElementById(`tecla${i}`).innerText = teclas[i]
    document.getElementById(`tecla${i}`).addEventListener('click', ()=> {
        teclear(i)
    })
}
let simboloEnPantalla = document.createElement('span');
let espacioTexto = document.getElementById('texto-teclado');
let arrayTexto = [];
const teclear = (i) => {
    if(i === 37){
        let textoModificado = arrayTexto.join().replace(/,/gi,'')
        localStorage.setItem('listaDeTareas', JSON.stringify(textoModificado))
        window.location.assign('file:///C:/Users/segun/Desktop/1.INSERCOR/1.PROGRAMACION/bictia/Actividades-Bictia/actividad-register-login-todo-teclado/assets/pages/todo.html')
    }else if(i === 38){
        espacioTexto.appendChild(simboloEnPantalla)
        arrayTexto.pop()
        let textoModificado = arrayTexto.join().replace(/,/gi,'')
        simboloEnPantalla.innerText = textoModificado
    }
    else{
        let simbolo = teclas[i]
        espacioTexto.appendChild(simboloEnPantalla)
        arrayTexto.push(simbolo)
        let textoModificado = arrayTexto.join().replace(/,/gi,'')
        simboloEnPantalla.innerText = textoModificado
    }
}

