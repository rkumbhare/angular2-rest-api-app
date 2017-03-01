"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
// primeng
var primeng_1 = require('primeng/primeng');
// custom components/directives/pipes
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var app_menu_component_1 = require('./app.menu.component');
var demo_component_1 = require('./demo/demo.component');
var personal_info_component_1 = require("./demo/employee/personal-info/personal-info.component");
var basic_details_component_1 = require('./demo/employee/personal-info/basic-details.component');
var family_details_component_1 = require('./demo/employee/personal-info/family-details.component');
var passport_details_component_1 = require('./demo/employee/personal-info/passport-details.component');
var bank_account_details_component_1 = require('./demo/employee/personal-info/bank-account-details.component');
// shared
var active_directive_1 = require('./shared/directive/active.directive');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                // core modules
                platform_browser_1.BrowserModule, forms_1.FormsModule, common_1.CommonModule,
                // primeng modules
                primeng_1.AccordionModule, primeng_1.DropdownModule, primeng_1.CalendarModule, primeng_1.FieldsetModule, primeng_1.AutoCompleteModule,
                primeng_1.DataTableModule, primeng_1.SplitButtonModule,
                // router module
                router_1.RouterModule.forRoot(app_routes_1.appRoutes, { useHash: true }),
            ],
            declarations: [
                app_component_1.AppComponent,
                app_menu_component_1.AppMenuComponent,
                demo_component_1.DemoComponent,
                personal_info_component_1.PersonalInfoComponent,
                basic_details_component_1.EmployeeBasicDetailsComponent,
                family_details_component_1.EmployeeFamilyDetailsComponent,
                passport_details_component_1.EmployeePassportDetailsComponent,
                bank_account_details_component_1.EmployeeBankAccoutDetailsComponent,
                // shared
                active_directive_1.ActiveDirective,
            ],
            providers: [
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
            ],
            bootstrap: [
                app_component_1.AppComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map