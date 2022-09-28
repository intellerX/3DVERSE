import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuySuccesComponent } from './buy-succes.component';

describe('BuySuccesComponent', () => {
  let component: BuySuccesComponent;
  let fixture: ComponentFixture<BuySuccesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuySuccesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuySuccesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
