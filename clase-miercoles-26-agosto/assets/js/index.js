
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
operarSegunSigno = (signo, numero1, numero2) => {
    let a = parseFloat(numero1)
    let b = parseFloat(numero2)
    let historial = [];
    switch(signo){
        case '+':
            let miSuma = suma(a, b)
            return alert(`la suma de ${a} y ${b} es: ${miSuma}`) ;
        case '-':
            let miResta = resta(a, b)
            return alert(`la resta de ${a} y ${b} es: ${miResta}`) ;
        case '*':
            let miMultiplicacion = multiplicacion(a, b)
            return alert(`la multiplicación de ${a} y ${b} es: ${miMultiplicacion}`) ;
        case '/':
            let miDivision = division(a, b)
        return alert(`la división de ${a} entre ${b} es: ${miDivision}`) ;
        default:
            return console.log('algo anda mal')
    }
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

