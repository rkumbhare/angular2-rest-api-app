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
var familyMember_1 = require('../model/familyMember');
var mode_1 = require('../model/mode');
var EmployeeFamilyDetailsComponent = (function () {
    function EmployeeFamilyDetailsComponent() {
        this.familyMember = new familyMember_1.FamilyMember();
        this.mode = mode_1.Mode;
        this.relationList = ['Father', 'Mother', 'Sister', 'Brother', 'Grand Mother', 'Grand Father'];
        this.occupationList = ['Professor', 'Engineer', 'Teacher', 'Labour', 'Merchant', 'Student', 'HouseWife'];
        this.relations = [];
        this.occupations = [];
        this.editAction = false;
    }
    EmployeeFamilyDetailsComponent.prototype.searchRelation = function ($event) {
        var query = $event.query.trim();
        if (query == '') {
            this.relations = [];
            return;
        }
        this.relations = this.relationList.filter(function (item) { return item.toLowerCase().indexOf(query.toLowerCase()) != -1; });
    };
    EmployeeFamilyDetailsComponent.prototype.searchOccupation = function ($event) {
        var query = $event.query.trim();
        if (query == '') {
            this.occupations = this.occupationList;
            return;
        }
        this.occupations = this.occupationList.filter(function (item) { return item.toLowerCase().indexOf(query.toLowerCase()) != -1; });
    };
    EmployeeFamilyDetailsComponent.prototype.addMember = function () {
        this.familyMember.seqNo = this.employeeInfo.familyMemberList.length + 1;
        this.employeeInfo.familyMemberList.push(this.familyMember);
        console.log("New Family member is added");
        this.familyMember = new familyMember_1.FamilyMember();
    };
    EmployeeFamilyDetailsComponent.prototype.edit = function (fmember) {
        this.familyMember = Object.assign({}, fmember);
        this.editAction = true;
        return false;
    };
    EmployeeFamilyDetailsComponent.prototype.editMember = function () {
        for (var fmember in this.employeeInfo.familyMemberList) {
            if (this.employeeInfo.familyMemberList[fmember].seqNo == this.familyMember.seqNo) {
                this.employeeInfo.familyMemberList[fmember] = this.familyMember;
                break;
            }
        }
        this.editAction = false;
        this.familyMember = new familyMember_1.FamilyMember();
    };
    EmployeeFamilyDetailsComponent.prototype.deleteMember = function (member) {
        this.employeeInfo.familyMemberList = this.employeeInfo.familyMemberList.filter(function (item) {
            return item.seqNo != member.seqNo;
        });
        return false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', employeeInfo_1.EmployeeInfo)
    ], EmployeeFamilyDetailsComponent.prototype, "employeeInfo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], EmployeeFamilyDetailsComponent.prototype, "selectedMode", void 0);
    EmployeeFamilyDetailsComponent = __decorate([
        core_1.Component({
            selector: 'employee-family-details',
            templateUrl: 'app/demo/employee/personal-info/view/family-details.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EmployeeFamilyDetailsComponent);
    return EmployeeFamilyDetailsComponent;
}());
exports.EmployeeFamilyDetailsComponent = EmployeeFamilyDetailsComponent;
//# sourceMappingURL=family-details.component.js.map