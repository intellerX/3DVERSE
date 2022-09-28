import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../services/cursos.service'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

interface Course {
  id: number;
  nombre: string;
  fecha_inicio: string;
  fecha_fin: string;
  costo: number;
}

@Component({
  selector: 'app-inscripciones',
  templateUrl: './inscripciones.component.html',
  styleUrls: ['./inscripciones.component.css']
})
export class InscripcionesComponent implements OnInit {

  link: string;

  courses: Course[] = [
    { id: 1, nombre: 'Cargando Cursos...', fecha_inicio: '4/6/2021', fecha_fin: '4/12/2021', costo: 0 },
  ];

  form = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    costo: new FormControl('', [Validators.required]),
  });

  constructor(private cursosService: CursosService,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit(): void {
    this.cursosService.get_all().subscribe({
      next: value => {
        this.courses = value['data'];
      },
      error: error => {
        this.errorToast();
      }
    })
  }

  errorToast() {
    Swal.fire({
      icon: 'info',
      title: 'No se cargaron los cursos',
      footer: '<a href="">Ir a la pagina de inicio</a>'
    })
  }

  select(name) {
    console.log(name);
    for (let course of this.courses) {
      if (course.nombre == name) {
        this.form.controls['costo'].setValue(course.costo);
        this.link = course['link'];
      }
    }
  }

  subscribe() {
    this.loadingAlert()
    delete this.form.value['nombre']
    delete this.form.value['costo']
    if (this.form.valid) {
      this.authService.post(this.form.value).subscribe({
        next: value => {
          localStorage.setItem('token_buy69', value['token']);
          localStorage.setItem('id', value['user']['id']);
          console.log(value);
          window.location.href = this.link;
        }, error: error => {
          this.errorUser();
        }
      })
    }
  }

  errorUser() {
    Swal.fire({
      icon: 'error',
      title: 'Usuario o Contraseña no coinciden'
    })
  }

  loadingAlert() {
    Swal.fire({
      title: 'Cargando...',
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
      },
    })
  }

}
