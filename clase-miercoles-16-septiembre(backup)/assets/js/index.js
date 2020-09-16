const btnDark = document.getElementById('dark')
const btnWhite = document.getElementById('white')
const btnHover = document.getElementById('zona')

btnHover.addEventListener('mouseover', ()=>{
    document.getElementById('tema').classList.add('temaHover');
})

document.getElementById('container').classList.remove('white');
const colorAnterior = localStorage.getItem('color');
document.getElementById('container').classList.add(colorAnterior);

btnDark.addEventListener('mouseout', ()=>{
    document.getElementById('tema').classList.remove('temaHover');
})

btnWhite.addEventListener('mouseout', ()=>{
    document.getElementById('tema').classList.remove('temaHover');
})

btnDark.addEventListener('click', ()=>{
    cambiarColorDeFondo('dark');
})
btnWhite.addEventListener('click', ()=>{
    cambiarColorDeFondo('white');
})

const cambiarColorDeFondo = (color) => {
    if(localStorage.getItem('color') === undefined){
        document.getElementById('container').classList.add(color);
        localStorage.setItem('color', color)
    }else {
        const colorAnterior = localStorage.getItem('color');
        document.getElementById('container').classList.remove(colorAnterior);
        document.getElementById('container').classList.add(color);
        localStorage.setItem('color', color)
    }
}
//asdasdasd



