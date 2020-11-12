import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  registrarUsuario = {
    nombre: '',
    correo: '',
    cedula: '',
    edad: '',
    pass: ''
  }

  ngOnInit(): void {
  }

  registrar() {
    this.auth.registroUsuario(this.registrarUsuario).subscribe(
      response => {
        console.log(response)
        this.router.navigate(['/listar'])
      },
      error => console.log(error)
    )
  };

}
