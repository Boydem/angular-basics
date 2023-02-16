import { Component } from '@angular/core';

interface Watcher {
  name: string;
  imgIdx: number;
  _id: string;
  movies: string[];
}

@Component({
  selector: 'watcher-app',
  templateUrl: './watcher-app.component.html',
  styleUrls: ['./watcher-app.component.scss'],
})
export class WatcherAppComponent {
  watchers: Watcher[] = [
    {
      _id: 'w101',
      name: 'Srulik',
      imgIdx: Math.floor(Math.random() * 5) + 1,
      movies: ['Inseption', 'Hello world'],
    },
    {
      _id: 'w102',
      name: 'Shmulik',
      imgIdx: Math.floor(Math.random() * 5) + 1,
      movies: ['Harry potter', 'Never ending story'],
    },
    {
      _id: 'w103',
      name: 'Shuli',
      imgIdx: Math.floor(Math.random() * 5) + 1,
      movies: ['101 Cute dogs', '101 INTO JS'],
    },
  ];
  currSelected: Watcher | null = null;
  onSelectWatcher(watcherId: string): void {
    const watcherIdx = this.watchers.findIndex((w) => w._id === watcherId);
    this.currSelected = this.watchers[watcherIdx];
    console.log('this.currSelected:', this.currSelected);
  }

  onDeleteWatcher(watcherId: string): void {
    const watcherIdx = this.watchers.findIndex((w) => w._id === watcherId);
    this.watchers.splice(watcherIdx, 1);
  }
}
