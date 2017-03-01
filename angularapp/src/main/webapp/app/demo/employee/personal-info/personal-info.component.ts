import {Component} from '@angular/core';
import {MenuItem} from 'primeng/primeng';
import {Employee} from '../model/employee';
import {Address} from '../model/address';
import {Mode} from '../model/mode';


@Component({
    selector: 'employee-personal-info',
    templateUrl: 'app/demo/employee/personal-info/view/personal-info.html'
})
export class PersonalInfoComponent{
    private title: string = "Employee Personal Info"
    private personalInfoEnum = PersonalInfoEnum;
    private mode = Mode;
    private selectedMode = this.mode.VIEW_MODE;
    private selectedOption = this.personalInfoEnum.BASIC;
    private employee: Employee;
    private actionItems: MenuItem[] = [{label: 'Update', command: () => {console.log("clicked")}}];

    constructor(){
        //this.employeeInfo = new EmployeeInfo();
        //this.employeeInfo.addressList = [new Address('current'), new Address('permanent')];
    }
    
    public ngOnInit(){
        this.employee = new Employee();
    }

    public nextOption(): void{
        if(this.selectedOption == PersonalInfoEnum.BASIC){
            this.selectedOption = PersonalInfoEnum.FAMILY;
        }else if(this.selectedOption == PersonalInfoEnum.FAMILY){
            this.selectedOption = PersonalInfoEnum.PASSPORT;
        }else if(this.selectedOption == PersonalInfoEnum.PASSPORT){
            this.selectedOption = PersonalInfoEnum.BANK_ACCOUNT;
        }else{
            // do nothing
        }
    }

    public prevOption(): void{
        if(this.selectedOption == PersonalInfoEnum.BANK_ACCOUNT){
            this.selectedOption = PersonalInfoEnum.PASSPORT;
        }else if(this.selectedOption == PersonalInfoEnum.PASSPORT){
            this.selectedOption = PersonalInfoEnum.FAMILY;
        }else if(this.selectedOption == PersonalInfoEnum.FAMILY){
            this.selectedOption = PersonalInfoEnum.BASIC;
        }else{
            // do nothing
        }
    }

    public updateMode(): void{
        this.selectedMode = this.mode.EDIT_MODE;
        this.selectedOption = this.personalInfoEnum.BASIC;
    }

    public submit(): void{
        this.selectedMode = this.mode.VIEW_MODE;
        this.selectedOption = this.personalInfoEnum.BASIC;
    }

}


export enum PersonalInfoEnum{
    BASIC= <any>'Basic Details',
    FAMILY = <any>'Family Members',
    PASSPORT = <any>'Passport Details',
    BANK_ACCOUNT = <any>'Bank Account'
}

