import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullWidthSectionComponent } from './full-width-section.component';

describe('FullWidthSectionComponent', () => {
  let component: FullWidthSectionComponent;
  let fixture: ComponentFixture<FullWidthSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullWidthSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullWidthSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
