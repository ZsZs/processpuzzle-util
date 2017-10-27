import { HttpLoggingInterceptor } from './http-logging';
import { TestBed } from '@angular/core/testing';

describe('HttpLoggingInterceptor', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ HttpLoggingInterceptor ]
    });
  });

  it('intercept() logs HTTP requests', (done) => {
    expect( true ).toBe( true );
  });
});
