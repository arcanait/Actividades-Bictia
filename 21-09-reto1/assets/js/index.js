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
//para cambio de tema:
// let retro = document.getElementById('tema1').checked
// let oscuro = document.getElementById('tema2').checked
document.getElementById('tema1').addEventListener('click', () => {
    document.getElementById('contenedor').classList.remove('oscuro')
    document.getElementById('contenedor').classList.add('retro')
})
document.getElementById('tema2').addEventListener('click', () => {
    document.getElementById('contenedor').classList.remove('retro')
    document.getElementById('contenedor').classList.add('oscuro')
})
mostrarMensaje = false;
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
    span.addEventListener('click', () => {
        if(!llenarNumeros){
            let letra = span.innerText[0];
            if(letrasInternas.includes(letra)){
                Swal.fire(
                    `'${letra}' ya fue puesta`,
                    'tienes que seguir la secuencia sin repetir',
                    'warning'
                )
            }else if(Math.abs((i+1)-letrasInternas.length) > 1 ){
                // switch(i){
                //     case 1:
                //         Swal.fire(
                //             `¡Sigue la secuencia!`,
                //             `Te falta darle click a A-1` ,
                //             'warning'
                //         );
                //         break
                //     case 2:
                //         Swal.fire(
                //             `¡Sigue la secuencia!`,
                //             `Te falta darle click a A-1, B-2` ,
                //             'warning'
                //         );
                //         break
                //     case 3:
                //         Swal.fire(
                //             `¡Sigue la secuencia!`,
                //             `Te falta darle click a A-1, B-2, C-3` ,
                //             'warning'
                //         );
                //         break
                //     case 4:
                //         Swal.fire(
                //             `¡Sigue la secuencia!`,
                //             `Te falta darle click a A-1, B-2, C-3, D-4` ,
                //             'warning'
                //         );
                //         break
                //     case 5:
                //         Swal.fire(
                //             `¡Sigue la secuencia!`,
                //             `Te falta darle click a A-1, B-2, C-3, D-4, E-5` ,
                //             'warning'
                //         );
                //         break
                //     case 6:
                //         Swal.fire(
                //             `¡Sigue la secuencia!`,
                //             `Te falta darle click a A-1, B-2, C-3, D-4, E-5, F-6` ,
                //             'warning'
                //         );
                //         break
                //     case 7:
                //         Swal.fire(
                //             `¡Sigue la secuencia!`,
                //             `Te falta darle click a A-1, B-2, C-3, D-4, E-5, F-6, G-7` ,
                //             'warning'
                //         );
                //         break
                //     case 8:
                //         Swal.fire(
                //             `¡Sigue la secuencia!`,
                //             `Te falta darle click a A-1, B-2, C-3, D-4, E-5, F-6, G-7, H-8` ,
                //             'warning'
                //         );
                //         break
                //     case 10:
                //         Swal.fire(
                //             `¡Sigue la secuencia!`,
                //             `Te falta darle click a A-1, B-2, C-3, D-4, E-5, F-6, G-7, H-8, I-9` ,
                //             'warning'
                //         );
                //         break
                // }
                if(letras[i] === 'J' && Math.abs((i+1)-letrasInternas.length) == 2){
                    letrasInternas.push(letra);
                    pL.innerText = letrasInternas.join().replace(/,/gi, '');
                    llenarNumeros = true;
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
                    Swal.fire(
                        'Buen trabajo!',
                        'completaste la secuencia',
                        'success'
                    )
                    numerosInternos = [];
                    letrasInternas = [];
                    pN.innerText = '';
                    pL.innerText = '';
                    llenarNumeros = false;
                }
            }
            else {
                numerosInternos.push(numero);
                pN.innerText = numerosInternos.join().replace(/,/gi, '');
            }
        }
    })
}

