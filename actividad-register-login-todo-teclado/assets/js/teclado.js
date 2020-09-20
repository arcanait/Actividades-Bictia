let espacioTeclas = document.getElementById('teclas')
const teclas = [1,2,3,4,5,6,7,8,9,0,'q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','ñ','z','x','c','v','b','n','m']
for(let i= 0; i < teclas.length; i++){
    let tecla = document.createElement('span')
    espacioTeclas.appendChild(tecla)
    document.getElementsByTagName(`span`)[i].setAttribute('id', `tecla${i}`)
    document.getElementsByTagName(`span`)[i].setAttribute('class', 'tecla')
    document.getElementById(`tecla${i}`).innerText = teclas[i]
}