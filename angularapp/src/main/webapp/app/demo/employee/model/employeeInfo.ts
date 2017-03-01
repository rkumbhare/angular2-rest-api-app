import {Address} from './address';
import {FamilyMember} from './familyMember';
import {Passport} from './passport';
import {BankAccount} from './bankAccount';

export class EmployeeInfo{
    public firstName: string;
    public lastName: string;
    public gender: string;
    public dob: string;
    public nationality: string;
    public maritalStatus: string;
    public emailId: string;
    public bloodGroup: string;
    public phone: string;
    public mobile: string;
    public addressList: Address[] = [new Address('current'), new Address('permanent')];
    public familyMemberList: FamilyMember[] = [];
    public passport: Passport = new Passport();
    public bankAccount: BankAccount = new BankAccount();

}