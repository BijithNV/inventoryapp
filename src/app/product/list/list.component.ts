import { Component, OnInit } from '@angular/core';
import { Product, IProduct } from '../models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  public products:Observable<IProduct[]> = null;
  constructor(private productService:ProductService) { }

  ngOnInit() {
      this.products = this.productService.getAllProducts()
  }

  deleteProduct(product):void{
    const result = this.productService.deleteProduct(product);
    console.log(result);
  }

}
