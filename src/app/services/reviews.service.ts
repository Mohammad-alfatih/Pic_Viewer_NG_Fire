import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ReviewsService {
  data: any;

  constructor(public http: Http) {
    this.data = null;
  }

  getReviews() {

  }

  createReview(review) {

  }

  deleteReview(id) {

  }
}
