import {inject, TestBed} from '@angular/core/testing';

import { EnvironmentConfigurationService } from './environment-configuration.service';
import {UrlBuilder} from '../url-builder/url-builder';
import {EnvironmentConfigurationToken} from './environment-configuration';

describe('EnvironmentConfigurationService', () => {
  const environmentConfiguration = {
      production: false,

      contactService: {
        protocol: 'http:',
        host: 'localhost:8124',
        contextPath: 'server/api',
        resourcePath: 'contacts'
      }
  };

  let service: EnvironmentConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EnvironmentConfigurationService, { provide: EnvironmentConfigurationToken, useValue: environmentConfiguration }
      ]
    });

    service = TestBed.get(EnvironmentConfigurationService);
  });

  it('service with \'environment\' object is injected', () => {
    expect(service).toBeTruthy();
    expect( service.environment ).toEqual( environmentConfiguration );
  });

  it('getConfigurationProperty() retrieves a property (Object) from environment', () => {
    expect( service.getEnvironmentProperty( 'production' ) ).toBeFalsy();
    expect( service.getEnvironmentProperty( 'contactService' ) ).toEqual( environmentConfiguration.contactService );
  });

  it('getConfigurationProperty(), if property not found, returns null', () => {
    expect( service.getEnvironmentProperty( 'notExistingProperty' ) ).toBeNull();
  });
});
