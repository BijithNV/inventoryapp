import { Lookup } from './lookup';
export interface IProduct{
    id:number;
    name:string;
    code:string;
    category:Lookup;
    unit:Lookup
    salesRate:number;
    purchaseRate:number
}
export class Product {
    id:number;
    name:string;
    code:string;
    category:Lookup;
    unit:Lookup
    salesRate:number;
    purchaseRate:number
    constructor(name?:string,code?:string,category?:Lookup,unit?:Lookup,salesRate?:number, purchaseRate?:number){
        this.name = name;
        this.code = code;
        this.category = category;
        this.unit = unit;
        this.salesRate = salesRate;
        this.purchaseRate = purchaseRate;
    }
}
