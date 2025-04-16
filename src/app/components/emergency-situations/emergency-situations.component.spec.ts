import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmergencySituationsComponent } from './emergency-situations.component';

describe('EmergencySituationsComponent', () => {
  let component: EmergencySituationsComponent;
  let fixture: ComponentFixture<EmergencySituationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmergencySituationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmergencySituationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
