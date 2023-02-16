import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss'],
})
export class CountDownComponent implements OnInit, OnDestroy {
  @Input() futureDate!: number;

  timeRemaining!: number;
  countdownTimer!: number;
  isRedTime: boolean = false;

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    const timeDifference = this.futureDate - Date.now();
    if (timeDifference <= 0) {
      this.isRedTime = false;
      this.timeRemaining = 0;
    } else {
      this.timeRemaining = timeDifference;
      this.countdownTimer = window.setInterval(() => this.updateCount, 1000);
    }
  }

  updateCount() {
    this.timeRemaining -= 1000;
    if (this.timeRemaining / 1000 <= 6 && !this.isRedTime) {
      this.isRedTime = true;
    }
    if (this.timeRemaining <= 0) {
      this.timeRemaining = 0;
      this.isRedTime = false;
      clearInterval(this.countdownTimer);
    }
  }

  ngOnDestroy() {
    clearInterval(this.countdownTimer);
  }
}
