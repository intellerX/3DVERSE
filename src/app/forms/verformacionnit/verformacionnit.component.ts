import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-verformacionnit',
  templateUrl: './verformacionnit.component.html',
  styleUrls: ['./verformacionnit.component.css']
})
export class VerformacionnitComponent implements OnInit {

  public listaelementos;

  public dictTipoCarro = {
    0: "Uno"
  }

  constructor(private cursosService: CursosService, private router: Router) { }

  ngOnInit(): void {



    var cc = localStorage.getItem('cc');
    this.cursosService.get(cc).subscribe({
      next: value => {
        Swal.close();
        this.listaelementos = value['data'];

      }, error: error => {
        Swal.fire({
          icon: 'error',
          title: 'Vigencia no encontrada'
        })
      }
    })
  }

}
