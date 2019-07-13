import { Component } from '@angular/core';

import { products } from '../../../mock/products';
import { Product } from '../../interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent {

  public products: Product[] = products;

  public share(): void {
    alert('Shared');
  }

}
