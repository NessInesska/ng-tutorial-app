import { Component, OnInit } from '@angular/core';

import { products } from '../../../mock/products';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  constructor() { }

  public products = products;

  ngOnInit() {
    console.log(products);
  }

  public share(): void {
    alert('Shared');
  }

}
