import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        width: '100%',
      })),
      state('out', style({
        width: '100px',
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ])
  ]
})
export class AnimationComponent implements OnInit {
  helpMenu: string;

  public app_name = "Login";
  public end_session = "Iniciar Sesión";


  constructor() { }

  ngOnInit(): void {
    this.helpMenu = 'in';
    setTimeout(() => { this.helpMenu = 'out' }, 2000);
  }

  toggleHelpMenu(): void {
    this.helpMenu = this.helpMenu === 'out' ? 'in' : 'out';
  }



}
