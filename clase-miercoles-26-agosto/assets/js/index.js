
document.getElementById('suma').addEventListener('click', () => {
    var numero1 = document.getElementById('numero1').value
    var numero2 = document.getElementById('numero2').value
    let signo = document.getElementById('suma').innerHTML
    operarSegunSigno( signo ,numero1, numero2)
})
document.getElementById('resta').addEventListener('click', () => {
    var numero1 = document.getElementById('numero1').value
    var numero2 = document.getElementById('numero2').value
    let signo = document.getElementById('resta').innerHTML
    operarSegunSigno( signo ,numero1, numero2)
})
document.getElementById('multiplicacion').addEventListener('click', () => {
    var numero1 = document.getElementById('numero1').value
    var numero2 = document.getElementById('numero2').value
    let signo = document.getElementById('multiplicacion').innerHTML
    operarSegunSigno( signo ,numero1, numero2)
})
document.getElementById('division').addEventListener('click', () => {
    var numero1 = document.getElementById('numero1').value
    var numero2 = document.getElementById('numero2').value
    let signo = document.getElementById('division').innerHTML
    operarSegunSigno( signo ,numero1, numero2)
})
var historial = [];

operarSegunSigno = (signo, numero1, numero2) => {
    let a = parseFloat(numero1)
    let b = parseFloat(numero2)
    switch(signo){
        case '+':
            let miSuma = suma(a, b)
            historial.push(`${a} + ${b} = ${miSuma}`)
            crearHistorial()
            // return alert(`la suma de ${a} y ${b} es: ${miSuma}`);
            break
        case '-':
            let miResta = resta(a, b)
            historial.push(`${a} - ${b} = ${miResta}`)
            crearHistorial()
            // return alert(`la resta de ${a} y ${b} es: ${miResta}`);
            break
        case '*':
            let miMultiplicacion = multiplicacion(a, b)
            crearHistorial()
            historial.push(`${a} * ${b} = ${miMultiplicacion}`)
            // return alert(`la multiplicación de ${a} y ${b} es: ${miMultiplicacion}`);
            break
        case '/':
            let miDivision = division(a, b)
            crearHistorial()
            historial.push(`${a} / ${b} = ${miDivision}`)
        // return alert(`la división de ${a} entre ${b} es: ${miDivision}`);
        break
        default:
            return console.log('algo anda mal')
        }
}

const crearHistorial = () => {
        let li = document.createElement('li');
        let calculo = document.createTextNode(`${historial[0]}`);
        li.appendChild(calculo);
        let ulHistorial = document.getElementById('historial');
        ulHistorial.appendChild(li);
        console.log(historial[0])
        historial = [];
}


const suma = (numero1, numero2) => {
    return numero1 + numero2
}    
const resta = (numero1, numero2) => {
    return numero1 - numero2
}    
const multiplicacion = (numero1, numero2) => {
    return numero1 * numero2
}    
const division = (numero1, numero2) => {
    return numero1 / numero2
}    


