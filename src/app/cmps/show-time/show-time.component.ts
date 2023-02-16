import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Season } from 'src/app/model/season';

@Component({
  selector: 'show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.scss'],
})
export class ShowTimeComponent implements OnInit, OnDestroy {
  @Input() currentDate!: Date;
  @Input() dayName!: string;
  seasonName!: string;
  isDark: boolean = false;
  private intervalId!: number;

  seasons: Season[] = [
    { name: 'winter', months: [12, 1, 2] },
    { name: 'spring', months: [3, 4, 5] },
    { name: 'summer', months: [6, 7, 8] },
    { name: 'autumn', months: [9, 10, 11] },
  ];

  ngOnInit() {
    this.seasonName = this.getSeasonName(this.currentDate.getMonth() + 1);
    this.intervalId = window.setInterval(() => {
      this.currentDate = new Date();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

  toggleDarkMode(): void {
    console.log('asad:');
    this.isDark = !this.isDark;
  }

  private getSeasonName(month: number): string {
    return (
      this.seasons.find((season) => season.months.includes(month))?.name ?? ''
    );
  }
}
