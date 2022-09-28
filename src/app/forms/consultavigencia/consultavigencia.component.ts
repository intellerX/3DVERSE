import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CursosService } from '../../services/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consultavigencia',
  templateUrl: './consultavigencia.component.html',
  styleUrls: ['./consultavigencia.component.css']
})
export class ConsultavigenciaComponent implements OnInit {



  form = new FormGroup({


    cc: new FormControl('', [Validators.required, Validators.minLength(5)]),

  });

  constructor(private cursosService: CursosService, private router: Router) { }

  clickEvent() {
    Swal.fire({
      icon: 'error',
      text: 'Verifica los campos!',
    })
  }

  ngOnInit(): void {
  }

  simpleAlert() {
    Swal.fire({
      icon: 'error',
      title: 'Vigencia no encontrada'
    })
  }

  submit() {


    Swal.fire({
      title: 'Cargando...',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    })

    if (this.form.valid) {
      localStorage.setItem('cc', this.form.value.cc);

      this.cursosService.get(this.form.value.cc).subscribe({
        next: value => {

          if (value['count'] > 0)
            this.router.navigate(['/consultas']);
          else
            this.simpleAlert();


        }, error: error => {
          console.log(error);
          Swal.fire({
            icon: 'error',
            title: 'Vigencia no encontrada'
          })
        }
      })
    }
    else {
      Object.keys(this.form.controls).forEach(key => {
        if (this.form.controls[key].status == "INVALID") {
          this.simpleAlert();
        }
        console.log(this.form.controls[key]);
      });
    }

  }

}
