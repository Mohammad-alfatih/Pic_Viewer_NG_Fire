import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AppComponent } from '../../app.component';
import { PictureComponent } from './picture.component';

let fixture: ComponentFixture<PictureComponent>;
let component: PictureComponent;
let de: DebugElement;
let element: HTMLElement;

describe('PictureComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, PictureComponent],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
    de = null;
    element = null;
  });

  it('should be created', () => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  });

  it('initializes with an src of oasis,jpg', () => {
    expect(component['src']).toEqual('oasis.jpg');
  });

  it('contains an html img tag in the html template', () => {
    de = fixture.debugElement.query(By.css('img'));
    element = de.nativeElement;

    expect(element.nodeValue).toEqual('img');
  });
});
