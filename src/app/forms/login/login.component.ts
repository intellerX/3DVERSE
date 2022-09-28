import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  form_register = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repita_contraseña: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
  })

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  clickEvent() {
    Swal.fire({
      icon: 'error',
      text: 'Verifica los campos!',
    })
  }

  ngOnInit(): void {
    if (localStorage.getItem('id')) {
      this.router.navigate(['/main/formaciones']);
    }

  }


  submit() {
    this.loadingAlert
    if (this.form.valid) {
      this.authService.post(this.form.value).subscribe({
        next: value => {
          localStorage.setItem('token', value['token']);
          localStorage.setItem('id', value['id']);
          localStorage.setItem('name', value['user']['nombre']);
          this.router.navigate(['/main/formaciones']);
          Swal.close()

        }, error: error => {
          this.errorUser();
        }
      })
    }
    else {
      Object.keys(this.form.controls).forEach(key => {
        if (this.form.controls[key].status == "INVALID") {
          this.errorAlert(key);
        }
        console.log(this.form.controls[key]);
      });
    }
  }

  submit_register() {
    this.loadingAlert

    const password1 = this.form_register.controls["password"]
    const password2 = this.form_register.controls["repita_contraseña"]


    if (this.form_register.valid) {
      if (password1.value == password2.value) {
        delete this.form_register.value['repita_contraseña']
        this.userService.post(this.form_register.value).subscribe({
          next: value => {

            this.router.navigate(['login']);
            Swal.close()
          }, error: error => {
            this.errorOnlyAlert(error['message']['error_es']);
          }
        })
      }
      else {
        this.errorPassword();

      }
    }
    else {
      Object.keys(this.form_register.controls).forEach(key => {
        if (this.form_register.controls[key].status == "INVALID") {
          this.errorAlert(key);
        }
        console.log(this.form_register.controls[key]);
      });
    }
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

  errorAlert(key) {
    Swal.fire({
      icon: 'error',
      title: 'Valor invalido',
      text: 'Valida el campo: ' + key
    })

  }

  errorUser() {
    Swal.fire({
      icon: 'error',
      title: 'Usuario o Contraseña no coinciden'
    })
  }

  errorPassword() {
    Swal.fire({
      icon: 'error',
      title: 'Las contraseñas no coinciden'
    })
  }

  errorOnlyAlert(error) {
    Swal.fire({
      icon: 'error',
      title: 'Error!',
      text: 'Mensaje: ' + error
    })

  }




}
