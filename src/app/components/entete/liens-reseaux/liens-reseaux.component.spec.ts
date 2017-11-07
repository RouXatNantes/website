/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LiensReseauxComponent } from './liens-reseaux.component';

describe('LiensReseauxComponent', () => {
  let component: LiensReseauxComponent;
  let fixture: ComponentFixture<LiensReseauxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiensReseauxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiensReseauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
