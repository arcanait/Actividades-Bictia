import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  logearUsuario = {
    correo: '',
    pass: ''
  }

  ngOnInit(): void {
  }

  logear() {
    this.auth.loginUsuario(this.logearUsuario).subscribe(
      response => {
        console.log('se logeo exitosa mente', response)
        localStorage.setItem('token', response.jwtToken)
        this.router.navigate(['/listar']);
      },
      error => console.log(error)
    )
  };

}
