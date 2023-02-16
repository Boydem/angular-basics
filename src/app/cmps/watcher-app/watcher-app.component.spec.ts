import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherAppComponent } from './watcher-app.component';

describe('WatcherAppComponent', () => {
  let component: WatcherAppComponent;
  let fixture: ComponentFixture<WatcherAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatcherAppComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatcherAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
