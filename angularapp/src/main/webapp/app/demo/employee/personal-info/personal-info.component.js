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
var employee_1 = require('../model/employee');
var mode_1 = require('../model/mode');
var PersonalInfoComponent = (function () {
    function PersonalInfoComponent() {
        this.title = "Employee Personal Info";
        this.personalInfoEnum = PersonalInfoEnum;
        this.mode = mode_1.Mode;
        this.selectedMode = this.mode.VIEW_MODE;
        this.selectedOption = this.personalInfoEnum.BASIC;
        this.actionItems = [{ label: 'Update', command: function () { console.log("clicked"); } }];
        //this.employeeInfo = new EmployeeInfo();
        //this.employeeInfo.addressList = [new Address('current'), new Address('permanent')];
    }
    PersonalInfoComponent.prototype.ngOnInit = function () {
        this.employee = new employee_1.Employee();
    };
    PersonalInfoComponent.prototype.nextOption = function () {
        if (this.selectedOption == PersonalInfoEnum.BASIC) {
            this.selectedOption = PersonalInfoEnum.FAMILY;
        }
        else if (this.selectedOption == PersonalInfoEnum.FAMILY) {
            this.selectedOption = PersonalInfoEnum.PASSPORT;
        }
        else if (this.selectedOption == PersonalInfoEnum.PASSPORT) {
            this.selectedOption = PersonalInfoEnum.BANK_ACCOUNT;
        }
        else {
        }
    };
    PersonalInfoComponent.prototype.prevOption = function () {
        if (this.selectedOption == PersonalInfoEnum.BANK_ACCOUNT) {
            this.selectedOption = PersonalInfoEnum.PASSPORT;
        }
        else if (this.selectedOption == PersonalInfoEnum.PASSPORT) {
            this.selectedOption = PersonalInfoEnum.FAMILY;
        }
        else if (this.selectedOption == PersonalInfoEnum.FAMILY) {
            this.selectedOption = PersonalInfoEnum.BASIC;
        }
        else {
        }
    };
    PersonalInfoComponent.prototype.updateMode = function () {
        this.selectedMode = this.mode.EDIT_MODE;
        this.selectedOption = this.personalInfoEnum.BASIC;
    };
    PersonalInfoComponent.prototype.submit = function () {
        this.selectedMode = this.mode.VIEW_MODE;
        this.selectedOption = this.personalInfoEnum.BASIC;
    };
    PersonalInfoComponent = __decorate([
        core_1.Component({
            selector: 'employee-personal-info',
            templateUrl: 'app/demo/employee/personal-info/view/personal-info.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PersonalInfoComponent);
    return PersonalInfoComponent;
}());
exports.PersonalInfoComponent = PersonalInfoComponent;
(function (PersonalInfoEnum) {
    PersonalInfoEnum[PersonalInfoEnum["BASIC"] = 'Basic Details'] = "BASIC";
    PersonalInfoEnum[PersonalInfoEnum["FAMILY"] = 'Family Members'] = "FAMILY";
    PersonalInfoEnum[PersonalInfoEnum["PASSPORT"] = 'Passport Details'] = "PASSPORT";
    PersonalInfoEnum[PersonalInfoEnum["BANK_ACCOUNT"] = 'Bank Account'] = "BANK_ACCOUNT";
})(exports.PersonalInfoEnum || (exports.PersonalInfoEnum = {}));
var PersonalInfoEnum = exports.PersonalInfoEnum;
//# sourceMappingURL=personal-info.component.js.map