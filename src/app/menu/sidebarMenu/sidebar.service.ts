import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SidebarService {

  private showToggleSubject = new Subject<string>();

  constructor() { }

  public showToggleBar() {
    this.showToggleSubject.next('showToggle');
  }
  public getToggleBarObservable() {
    return this.showToggleSubject;
}}
