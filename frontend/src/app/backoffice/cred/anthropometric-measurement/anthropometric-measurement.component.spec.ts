import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnthropometricMeasurementComponent } from './anthropometric-measurement.component';

describe('AnthropometricMeasurementComponent', () => {
  let component: AnthropometricMeasurementComponent;
  let fixture: ComponentFixture<AnthropometricMeasurementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnthropometricMeasurementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnthropometricMeasurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
