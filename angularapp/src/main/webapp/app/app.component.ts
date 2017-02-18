import {Component} from '@angular/core';


@Component({
    selector: 'myapp',
    templateUrl: 'app/view/app.component.html'
})

export class AppComponent{
    
    private title: string;

    constructor(){
        this.title = "Welcome to Angular2 Application";
    }

}