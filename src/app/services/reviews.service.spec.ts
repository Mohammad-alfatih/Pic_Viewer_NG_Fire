import { TestBed, inject } from '@angular/core/testing';

import { ReviewsService } from './reviews.service';

describe('ReviewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReviewsService]
    });
  });

  it('should be created', inject([ReviewsService], (service: ReviewsService) => {
    expect(service).toBeTruthy();
  }));

  describe('Methods', () => {
    describe('getReviews', () => {
      it('should return a resolved promise after running a get request from http', () => {

      });

      it('should return a resolved promise from data if data is not null', () => {

      });
    });

    describe('createReview', () => {
      it('should return a resolved promise after running a get request from http', () => {

      });

      it('should return a resolved promise from data if data is not null', () => {

      });
    });

    describe('deleteReview', () => {
      it('should return a resolved promise after running a get request from http', () => {

      });

      it('should return a resolved promise from data if data is not null', () => {

      });
    });
  });
});
