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
var EmployeeBasicDetailsComponent = (function () {
    function EmployeeBasicDetailsComponent() {
        this.mode = mode_1.Mode;
        this.genders = [
            { label: 'Gender', value: undefined },
            { label: 'Male', value: 'Male' },
            { label: 'Female', value: 'Female' }
        ];
        this.bloodGroupList = [
            { label: 'Blood Group', value: undefined },
            { label: 'A+', value: 'A+' },
            { label: 'A-', value: 'A-' },
            { label: 'B+', value: 'B+' },
            { label: 'B-', value: 'B-' },
            { label: 'AB+', value: 'AB+' },
            { label: 'AB-', value: 'AB-' },
            { label: 'O+', value: 'O+' },
            { label: 'O-', value: 'O-' },
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
        this.stateList = [
            { label: 'Select State', value: undefined },
            { label: 'Maharashtra', value: 'Maharashtra' },
            { label: 'Karnataka', value: 'Karnataka' },
            { label: 'MadhyaPradesh', value: 'MadhyaPradesh' },
            { label: 'TamilNadu', value: 'TamilNadu' },
            { label: 'AndhraPradesh', value: 'AndhraPradesh' },
        ];
        this.countryList = [
            { label: 'Select Country', value: undefined },
            { label: 'India', value: 'India' }
        ];
        this.maritalStatusList = [
            { label: 'Marital Status', value: undefined },
            { label: 'Married', value: 'Married' },
            { label: 'Unmarried', value: 'Unmarried' }
        ];
        this.employee = {};
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employeeInfo_1.EmployeeInfo)
    ], EmployeeBasicDetailsComponent.prototype, "employeeInfo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], EmployeeBasicDetailsComponent.prototype, "selectedMode", void 0);
    EmployeeBasicDetailsComponent = __decorate([
        core_1.Component({
            selector: 'employee-basic-details',
            templateUrl: 'app/demo/employee/personal-info/view/basic-details.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeBasicDetailsComponent);
    return EmployeeBasicDetailsComponent;
}());
exports.EmployeeBasicDetailsComponent = EmployeeBasicDetailsComponent;
//# sourceMappingURL=basic-details.component.js.map