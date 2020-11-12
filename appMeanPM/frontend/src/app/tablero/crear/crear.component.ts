import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router'
import { TableroService } from 'src/app/service/tablero.service';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.scss']
})
export class CrearComponent implements OnInit {

  constructor(
    private auth: AuthService, 
    private router: Router, 
    private tablero: TableroService) { }

  crearActividad = {
    nombre: '',
    estado: '',
    descripcion: '',
  }

  ngOnInit(): void {
  }

  crear() {
    this.tablero.crearActividad(this.crearActividad).subscribe(   
      res=> {
        console.log(res)
        this.router.navigate(['/listar']);
      },
      error => {
        console.log(error)
      }
    )
  }

}
