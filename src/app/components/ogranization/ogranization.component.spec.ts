import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OgranizationComponent } from './ogranization.component';

describe('OgranizationComponent', () => {
  let component: OgranizationComponent;
  let fixture: ComponentFixture<OgranizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OgranizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OgranizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
