import { Inject, Injectable } from '@angular/core';
import { ObjectUtil } from '../object-util/object-util';
import { RemoteApiConfiguration, RemoteApiConfigurationService} from './remote-api-configuration';

@Injectable({ providedIn: 'root' })
export class UrlBuilder {
  constructor( @Inject( RemoteApiConfigurationService ) private apiConf: RemoteApiConfiguration ) {}

  public buildResourceUrl( subResource?: string ): string {
    let resourceUrl = this.apiConf.protocol;
    resourceUrl += '//' + this.apiConf.host;
    resourceUrl += Boolean( this.apiConf.contextPath ) ? '/' + this.apiConf.contextPath : '';
    resourceUrl += ObjectUtil.isNullOrUndefined( this.apiConf.resourcePath ) ? '' : '/' + this.apiConf.resourcePath;
    resourceUrl += Boolean( subResource ) ? '/' + subResource : '';
    return resourceUrl;
  }
}
