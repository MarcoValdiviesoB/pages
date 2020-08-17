import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MozaicoComponent } from './mozaico.component';

describe('MozaicoComponent', () => {
  let component: MozaicoComponent;
  let fixture: ComponentFixture<MozaicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MozaicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MozaicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
