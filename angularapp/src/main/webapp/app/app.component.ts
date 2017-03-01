import { Component } from '@angular/core';
import {AuthUser} from './shared/model/authUser';

@Component({
    selector: 'myapp',
    templateUrl: 'app/view/app.component.html'
})

export class AppComponent {

    private title: string;
    private headerHeight: number = 50;
    private bodyMinHeight: number;
    private menubarHeight: number;
    private menuActive = true;
    private authUser: AuthUser;

    constructor() {
        this.title = "Welcome to Angular2 Application";
        let bodyHt: number = document.getElementsByTagName("body")[0].clientHeight;
        this.bodyMinHeight = bodyHt ;
        this.menubarHeight = bodyHt;
    }

}