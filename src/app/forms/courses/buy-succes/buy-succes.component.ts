import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-buy-succes',
  templateUrl: './buy-succes.component.html',
  styleUrls: ['./buy-succes.component.css']
})
export class BuySuccesComponent implements OnInit {

  constructor(private cursosService: CursosService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.cursosService.subscribe(
      this.route.snapshot.paramMap.get('id')
    ).subscribe({
      next: value => {
        this.succes();

      }, error: error => {
        this.error();
      }
    })

  }

  error() {
    Swal.fire({
      icon: 'error',
      title: 'Hubo un error al Matricularse en el curso'
    })
  }

  succes() {
    Swal.fire({
      icon: 'success',
      title: 'Compra completada'
    })
  }


}
