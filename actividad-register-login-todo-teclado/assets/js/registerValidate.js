if(localStorage.getItem('userData') !== null){
    window.location.assign('file:///C:/Users/segun/Desktop/1.INSERCOR/1.PROGRAMACION/bictia/Actividades-Bictia/actividad-register-login-todo-teclado/assets/pages/todo.html')
}else{
    const alertName = document.getElementById('alertName')
    const alertEmail = document.getElementById('alertEmail')
    const alertPassword = document.getElementById('alertPassword')
    const validarFormulario = (nombre, correo, contrasena) => {
        let todoEnOrden = true
        let inputName = nombre
        if(inputName === ''){
            alertName.innerText = 'El nombre es requerido';
            todoEnOrden = false
        }
        let inputEmail = correo
        if(inputEmail === ''){
            alertEmail.innerText = 'El email es requerida';
            todoEnOrden = false
        }
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(inputEmail)){
            alertEmail.innerText = 'El campo debe ser un e-mail';
            todoEnOrden = false
        }
        let inputPassword = contrasena
        if(inputPassword === ''){
            alertPassword.innerText = 'La contraseña es requerida';
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
                position: 'center',
                icon: 'success',
                title: `¡Bienvenido ${nombre}!`,
                showConfirmButton: false,
                timer: 1500
            })
            setTimeout(()=>{
                window.location.assign('file:///C:/Users/segun/Desktop/1.INSERCOR/1.PROGRAMACION/bictia/Actividades-Bictia/actividad-register-login-todo-teclado/assets/pages/todo.html')
            }, 2000)
        }
    }

    document.getElementById('register').addEventListener('submit', (e) => {
        e.preventDefault()
        nombre = document.getElementById('nombre').value
        correo = document.getElementById('correo').value
        contrasena = document.getElementById('contrasena').value
        const userData = {
            nombre,
            correo,
            contrasena
        }
        
        localStorage.setItem('userData', JSON.stringify(userData))
        validarFormulario(nombre, correo, contrasena);
    })
}