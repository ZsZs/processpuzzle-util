import {inject, TestBed} from '@angular/core/testing';
import { UrlBuilder } from './url-builder';
import {ProcesspuzzleUtilLibModule} from '../../processpuzzle-util-lib.module';
import {RemoteApiConfigurationService} from './remote-api-configuration';

describe('UrlBuilder', () => {
  const apiConfiguration = {
    protocol: 'http:',
    host: 'localhost:8124',
    contextPath: 'server/api',
    resourcePath: 'documents'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlBuilder, { provide: RemoteApiConfigurationService, useValue: apiConfiguration }]
    });
  });

  it( 'UrlBuilder with ApiConfiguration is injected', inject([UrlBuilder], (service: UrlBuilder) => {
    expect( service ).toBeTruthy();
  }));

  it( 'buildResourceUrl() compiles full URL with resource path', inject([UrlBuilder], (service: UrlBuilder) => {
    expect( service.buildResourceUrl()).toEqual( 'http://localhost:8124/server/api/documents' );
  }));

  it( 'buildResourceUrl(), if given, adds subresource to the path', inject([UrlBuilder], (service: UrlBuilder) => {
    expect( service.buildResourceUrl( 'subResource' )).toEqual( 'http://localhost:8124/server/api/documents/subResource' );
  }));
});
