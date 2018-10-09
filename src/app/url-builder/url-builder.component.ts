import { Component, OnInit } from '@angular/core';
import { UrlBuilder} from 'processpuzzle-util';

@Component({
  selector: 'pp-url-builder',
  templateUrl: './url-builder.component.html',
  styles: []
})
export class UrlBuilderComponent implements OnInit {
  protocol: string;
  host: string;
  contextPath: string;
  resourcePath: string;
  url: string;

  constructor( private urlBuilder: UrlBuilder ) { }

  ngOnInit() {
    this.protocol = this.urlBuilder.apiConf.protocol;
    this.host = this.urlBuilder.apiConf.host;
    this.contextPath = this.urlBuilder.apiConf.contextPath;
    this.resourcePath = this.urlBuilder.apiConf.resourcePath;
    this.url = this.urlBuilder.buildResourceUrl( 'subresource' );
  }

}
