import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructoresTableComponent } from './instructores-table.component';

describe('InstructoresTableComponent', () => {
  let component: InstructoresTableComponent;
  let fixture: ComponentFixture<InstructoresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructoresTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructoresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
