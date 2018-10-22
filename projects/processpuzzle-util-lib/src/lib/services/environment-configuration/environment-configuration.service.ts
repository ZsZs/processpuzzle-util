import { Inject, Injectable } from '@angular/core';
import { EnvironmentConfiguration, EnvironmentConfigurationToken } from './environment-configuration';

@Injectable({ providedIn: 'root' })
export class EnvironmentConfigurationService {

  constructor( @Inject( EnvironmentConfigurationToken ) private _env: Object ) {}

  public getEnvironmentProperty(environmentPropertyName: string ) {
    if ( this._env[environmentPropertyName] != null ) {
      return this._env[environmentPropertyName];
    } else { return null; }
  }

  // properties
  // @formatter:off
  get environment(): Object { return this._env; }
  // @formatter:on
}
