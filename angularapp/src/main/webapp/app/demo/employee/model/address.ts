export class Address{
    type: string;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    country: string;
    pincode: number;

    constructor(type: string){
        this.type = type;
    }
}