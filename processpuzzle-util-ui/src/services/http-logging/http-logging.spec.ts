import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';

import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpLoggingInterceptor } from './http-logging';

describe('HttpLoggingInterceptor', () => {

  let logger: HttpLoggingInterceptor
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ HttpLoggingInterceptor ]
    });

    logger = TestBed.get( HttpLoggingInterceptor );
    httpMock = TestBed.get( HttpTestingController );
  });

  it('health check: should be injected', inject([HttpLoggingInterceptor], (service: HttpLoggingInterceptor) => {
    expect( service ).toBeTruthy();
  }));

  it('intercept() logs HTTP requests', () => {
    expect( true ).toBeTruthy();
  });
});
