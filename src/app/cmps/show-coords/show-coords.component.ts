import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'show-coords',
  templateUrl: './show-coords.component.html',
  styleUrls: ['./show-coords.component.scss'],
})
export class ShowCoordsComponent implements OnInit, OnDestroy {
  mousePos = {
    x: 0,
    y: 0,
  };
  trackMousePos = (ev: MouseEvent): void => {
    this.mousePos = {
      x: ev.clientX,
      y: ev.clientY,
    };
  };

  ngOnInit(): void {
    window.addEventListener('mousemove', this.trackMousePos);
  }

  ngOnDestroy() {
    window.removeEventListener('mousemove', this.trackMousePos);
  }
}
