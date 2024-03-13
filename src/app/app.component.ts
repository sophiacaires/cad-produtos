import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  dinamicClass: string = "d-none";
  idAndName: string = "";
  productId: string = "";
  productName: string = "";
  description: string = "";
  priceAndQuantity: string = "";
  productPrice: string = "";
  productQuantity: string = "";

  onClickShow() {
    this.showAlert();
    this.splitInfo();
  }

  splitInfo(){
    const idAndNameItens = this.idAndName.split(" ");
    const priceAndQuantityItens = this.priceAndQuantity.split(" ");

    this.productId = idAndNameItens[0];
    this.productName = idAndNameItens.slice(1).join(" ");

    this.productPrice = priceAndQuantityItens[0];
    this.productQuantity = priceAndQuantityItens.slice(1).join(" ");
  }

  showAlert() {
    this.dinamicClass = "d-block";
  }

  hideAlert(){
    this.dinamicClass = "d-none";
  }
}
