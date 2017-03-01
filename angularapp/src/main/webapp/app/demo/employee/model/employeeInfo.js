"use strict";
var address_1 = require('./address');
var passport_1 = require('./passport');
var bankAccount_1 = require('./bankAccount');
var EmployeeInfo = (function () {
    function EmployeeInfo() {
        this.addressList = [new address_1.Address('current'), new address_1.Address('permanent')];
        this.familyMemberList = [];
        this.passport = new passport_1.Passport();
        this.bankAccount = new bankAccount_1.BankAccount();
    }
    return EmployeeInfo;
}());
exports.EmployeeInfo = EmployeeInfo;
//# sourceMappingURL=employeeInfo.js.map