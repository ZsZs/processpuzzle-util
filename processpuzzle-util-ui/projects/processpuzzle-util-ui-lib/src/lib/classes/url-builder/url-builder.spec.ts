import { TestBed } from '@angular/core/testing';

import { UrlBuilder } from './url-builder';

describe('UrlBuilder', () => {
  const serviceProperties = 'documentService';
  const resourcePath = 'documents';
  let jsonMapper: UrlBuilder;

  beforeEach(() => {
    jsonMapper = new UrlBuilder( serviceProperties, resourcePath );
  });

  it( 'buildResourceUrl() compiles full URL with resource path', () => {
    expect( jsonMapper.buildResourceUrl()).toEqual( 'http://localhost:8124/server/api/documents' );
  });
});
