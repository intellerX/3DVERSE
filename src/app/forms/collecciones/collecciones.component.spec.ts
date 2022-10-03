import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColleccionesComponent } from './collecciones.component';

describe('ColleccionesComponent', () => {
  let component: ColleccionesComponent;
  let fixture: ComponentFixture<ColleccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColleccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColleccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
