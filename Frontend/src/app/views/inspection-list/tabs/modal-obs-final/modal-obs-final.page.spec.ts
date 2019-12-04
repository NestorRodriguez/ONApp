import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalObsFinalPage } from './modal-obs-final.page';

describe('ModalObsFinalPage', () => {
  let component: ModalObsFinalPage;
  let fixture: ComponentFixture<ModalObsFinalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalObsFinalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalObsFinalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
