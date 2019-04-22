import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  private decimal_separator:string;

  transform(value: string, fractionSize:number = 0): any {
    if(parseFloat(value) % 1 != 0)
    {
      fractionSize = 2;
    }
    let [ integer, fraction = ""] = (parseFloat(value).toString() || "").toString().split(".");
 
    fraction = fractionSize > 0
      ? this.decimal_separator + (fraction).substring(0, fractionSize) : "";
    
    if(isNaN(parseFloat(integer)))
    {
          integer = "0";
    }
      return integer + fraction;
  }

}
