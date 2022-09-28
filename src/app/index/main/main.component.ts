import { Component, OnInit } from '@angular/core';
//import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  Empresa: string;
  Name = 'Usuario';


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.Name = localStorage.getItem('name');
    if (!localStorage.getItem('id')) {
      this.router.navigate(['/login']);
    }

  }

  endSession() {
    localStorage.removeItem('id');
    this.router.navigate(['/login']);
  }

}
