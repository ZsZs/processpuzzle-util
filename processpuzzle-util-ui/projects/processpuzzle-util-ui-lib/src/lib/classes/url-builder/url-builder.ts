import { ObjectUtil } from '../object-util/object-util';

import { environment } from '../../../../../../src/environments/environment';

export class UrlBuilder {
   constructor( private serviceProperties: string, private resourcePath: string ) {
   }

   public buildResourceUrl( subResource?: string ): string {
      let resourceUrl = ( environment as any )[ this.serviceProperties ].protocol;
      resourceUrl += '//' + ( environment as any )[ this.serviceProperties ].host;
      resourceUrl += Boolean( ( environment as any )[ this.serviceProperties ].contextPath ) ? '/' + ( environment as any )[ this.serviceProperties ].contextPath : '';
      resourceUrl += ObjectUtil.isNullOrUndefined( this.resourcePath ) ? '' : '/' + this.resourcePath;
      resourceUrl += Boolean( subResource ) ? '/' + subResource : '';
      return resourceUrl;
   }
}
