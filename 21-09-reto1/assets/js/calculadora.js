let teclas = ['%','CE','C','<-','1/x','x^2','raizx','/',7,8,9,'*',4,5,6,'-',1,2,3,'+','+/-',0,',','='];
let numeros = [1,2,3,4,5,6,7,8,9,0]
let teclado = document.getElementById('teclas');
let primerArgumento = document.getElementById('espacio-primer-argumento');
let historial = document.getElementById('espacio-para-historial');
let dictado = [];
let listaHistorial = [];
let historialEnLocalStorage = localStorage.getItem('historial');
if(historialEnLocalStorage !== null){
    let his = historialEnLocalStorage.split(',');
    his.forEach((item, i) => {
        let span = document.createElement('span');
        span.setAttribute('id', `spanHistorial${i}`);
        span.setAttribute('class', 'spanHistorial');
        span.innerText = item;
        historial.appendChild(span)
    })
}
for(let i = 0; i < teclas.length; i++){
    if(typeof(teclas[i]) === 'number'){
        let span = document.createElement('span');
        span.setAttribute('id', `span${i}`);
        span.setAttribute('class', `spanNumero`);
        span.innerText = teclas[i];
        teclado.appendChild(span);
        span.addEventListener('click', () => {
            dictado.push(teclas[i]);
            primerArgumento.innerText = dictado.join().replace(/,/gi,'');
        })
    }else if(typeof(teclas[i]) === 'string'){
        let span = document.createElement('span');
        span.setAttribute('id', `span${i}`);
        span.setAttribute('class', `span`);
        span.innerText = teclas[i];
        teclado.appendChild(span);
        span.addEventListener('click', () => {
            if(teclas[i] === '='){
                let operacion = hacerOperacion(dictado);
                primerArgumento.innerText = operacion
                pintarElementosEnHistorial(dictado.join().replace(/,/gi,''), operacion)
            }else if(teclas[i] === 'C' ){
                dictado = [];
                primerArgumento.innerText = '';
            }else if( teclas[i] === 'CE'){
                listaHistorial = [];
                historial.innerText = '';
                dictado = [];
                primerArgumento.innerText = '';
            }
            else if(teclas[i] === '<-'){
                dictado.pop();
                primerArgumento.innerText = dictado.join().replace(/,/gi,'');
            }
            else{
                dictado.push(teclas[i]);
                primerArgumento.innerText = dictado.join().replace(/,/gi,'');
            }

        })     
    }
}

const hacerOperacion = (numeros) => {
    let numeros1
    let numeros2
    let signo
    numeros.forEach(numero => {
        if(typeof(numero) !== 'number'){
            signo = numero
        }
    })
    numeros1 = parseFloat(numeros.join().replace(/,/gi, '').split(signo)[0])
    numeros2 = parseFloat(numeros.join().replace(/,/gi, '').split(signo)[1])

    switch(signo){
        case '*':
            return (typeof(numeros1 * numeros2) === 'number')? numeros1 * numeros2 : 'Math Error';
        case '/':
            return (typeof(numeros1 / numeros2) === 'number')? numeros1 / numeros2 : 'Math Error';
        case '+':
            return (typeof(numeros1+numeros2) === 'number')? numeros1+numeros2 : 'Math Error';
        case '-':
            return (typeof(numeros1 - numeros2) === 'number')? numeros1 - numeros2: 'Math Error';
        case 'x^2':
            return (typeof(Math.pow(numeros1, 2)) === 'number')? Math.pow(numeros1, 2) :  'Math Error';
        case '1/x':
            return (typeof(1 / numeros1) === 'number')? 1 / numeros1 : 'Math Error';
        case 'raizx':
            return (typeof(Math.sqrt(numeros1)) === 'number')? Math.sqrt(numeros1):'Math Error';
        default:
            return 'Sintaxis error'
    }
}

let historialEnArray = [];
const pintarElementosEnHistorial = (items, resultado) => {
    listaHistorial = [];
    listaHistorial.push(items)
    listaHistorial.forEach((item, i) => {
        historialEnArray.push(`${item} = <b>${resultado}</b>`)
        localStorage.setItem('historial', [historialEnArray])
        let span = document.createElement('span');
        span.setAttribute('id', `spanHistorial${i}`);
        span.setAttribute('class', 'spanHistorial');
        span.innerText = `${item} = ${resultado}` 
        historial.appendChild(span)
    })

}