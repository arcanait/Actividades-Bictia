import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardsts',
  templateUrl: './cardsts.component.html',
  styleUrls: ['./cardsts.component.scss']
})
export class CardstsComponent implements OnInit {
  personajes: [] = [];
  prevDisabled: boolean;
  nextDisabled: boolean;
  prev: string;
  next: string;
  constructor() { }

  ngOnInit(): void {
    const API = "https://rickandmortyapi.com/api/character";
    this.getData(API);
  }

  //URL de la API

// Obtener resultado de API
  getData(api){
    console.log('pasa')
    return fetch(api)
      .then((response) => response.json())
      .then((json) => {
        this.personajes = json.results
        this.prev = json.info.prev;
        this.next = json.info.next;
        this.prevDisabled = json.info.prev == null? true: false;
        this.nextDisabled = json.info.next == null? true: false;
        console.log('prevDisabled', this.prevDisabled, 'nextDisabled', this.nextDisabled )
      })
      .catch((error) => {
        console.log("Error :", error);
      });
  }

  // paginacion = (info) => {
  //   this.prevDisabled = info.prev == null? true: false;
  //   this.nextDisabled = info.next == null? true: false;
  // }
}
