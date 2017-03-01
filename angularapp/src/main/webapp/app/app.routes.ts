/**
 * defines App routes
 */

import {Routes} from '@angular/router';
import {DemoComponent} from './demo/demo.component';
import {PersonalInfoComponent} from './demo/employee/personal-info/personal-info.component';


export const appRoutes: Routes = [
    //{path: '', redirectTo: 'demo', pathMatch: 'full'},
    {path: 'demo', component: DemoComponent, 
        children: [
            {path: '', component: DemoComponent},
            {path: 'employee/personal-info', component: PersonalInfoComponent}
        ]
    }
];