import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraformsComponent } from './calculadoraforms.component';

describe('CalculadoraformsComponent', () => {
  let component: CalculadoraformsComponent;
  let fixture: ComponentFixture<CalculadoraformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculadoraformsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculadoraformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
