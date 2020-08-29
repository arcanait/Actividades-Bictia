const alertName = document.getElementById('alertName')
const alertEmail = document.getElementById('alertEmail')
const alertPassword = document.getElementById('alertPassword')
const alertCheckbox = document.getElementById('alertCheckbox')
const validarFormulario = (e) => {
    e.preventDefault()
    let todoEnOrden = true
    let inputName = document.getElementById('nombre').value
    if(inputName === ''){
        alertName.innerText = 'El nombre es requerido';
        todoEnOrden = false
    }
    let inputEmail = document.getElementById('email').value
    if(inputEmail === ''){
        alertEmail.innerText = 'El email es requerida';
        todoEnOrden = false
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(inputEmail)){
        alertEmail.innerText = 'El campo debe ser un e-mail';
        todoEnOrden = false
    }
    let inputPassword = document.getElementById('password').value
    if(inputPassword === ''){
        alertPassword.innerText = 'La contraseña es requerida';
        todoEnOrden = false
    }
    let inputCheckbox = document.getElementById('checkbox').checked
    if(!inputCheckbox){
        alertCheckbox.innerText = 'Debes aceptar los terminos y condiciones';
        todoEnOrden = false
    }
    if(!todoEnOrden){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Lo sentimos, debes llenar todos los campos del formulario',
        })
    }else{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: '¡Bien hecho!',
            showConfirmButton: false,
            timer: 1500
        })
        setTimeout(()=>{
            window.location.assign('../../../clase-miercoles-26-agosto/index.html')
        }, 2000)
    }
}