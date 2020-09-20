if(localStorage.getItem('userData') === null){
    window.location.assign('file:///C:/Users/segun/Desktop/1.INSERCOR/1.PROGRAMACION/bictia/Actividades-Bictia/actividad-register-login-todo-teclado/index.html')
}
let data = JSON.parse(localStorage.getItem('userData'))
console.log(data.nombre)
document.getElementById('user-name').innerHTML = data.nombre;
const tareas = []
let hayTareas = localStorage.getItem('tarea')
if(hayTareas !== null){
    tareas.push(hayTareas)
}
const anadirTarea = (e) => {
    e.preventDefault()
    let tarea = document.getElementById('input-tarea').value
    tareas.push(tarea)
    localStorage.removeItem(tarea)
    localStorage.setItem('tarea', tareas)

    pintarTareasNuevas()
}
const pintarTareasNuevas = () => {
    document.getElementById('lists-works').remove()
    let espacioDeTareas = document.getElementById('espacio-de-tareas');
    let ul = document.createElement('ul')
    espacioDeTareas.appendChild(ul)
    document.getElementsByTagName('ul')[0].setAttribute('id', 'lists-works')
    let listaDeTareas = document.getElementById('lists-works');
    let tareasEnStorage = localStorage.getItem('tarea').split(',')
    for(let i = 0; i < tareasEnStorage.length; i++){
        let li = document.createElement('li');
        let tarea = document.createTextNode(`${tareasEnStorage[i]}`);
        li.appendChild(tarea)
        listaDeTareas.appendChild(li)
        document.getElementsByTagName('li')[i].setAttribute('id', 'items')
    }
}
const pintarTareas = () => {
    if(localStorage.getItem('tarea') !== null){
        let listaDeTareas = document.getElementById('lists-works');
        let tareasEnStorage = localStorage.getItem('tarea').split(',')
        for(let i = 0; i < tareasEnStorage.length; i++){
            let li = document.createElement('li');
            let tarea = document.createTextNode(`${tareasEnStorage[i]}`);
            li.appendChild(tarea)
            listaDeTareas.appendChild(li)
            document.getElementsByTagName('li')[i].setAttribute('id', 'items')
        }
    }
}
pintarTareas()

const irATeclado = () => {
    window.location.assign('file:///C:/Users/segun/Desktop/1.INSERCOR/1.PROGRAMACION/bictia/Actividades-Bictia/actividad-register-login-todo-teclado/assets/pages/teclado.html')
}