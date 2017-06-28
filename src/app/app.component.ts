import { Component } from '@angular/core';

import { PictureComponent } from './components/picture/picture.component';
import { ReviewComponent } from './components/review/review.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public rootPage: any;

  constructor() {
      this.rootPage = PictureComponent;
    }
}
