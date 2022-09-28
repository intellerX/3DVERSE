import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerformacionnitComponent } from './verformacionnit.component';

describe('VerformacionnitComponent', () => {
  let component: VerformacionnitComponent;
  let fixture: ComponentFixture<VerformacionnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerformacionnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerformacionnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
