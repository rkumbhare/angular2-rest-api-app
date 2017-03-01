import {Component, Input} from '@angular/core';
import {EmployeeInfo} from '../model/employeeInfo'
import {Mode} from '../model/mode';

@Component({
    selector: 'employee-bank-account-details',
    templateUrl: 'app/demo/employee/personal-info/view/bank-account-details.html'
})
export class EmployeeBankAccoutDetailsComponent{
    @Input() employeeInfo: EmployeeInfo;
    @Input() selectedMode: Mode;
    private mode = Mode;

    constructor(){

    }

}