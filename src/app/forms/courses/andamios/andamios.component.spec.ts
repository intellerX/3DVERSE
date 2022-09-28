import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AndamiosComponent } from './andamios.component';

describe('AndamiosComponent', () => {
  let component: AndamiosComponent;
  let fixture: ComponentFixture<AndamiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AndamiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AndamiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
