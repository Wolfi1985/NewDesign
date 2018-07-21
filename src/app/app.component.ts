import { Component } from '@angular/core';
import { AppService } from './app.service';
import { SidebarService } from './menu/sidebarMenu/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private classToggleName: string;
  private classLogo: string;

  constructor(private appService: AppService, private sidebarService: SidebarService) {
    this.sidebarService.getToggleBarObservable().subscribe((val) => {
      this.setShow();
    });
    this.classToggleName = 'showToggle';
    this.classLogo = 'none';
  }

  public showSideBar() {
    this.appService.showSideBar();
    this.setHide();
  }
  public setHide() {
    this.classToggleName = 'hideToggle';
    this.classLogo = 'setLogo';
  }
  public setShow() {
    this.classToggleName = 'showToggle';
    this.classLogo = 'none';
  }
  public getClass() {
    return this.classToggleName;
  }
  public getLogoClass() {
    return this.classLogo;
  }
}
