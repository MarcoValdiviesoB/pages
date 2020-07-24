import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosScrollComponent } from './servicios-scroll.component';

describe('ServiciosScrollComponent', () => {
  let component: ServiciosScrollComponent;
  let fixture: ComponentFixture<ServiciosScrollComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiciosScrollComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiciosScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
