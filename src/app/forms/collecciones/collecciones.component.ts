import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collecciones',
  templateUrl: './collecciones.component.html',
  styleUrls: ['./collecciones.component.css']
})
export class ColleccionesComponent implements OnInit {

  list: any = [
    { price: "100.000", name: 'Pokemon', photo: '../../../assets/icons/curso1.png' },
    { price: "100.000", name: 'Minecraft', photo: '../../../assets/icons/curso1.png' },
    { price: "100.000", name: 'Naruto', photo: '../../../assets/icons/curso1.png' },
    { price: "100.000", name: 'Dragon Ball', photo: '../../../assets/icons/curso1.png' },
    { price: "100.000", name: 'Mario Bross', photo: '../../../assets/icons/curso1.png' },
    { price: "100.000", name: 'Marvel', photo: '../../../assets/icons/curso1.png' },
    { price: "100.000", name: 'Bob Esponja', photo: '../../../assets/icons/curso1.png' },
    { price: "100.000", name: 'Monumentos', photo: '../../../assets/icons/curso1.png' },
    { price: "100.000", name: 'Griega', photo: '../../../assets/icons/curso1.png' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
