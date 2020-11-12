import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private registroUrl = 'http://localhost:3003/api/usuario/';
  private loginUrl = 'http://localhost:3003/api/auth/';

  constructor(private http: HttpClient, private router: Router) { }

  token = '';

  registroUsuario(usuario) : Observable<any> {
    return this.http.post<any>(this.registroUrl, usuario)
  }

  loginUsuario(usuario) {
    return this.http.post<any>(this.loginUrl, usuario)
  }

  loginOn() {
    return !!localStorage.getItem('token')
  }

  obtenerToken() {
    return localStorage.getItem('token')
  }

  cerrarSesion(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
  
}
