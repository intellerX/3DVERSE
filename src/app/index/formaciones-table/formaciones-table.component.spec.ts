import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacionesTableComponent } from './formaciones-table.component';

describe('FormacionesTableComponent', () => {
  let component: FormacionesTableComponent;
  let fixture: ComponentFixture<FormacionesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormacionesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacionesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
