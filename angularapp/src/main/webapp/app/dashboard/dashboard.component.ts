import { Component } from '@angular/core';


@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/view/dashboard.html'
})

export class DashboardComponent {

    private title: string;


    constructor() {
        this.title = "Welcome to Angular2 Application";
    }






}