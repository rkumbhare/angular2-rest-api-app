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
var EmployeePassportDetailsComponent = (function () {
    function EmployeePassportDetailsComponent() {
        this.mode = mode_1.Mode;
        this.countryList = [
            { label: 'Select Country', value: undefined },
            { label: 'India', value: 'India' }
        ];
        this.cityList = [
            { label: 'Select City', value: undefined },
            { label: 'Nagpur', value: 'Nagpur' },
            { label: 'Mumbai', value: 'Mumbai' },
            { label: 'Pune', value: 'Pune' },
            { label: 'Banglore', value: 'Banglore' },
            { label: 'Bhopal', value: 'Bhopal' },
            { label: 'Indore', value: 'Indore' },
            { label: 'Chennai', value: 'Chennai' },
            { label: 'Hyderabad', value: 'Hyderabad' },
        ];
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employeeInfo_1.EmployeeInfo)
    ], EmployeePassportDetailsComponent.prototype, "employeeInfo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], EmployeePassportDetailsComponent.prototype, "selectedMode", void 0);
    EmployeePassportDetailsComponent = __decorate([
        core_1.Component({
            selector: 'employee-passport-details',
            templateUrl: 'app/demo/employee/personal-info/view/passport-details.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeePassportDetailsComponent);
    return EmployeePassportDetailsComponent;
}());
exports.EmployeePassportDetailsComponent = EmployeePassportDetailsComponent;
//# sourceMappingURL=passport-details.component.js.map