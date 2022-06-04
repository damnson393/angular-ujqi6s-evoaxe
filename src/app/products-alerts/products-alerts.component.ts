import { Component, OnInit, Input, VERSION } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-products-alerts',
  template: `<p ngIf="product && product.price > 700"><button type="button">Notify Me</button></p>`,
  styleUrls: ['./products-alerts.component.css'],
})
export class ProductsAlertsComponent implements OnInit {
  
  @Input() product!: Product;
  constructor() {}

  ngOnInit(): void {}
}
export interface Nam{
  nm:string;
}
export const n:Nam = 
  {
    nm:VERSION.major
  }