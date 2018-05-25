import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * TickTockService class.
 */
@Injectable()
export class TickTockService {
   /**
    * Set up timer frequency.
    */
   private readonly TIMEOUT: number = 1000;

  /**
   * Extend time value with zero if required.
   * @param value
   */
  private static formatTimeNumber(value: number): string {
    const stringValue = value.toString();
    return ('0' + stringValue).slice(-2);
  }

  /**
   * Get current time string.
   */
  private static getNowString(): string {
    const date = new Date();

    const hours = TickTockService.formatTimeNumber(date.getHours());
    const minutes = TickTockService.formatTimeNumber(date.getMinutes());
    const seconds = TickTockService.formatTimeNumber(date.getSeconds());

    return `${hours}:${minutes}:${seconds}`;
  }

  /**
   * Get current time observable.
   */
  public getTick(): Observable<string> {
    return timer( 0, this.TIMEOUT ).pipe(
       map(( tick ) => TickTockService.getNowString())
    );
  }
}
