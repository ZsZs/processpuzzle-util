import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpSentEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { TestBed, inject, async } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { HttpLoggingInterceptor } from './http-logging';

import { TreeNode } from '../../classes/tree-node/tree-node';

@Injectable()
export class AnyService {
  ROOT_URL = `http://jsonplaceholder.typicode.com`;

  constructor( private http: HttpClient ) {}

  getNode(): Observable<TreeNode> {
    return this.http.get<TreeNode>(`${this.ROOT_URL}/node`);
  }
}

describe('HttpLoggingInterceptor', () => {
  const expectedNode = new TreeNode( 'node1', 'node one' );
  let logger: HttpLoggingInterceptor;
  let httpMock: HttpTestingController;
  let service: AnyService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ AnyService, { provide: HTTP_INTERCEPTORS, useClass: HttpLoggingInterceptor, multi: true }]
    });

    service = TestBed.get( AnyService );
    logger = TestBed.get( HttpLoggingInterceptor );
    httpMock = TestBed.get( HttpTestingController );
  });

  it('should log HTTP requests', inject( [HttpTestingController, AnyService], (httpMock: HttpTestingController, service: AnyService) => {
    service.getNode().subscribe( response => {
      expect( true ).toBeTruthy();
    });
    
    const httpRequest = httpMock.expectOne(`${service.ROOT_URL}/node`);

    httpRequest.flush( expectedNode );
    httpMock.verify();
  }));
});
