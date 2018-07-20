import { Component, OnInit } from '@angular/core';

import { TickTockService } from '../../services/tick-tock/tick-tock.service';

@Component({
  selector: 'ppu-tick-tock',
  styleUrls: ['./tick-tock.component.scss'],
  templateUrl: './tick-tock.component.html',
})
export class TickTockComponent implements OnInit {
  public currentTime: string;

  public constructor( private tickTockService: TickTockService ) {}

  public ngOnInit(): void {
    this.tickTockService.getTick().subscribe(
      (timeString) => this.currentTime = timeString
    );
  }
}
