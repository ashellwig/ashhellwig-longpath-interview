import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentialMapComponent } from './residential-map.component';

describe('ResidentialMapComponent', () => {
  let component: ResidentialMapComponent;
  let fixture: ComponentFixture<ResidentialMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentialMapComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResidentialMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
