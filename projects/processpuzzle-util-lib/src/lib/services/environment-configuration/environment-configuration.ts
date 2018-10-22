import {InjectionToken} from '@angular/core';

export interface  EnvironmentConfiguration {
  environmentObject: Object;
}

export const EnvironmentConfigurationToken = new InjectionToken<Object>('EnvironmentConfiguration' );
