import {Component, Input} from '@angular/core';
import {EmployeeInfo} from '../model/employeeInfo'
import {Mode} from '../model/mode';

@Component({
    selector: 'employee-passport-details',
    templateUrl: 'app/demo/employee/personal-info/view/passport-details.html'
})
export class EmployeePassportDetailsComponent{
    @Input() employeeInfo: EmployeeInfo;
    @Input() selectedMode: Mode;
    private mode = Mode;

    countryList: any[] = [
        { label: 'Select Country', value: undefined },
        { label: 'India', value: 'India' }
    ];
    cityList: any[] = [
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
    constructor(){

    }
}