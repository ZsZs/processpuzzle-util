
import { UrlBuilder } from './url-builder';

describe('UrlBuilder', () => {
  const environment = {
    production: false,

    documentService: {
      protocol: 'http:',
      host: 'localhost:8124',
      contextPath: 'server/api'
    }
  };
  const serviceProperties = 'documentService';
  const resourcePath = 'documents';
  let jsonMapper: UrlBuilder;

  beforeEach(() => {
    jsonMapper = new UrlBuilder( environment, serviceProperties, resourcePath );
  });

  it( 'buildResourceUrl() compiles full URL with resource path', () => {
    expect( jsonMapper.buildResourceUrl()).toEqual( 'http://localhost:8124/server/api/documents' );
  });
});
