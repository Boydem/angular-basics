import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ShowTimeComponent } from './cmps/show-time/show-time.component';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { CountDownComponent } from './cmps/count-down/count-down.component';
import { ShowCoordsComponent } from './cmps/show-coords/show-coords.component';
import { WatcherAppComponent } from './cmps/watcher-app/watcher-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowTimeComponent,
    AppHeaderComponent,
    CountDownComponent,
    ShowCoordsComponent,
    WatcherAppComponent,
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
