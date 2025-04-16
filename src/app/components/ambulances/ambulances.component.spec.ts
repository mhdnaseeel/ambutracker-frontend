import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbulancesComponent } from './ambulances.component';

describe('AmbulancesComponent', () => {
  let component: AmbulancesComponent;
  let fixture: ComponentFixture<AmbulancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AmbulancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmbulancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
