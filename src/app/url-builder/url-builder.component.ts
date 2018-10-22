import { Component, OnInit } from '@angular/core';
import { UrlBuilder} from 'processpuzzle-util';
import { EnvironmentConfigurationService } from 'processpuzzle-util';

@Component({
  selector: 'pp-url-builder',
  templateUrl: './url-builder.component.html',
  styles: []
})
export class UrlBuilderComponent implements OnInit {
  private readonly apiConfigurationProperty = 'contactService';
  protocol: string;
  host: string;
  contextPath: string;
  resourcePath: string;
  url: string;

  constructor( private environmentConfigurationService: EnvironmentConfigurationService, private urlBuilder: UrlBuilder ) { }

  ngOnInit() {
    const apiConf = this.environmentConfigurationService.getEnvironmentProperty( this.apiConfigurationProperty );

    this.protocol = apiConf.protocol;
    this.host = apiConf.host;
    this.contextPath = apiConf.contextPath;
    this.resourcePath = apiConf.resourcePath;
    this.url = this.urlBuilder.buildResourceUrl( this.apiConfigurationProperty, 'subresource' );
  }

}
