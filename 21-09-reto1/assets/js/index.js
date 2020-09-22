let letras = ['A','B','C','D','E','F','G','H','I','','J', 'reset']
let numeros = [1,2,3,4,5,6,7,8,9,'',0,'']

let espacioLetras = document.getElementById('espacio-letras');
let espacioNumeros = document.getElementById('espacio-numeros');
let pL = document.createElement('p');
let pN = document.createElement('p');
espacioLetras.appendChild(pL);
espacioNumeros.appendChild(pN);
let letrasInternas = [];
let numerosInternos = [];
for(let i = 0; i < letras.length; i++){
    // creación de botones:
    let span = document.createElement('span');
    span.setAttribute('id', `boton${i}`)
    if(letras[i] === 'reset'|| letras[i] === ''){
        span.innerText = letras[i];
    }else{
        span.innerText = letras[i] + ' - ' + numeros[i];
    }
    document.getElementById('espacio-botones').appendChild(span);
    //funcionalidad de botones:
    llenarNumeros = false
    mostrarMensaje = false
    span.addEventListener('click', () => {
        if(!llenarNumeros){
            let letra = span.innerText[0];
            if(letrasInternas.includes(letra)){
                alert(`${letra} ya existe!`)
            }else if(Math.abs((i+1)-letrasInternas.length) > 1 ){
                if(letras[i] === 'J' && Math.abs((i+1)-letrasInternas.length) == 2){
                    letrasInternas.push(letra);
                    pL.innerText = letrasInternas.join().replace(/,/gi, '');
                    llenarNumeros = true
                }
            }
            else {
                letrasInternas.push(letra);
                pL.innerText = letrasInternas.join().replace(/,/gi, '');
            }
        }else{
            let numero = span.innerText[4];
            if(numerosInternos.includes(numero)){
                alert(`${numero} ya existe!`)
            }else if(Math.abs((i+1)-numerosInternos.length) > 1 ){
                if(numeros[i] === 0 && Math.abs((i+1)-numerosInternos.length) == 2){
                    numerosInternos.push(numero);
                    pN.innerText = numerosInternos.join().replace(/,/gi, '');
                    mostrarMensaje = true
                }
            }
            else {
                numerosInternos.push(numero);
                pN.innerText = numerosInternos.join().replace(/,/gi, '');
            }
        }
    })

}

