import {Directive, ElementRef, Input, Inject, Renderer, TemplateRef, ViewContainerRef} from '@angular/core';


@Directive({
    selector: '[active]',
    
})
export class ActiveDirective{

    @Input() active: any;

    constructor(private el: ElementRef, private renderer: Renderer, 
                private _viewContainer: ViewContainerRef){
        
    }
}