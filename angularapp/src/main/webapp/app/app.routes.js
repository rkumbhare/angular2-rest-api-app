/**
 * defines App routes
 */
"use strict";
var demo_component_1 = require('./demo/demo.component');
var personal_info_component_1 = require('./demo/employee/personal-info/personal-info.component');
exports.appRoutes = [
    //{path: '', redirectTo: 'demo', pathMatch: 'full'},
    { path: 'demo', component: demo_component_1.DemoComponent,
        children: [
            { path: '', component: demo_component_1.DemoComponent },
            { path: 'employee/personal-info', component: personal_info_component_1.PersonalInfoComponent }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map