import {InjectionToken} from '@angular/core';

export interface  RemoteApiConfiguration {
  protocol: string;
  host: string;
  contextPath: string;
  resourcePath: string;
}

export const RemoteApiConfigurationService = new InjectionToken<RemoteApiConfiguration>('RemoteApiConfiguration' );
