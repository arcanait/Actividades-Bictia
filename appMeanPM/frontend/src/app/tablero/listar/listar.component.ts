import { Component, OnInit } from '@angular/core';
import { TableroService } from 'src/app/service/tablero.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})
export class ListarComponent implements OnInit {

  constructor(private tablero: TableroService) { }

  lista = [];

  ngOnInit(): void {
    this.tablero.listaActividad().subscribe(
      response=>{
        this.lista = response;
      },
      error => {
        console.log(error)
      }
    )
  }

  cambiarEstado(listaElegida, estado){
    
  }

  eliminar(eliminarLista){
    this.tablero.eliminarActividad(eliminarLista).subscribe(
      res =>{
        const index = this.lista.indexOf(eliminarLista);
        if(index > -1){
          this.lista.splice(index, 1);
        };
      },
      error =>{
        console.log(error)
      }
    )
  }
}
