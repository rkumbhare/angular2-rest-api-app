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
var employeeInfo_1 = require('../model/employeeInfo');
var mode_1 = require('../model/mode');
var EmployeeBankAccoutDetailsComponent = (function () {
    function EmployeeBankAccoutDetailsComponent() {
        this.mode = mode_1.Mode;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employeeInfo_1.EmployeeInfo)
    ], EmployeeBankAccoutDetailsComponent.prototype, "employeeInfo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], EmployeeBankAccoutDetailsComponent.prototype, "selectedMode", void 0);
    EmployeeBankAccoutDetailsComponent = __decorate([
        core_1.Component({
            selector: 'employee-bank-account-details',
            templateUrl: 'app/demo/employee/personal-info/view/bank-account-details.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeBankAccoutDetailsComponent);
    return EmployeeBankAccoutDetailsComponent;
}());
exports.EmployeeBankAccoutDetailsComponent = EmployeeBankAccoutDetailsComponent;
//# sourceMappingURL=bank-account-details.component.js.map