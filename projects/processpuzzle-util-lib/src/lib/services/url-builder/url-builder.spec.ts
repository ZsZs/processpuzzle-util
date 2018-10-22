import {inject, TestBed} from '@angular/core/testing';
import { UrlBuilder } from './url-builder';
import { ProcesspuzzleUtilModule} from '../../processpuzzle-util.module';
import { RemoteApiConfigurationService } from './remote-api-configuration';
import { EnvironmentConfigurationToken } from '../environment-configuration/environment-configuration';
import {EnvironmentConfigurationService} from '../environment-configuration/environment-configuration.service';

describe('UrlBuilder', () => {
  const environmentConfiguration = {
    production: false,

    contactService: {
      protocol: 'http:',
      host: 'localhost:8124',
      contextPath: 'server/api',
      resourcePath: 'contacts'
    }
  };

  const serviceName = 'contactService';

  let service: UrlBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EnvironmentConfigurationService,
        UrlBuilder,
        { provide: EnvironmentConfigurationToken, useValue: environmentConfiguration }
      ]
    });

    service = TestBed.get( UrlBuilder );
  });

  it( 'UrlBuilder with ApiConfiguration is injected', () => {
    expect( service ).toBeTruthy();
  });

  it( 'buildResourceUrl() compiles full URL with resource path', () => {
    expect( service.buildResourceUrl( serviceName )).toEqual( 'http://localhost:8124/server/api/contacts' );
  });

  it( 'buildResourceUrl(), if given, adds subresource to the path', () => {
    expect( service.buildResourceUrl( serviceName, 'subResource' )).toEqual( 'http://localhost:8124/server/api/contacts/subResource' );
  });
});
