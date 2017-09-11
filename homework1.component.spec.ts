import { element } from 'protractor';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Homework1Component } from './homework1.component';
import { By } from '@angular/platform-browser';

describe('Homework1Component', () => {
  let component: Homework1Component;
  let fixture: ComponentFixture<Homework1Component>;
  // let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homework1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Homework1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it(`should have getTitle method`, () => {
    expect(component.getTitle).toBeTruthy();
  });

  it(`should use getTitle method in HTML h1`, () => {

    const title_value = component.getTitle();
    const element = fixture.debugElement.query(By.css('h1')).nativeElement;

    expect(element.textContent).toEqual(title_value);
  })
});
