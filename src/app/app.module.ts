import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReviewsService } from './services/reviews.service';

import { AppComponent } from './app.component';
import { PictureComponent } from './components/picture/picture.component';
import { ReviewComponent } from './components/review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    PictureComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ReviewsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
