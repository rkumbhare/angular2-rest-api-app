import {NgModule} from '@angular/core';
import {FormsModule }from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {LocationStrategy, HashLocationStrategy, CommonModule} from '@angular/common';
// primeng
import {AccordionModule, DropdownModule, CalendarModule, FieldsetModule, 
        AutoCompleteModule, DataTableModule, SplitButtonModule} from 'primeng/primeng';
// custom components/directives/pipes
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {AppMenuComponent} from './app.menu.component';
import {DemoComponent} from './demo/demo.component';
import {PersonalInfoComponent} from "./demo/employee/personal-info/personal-info.component";
import {EmployeeBasicDetailsComponent} from './demo/employee/personal-info/basic-details.component';
import {EmployeeFamilyDetailsComponent} from './demo/employee/personal-info/family-details.component'
import {EmployeePassportDetailsComponent} from './demo/employee/personal-info/passport-details.component';
import {EmployeeBankAccoutDetailsComponent} from './demo/employee/personal-info/bank-account-details.component';

// shared
import {ActiveDirective} from './shared/directive/active.directive';

@NgModule({
    imports: [
        // core modules
        BrowserModule, FormsModule, CommonModule,
        // primeng modules
        AccordionModule, DropdownModule,CalendarModule,FieldsetModule,AutoCompleteModule,
        DataTableModule,SplitButtonModule,
        // router module
        RouterModule.forRoot(appRoutes, {useHash: true}),
    ],

    declarations: [
        AppComponent,
        AppMenuComponent,
        DemoComponent,
        PersonalInfoComponent,
        EmployeeBasicDetailsComponent,
        EmployeeFamilyDetailsComponent,
        EmployeePassportDetailsComponent,
        EmployeeBankAccoutDetailsComponent,

        // shared
        ActiveDirective,
    ],

    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
    ],

    bootstrap: [
        AppComponent
    ]

})
export class AppModule{
    
} 