import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { Lookup } from '../models/lookup';
import { LookupService } from 'src/app/shared/lookup.service';
import { Product, IProduct } from '../models/product';
import { ProductService } from '../service/product.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit, OnDestroy {

  private observableSubscription:Array<Subscription> = [];
  formSubmitted = false;
  productForm = this.fb.group({});
  units:Observable<Lookup[]>;
  categories:Observable<Lookup[]>;

  constructor(private fb:FormBuilder,
    private lookupService:LookupService,
    private productService:ProductService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit() {
    this.productForm.addControl('name',new FormControl('',[Validators.required]));
    this.productForm.addControl('code',new FormControl('',[Validators.required]));
    this.productForm.addControl('category',new FormControl('',[Validators.required]));
    this.productForm.addControl('unit',new FormControl('',[Validators.required]));
    this.productForm.addControl('purchaseRate',new FormControl('',[Validators.required]));
    this.productForm.addControl('salesRate',new FormControl('',[Validators.required]));
    this.units = this.lookupService.getUnits();
    this.categories = this.lookupService.getProductCategories();

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
          this.productService.getProductById(Number.parseInt(params.get('id')))
        ));
  }

  ngOnDestroy(){
    this.observableSubscription.forEach(item => {
      item.unsubscribe();
      console.log(item, 'unsubscribed');
    });
  }

  save($event:any):void{

    this.formSubmitted = true;
    console.log(this.productForm.get('name').errors);
    if(!this.productForm.valid){
      return;
    }

    this.saveProduct();

    // navigate back to products list
    this.router.navigate(['/products']);
  }

  saveAndContinue($event:any):void{
    this.formSubmitted = true;
    console.log(this.productForm.get('name').errors);
    if(!this.productForm.valid){
      return;
    }

    this.saveProduct();

  }

  saveProduct():void{
    const product =new Product();
    // map data from form to product
    product.name = this.productForm.get('name').value;
    product.code = this.productForm.get('code').value;
    product.category = this.getLookupObjFromCode(this.productForm.get('category').value);
    product.unit =  this.getLookupObjFromCode(this.productForm.get('unit').value);
    product.purchaseRate =  this.productForm.get('purchaseRate').value;
    product.salesRate = this.productForm.get('salesRate').value;

    // save to database
    this.productService.addNewProduct(product);
  }


  getLookupObjFromCode(code:string):Lookup{
    var lookup:Lookup = null;
    const subscription = this.units.subscribe(lookups => {
      lookup  = lookups.find(item => item.code == code)
    })
    subscription.unsubscribe();
    return lookup;
  }

}
