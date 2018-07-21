import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';
import { SidebarService } from './sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit, OnDestroy {
  private className: string;

  constructor(private appService: AppService, private sidebarService: SidebarService) {
    appService.getSidebarObservable().subscribe((val) => {
      this.setShow();
    });
  }

  ngOnInit() {
    this.className = 'hide';
  }
  ngOnDestroy() {
    this.appService.getSidebarObservable().unsubscribe();
  }
  public setHide() {
    this.className = 'hide';
    this.sidebarService.showToggleBar();
  }
  public setShow() {
    this.className = 'show';
  }
  public getClass() {
    return this.className;
  }

}
