import { Component, Input } from '@angular/core';
import { EmployeeInfo } from '../model/employeeInfo';
import { FamilyMember } from '../model/familyMember';
import {Mode} from '../model/mode';


@Component({
    selector: 'employee-family-details',
    templateUrl: 'app/demo/employee/personal-info/view/family-details.html'
})
export class EmployeeFamilyDetailsComponent {
    @Input() employeeInfo: EmployeeInfo;
    @Input() selectedMode: Mode;
    private familyMember: FamilyMember = new FamilyMember();
    private mode = Mode;
    private relationList = ['Father', 'Mother', 'Sister', 'Brother', 'Grand Mother', 'Grand Father'];
    private occupationList = ['Professor', 'Engineer', 'Teacher', 'Labour', 'Merchant', 'Student', 'HouseWife'];
    private relations = [];
    private occupations = [];
    private editAction = false;

    constructor() {
    }


    public searchRelation($event): void {
        let query = $event.query.trim()
        if (query == '') {
            this.relations = [];
            return;
        }

        this.relations = this.relationList.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) != -1);
    }

    public searchOccupation($event): void {
        let query = $event.query.trim()
        if (query == '') {
            this.occupations = this.occupationList;
            return;
        }

        this.occupations = this.occupationList.filter(item => item.toLowerCase().indexOf(query.toLowerCase()) != -1);
    }

    public addMember(): void {
        this.familyMember.seqNo = this.employeeInfo.familyMemberList.length + 1;
        this.employeeInfo.familyMemberList.push(this.familyMember);
        console.log("New Family member is added");
        this.familyMember = new FamilyMember();
    }
    public edit(fmember): boolean {
        this.familyMember = Object.assign({}, fmember);
        this.editAction = true;
        return false;
    }
    public editMember(): void {
        for(let fmember in this.employeeInfo.familyMemberList){
            if(this.employeeInfo.familyMemberList[fmember].seqNo == this.familyMember.seqNo){
                this.employeeInfo.familyMemberList[fmember] = this.familyMember;
                break;
            }
        }
        this.editAction = false;
        this.familyMember = new FamilyMember();
    }
    public deleteMember(member): boolean {
        this.employeeInfo.familyMemberList = this.employeeInfo.familyMemberList.filter(item => {
            return item.seqNo != member.seqNo;
        });
        return false;
    }
}
