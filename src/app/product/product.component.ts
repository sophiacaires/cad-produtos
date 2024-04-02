import { Component, OnInit } from '@angular/core';
import { Product } from '../../products';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  FormGroupProducts: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ProductService) {
    this.FormGroupProducts = formBuilder.group({
      idAndName: [''],
      description: [''],
      priceAndQuantity: ['']
    })
  }

  ngOnInit(): void {
    this.loadProducts()
  }

  loadProducts() {
    this.service.getProducts().subscribe({
      next: data => this.products = data
    })
  }

  save(){
    this.service.save(this.FormGroupProducts.value).subscribe({
      next: data => this.products.push(data)
    })
  }
}
