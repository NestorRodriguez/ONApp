import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinaPage } from './cabina.page';

describe('CabinaPage', () => {
  let component: CabinaPage;
  let fixture: ComponentFixture<CabinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabinaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
