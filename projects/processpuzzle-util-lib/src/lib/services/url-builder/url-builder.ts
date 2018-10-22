import { Inject, Injectable } from '@angular/core';
import { ObjectUtil } from '../../classes/object-util/object-util';
import { RemoteApiConfiguration, RemoteApiConfigurationService} from './remote-api-configuration';
import { EnvironmentConfigurationToken } from '../environment-configuration/environment-configuration';
import { EnvironmentConfigurationService } from '../environment-configuration/environment-configuration.service';

@Injectable({ providedIn: 'root' })
export class UrlBuilder {
  private apiConf: RemoteApiConfiguration;

  constructor( private environmentConfigurationService: EnvironmentConfigurationService ) {}

  public buildResourceUrl( servicePropertyName: string, subResource?: string ): string {
    this.apiConf = this.environmentConfigurationService.getEnvironmentProperty( servicePropertyName );
    if ( this.apiConf == null ) { return null; }

    let resourceUrl = this.apiConf.protocol;
    resourceUrl += '//' + this.apiConf.host;
    resourceUrl += Boolean( this.apiConf.contextPath ) ? '/' + this.apiConf.contextPath : '';
    resourceUrl += ObjectUtil.isNullOrUndefined( this.apiConf.resourcePath ) ? '' : '/' + this.apiConf.resourcePath;
    resourceUrl += Boolean( subResource ) ? '/' + subResource : '';

    return resourceUrl;
  }
}
