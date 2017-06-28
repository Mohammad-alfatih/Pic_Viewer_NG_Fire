import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { DebugElement } from '@angular/core';

import { AppComponent } from './app.component';

import { PictureComponent } from './components/picture/picture.component';
import { ReviewComponent } from './components/review/review.component';

let fixture: ComponentFixture<AppComponent>;
let component: AppComponent;

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PictureComponent,
        ReviewComponent
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
  });

  afterEach(() => {
    fixture.destroy();
    component = null;
  });

  it('should create the app', async(() => {
    expect(fixture).toBeTruthy();
    expect(component).toBeTruthy();
  }));

  it('initializes with a root page of ... what is root page???', () => {
    expect(component['rootPage']).toBe(HomePage);
  })

  it(`should have an member object called imgSrc that stores a string`, async(() => {
    expect(component).toEqual('app works!');
  }));

  it('should render title in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
