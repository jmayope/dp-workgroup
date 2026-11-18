import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectHealthEstablishmentComponent } from './select-health-establishment.component';

describe('SelectHealthEstablishmentComponent', () => {
  let component: SelectHealthEstablishmentComponent;
  let fixture: ComponentFixture<SelectHealthEstablishmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectHealthEstablishmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectHealthEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
