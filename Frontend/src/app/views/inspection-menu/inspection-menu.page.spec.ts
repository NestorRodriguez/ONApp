import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspectionMenuPage } from './inspection-menu.page';

describe('InspectionMenuPage', () => {
  let component: InspectionMenuPage;
  let fixture: ComponentFixture<InspectionMenuPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspectionMenuPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspectionMenuPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
