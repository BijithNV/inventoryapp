import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public products:Array<Product> =  [
    {  id:1, name: 'Eastern Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:2, name: 'swad Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:3, name: 'Taste Buds Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:4, name: 'Eastern Garlic pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:5, name: 'Eastern Lemon pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:6, name: 'Eastern Tuna pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:7, name: 'Eastern Serdine pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:8, name: 'Eastern squids pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:9, name: 'Eastern tomoto pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:10, name: 'Melam Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 },
    {  id:11, name: 'Kroger Mango pickle 500g', code: 'mp500', category: { name: 'mango', code: '1', category: 1 }, unit: { name: 'PCS', code: 'PCS', category: 0 }, purchaseRate: 100, salesRate: 110 }

];

  constructor() { }

  ngOnInit() {
  }

}
