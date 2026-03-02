import { Component, inject, OnInit, output, input } from '@angular/core';
import { KaspiS } from '../services/kaspi-s';
import { Card } from '../model/productm.model';
import { ProdItem } from '../prod-item/prod-item';


@Component({
  selector: 'app-prod-list',
  imports: [ProdItem],
  templateUrl: './prod-list.html',
  styleUrl: './prod-list.css',
})
export class ProdList implements OnInit {

  selectedCateg: number | null = null;

  private kaspiService = inject(KaspiS); // inject service 

  products: Card[] = []; // empty for copying 

  ngOnInit(): void {
    this.products = this.kaspiService.getProducts(); // copy from service 
  }

  handleDelete(iddel: number) {
    this.kaspiService.deleteProduct(iddel);
    this.products = this.kaspiService.getProducts();
  }

  handleCateg(catega: number) {
    this.selectedCateg = this.selectedCateg === catega ? null : catega;
  }

  handleLike(likid: number) {
    this.kaspiService.plusLike(likid);
    this.products = this.kaspiService.getProducts();
  }
}
