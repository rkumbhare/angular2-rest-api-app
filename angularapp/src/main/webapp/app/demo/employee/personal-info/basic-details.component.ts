import { Component, Input } from '@angular/core';
import {EmployeeInfo} from '../model/employeeInfo';
import {Mode} from '../model/mode';

@Component({
    selector: 'employee-basic-details',
    templateUrl: 'app/demo/employee/personal-info/view/basic-details.html'
})
export class EmployeeBasicDetailsComponent {
    @Input() employeeInfo: EmployeeInfo;
    @Input() selectedMode: Mode;
    private mode = Mode;
    
    genders: any[] = [
        { label: 'Gender', value: undefined },
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ];
    bloodGroupList: any[] = [
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
    stateList: any[] = [
        { label: 'Select State', value: undefined },
        { label: 'Maharashtra', value: 'Maharashtra' },
        { label: 'Karnataka', value: 'Karnataka' },
        { label: 'MadhyaPradesh', value: 'MadhyaPradesh' },
        { label: 'TamilNadu', value: 'TamilNadu' },
        { label: 'AndhraPradesh', value: 'AndhraPradesh' },
    ];
    countryList: any[] = [
        { label: 'Select Country', value: undefined },
        { label: 'India', value: 'India' }
    ];
    maritalStatusList: any[] = [
        { label: 'Marital Status', value: undefined },
        { label: 'Married', value: 'Married' },
        { label: 'Unmarried', value: 'Unmarried' }
    ];
    employee: any = {};
}