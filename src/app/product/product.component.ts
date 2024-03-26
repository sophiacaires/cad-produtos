import { Component } from '@angular/core';
import { Product } from '../../products';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: Product[] = [];

  FormGroupProducts: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.FormGroupProducts = formBuilder.group({
      idAndName: [''],
      description: [''],
      priceAndQuantity: ['']
    })
  }

  save(){
    this.products.push(this.FormGroupProducts.value)
  }
}
