import { ObjectUtil } from '../object-util/object-util';

export class UrlBuilder {
  constructor( private environment: any, private serviceProperties: string, private resourcePath: string ) {}

  public buildResourceUrl( subResource?: string ): string {
    let resourceUrl = ( this.environment as any )[ this.serviceProperties ].protocol;
    resourceUrl += '//' + ( this.environment as any )[ this.serviceProperties ].host;
    resourceUrl += Boolean( ( this.environment as any )[ this.serviceProperties ].contextPath ) ? '/' + ( this.environment as any )[ this.serviceProperties ].contextPath : '';
    resourceUrl += ObjectUtil.isNullOrUndefined( this.resourcePath ) ? '' : '/' + this.resourcePath;
    resourceUrl += Boolean( subResource ) ? '/' + subResource : '';
    return resourceUrl;
  }
}
