/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutilComponent } from './outil.component';

describe('OutilComponent', () => {
  let component: OutilComponent;
  let fixture: ComponentFixture<OutilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
