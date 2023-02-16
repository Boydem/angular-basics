import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentDate: Date = new Date();
  dayName: string;
  futureDate: number = Date.now() + 1000 * 10;

  constructor(private datePipe: DatePipe) {
    this.dayName = this.datePipe.transform(this.currentDate, 'EEEE')!;
  }
}
