import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { CurrencyPipe } from './pipes/currency.pipe';

@NgModule({
  declarations: [NumberonlyDirective, CurrencyPipe],
  imports: [
    CommonModule
  ],
  exports:[NumberonlyDirective,CurrencyPipe]
})
export class SharedModule { }
