import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-mis-formaciones-table',
  templateUrl: './mis-formaciones-table.component.html',
  styleUrls: ['./mis-formaciones-table.component.css']
})
export class MisFormacionesTableComponent implements OnInit {

  elements = [
  ];

  headElements = ['NOMBRE', 'DESCRIPCION', 'FECHA-INICIO', 'FECHA-FIN', 'BOTONES'];

  modules = [];
  module_actual = false;

  constructor(private cursosService: CursosService) { }


  loadingToast() {
    const LoadToast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        Swal.showLoading()
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    LoadToast.fire({
      icon: 'question',
      title: 'Cargando...'
    })
  }

  buyToast() {
    Swal.fire({
      icon: 'info',
      title: 'Puedes adquirir este modulo en la tienda',
      footer: '<a href="/shop">Ir a la Tienda</a>'
    })

  }

  ngOnInit(): void {
    this.loadingToast();
    this.cursosService.get_all().subscribe({
      next: value => {
        this.elements = value['data'];
        console.log(this.elements);
      }
    })


  }
}
