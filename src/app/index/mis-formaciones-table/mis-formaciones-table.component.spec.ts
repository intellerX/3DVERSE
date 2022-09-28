import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisFormacionesTableComponent } from './mis-formaciones-table.component';

describe('MisFormacionesTableComponent', () => {
  let component: MisFormacionesTableComponent;
  let fixture: ComponentFixture<MisFormacionesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisFormacionesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisFormacionesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
