import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class AppService {

    private showSidebarSubject = new Subject<string>();

    constructor() { }

    public showSideBar() {
        this.showSidebarSubject.next('show');
    }
    public getSidebarObservable() {
        return this.showSidebarSubject;
    }
}
