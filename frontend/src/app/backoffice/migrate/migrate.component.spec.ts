import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MigrateComponent } from './migrate.component';

describe('MigrateComponent', () => {
  let component: MigrateComponent;
  let fixture: ComponentFixture<MigrateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MigrateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MigrateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
