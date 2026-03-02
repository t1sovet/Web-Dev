import { Component, EventEmitter, Input, input, OnInit, output, Pipe, PipeTransform } from '@angular/core';
import { Card } from '../model/productm.model';

@Component({
  selector: 'app-prod-item',
  imports: [],
  templateUrl: './prod-item.html',
  styleUrl: './prod-item.css',
})
export class ProdItem implements OnInit {
  @Input() product!: Card;

  sendedId = output<number>();

  likesId = output<number>();


  @Input() selectedCateg!: number | null;
  sendedCateg = output<number>();



  urlLink = '';

  ngOnInit(): void {
    this.urlLink = encodeURIComponent('Check out this product: ' + this.product.name + ' \n' + this.product.link);
  }

  sendIdForDeleting() {
    this.sendedId.emit(this.product.id);
  }

  categorySort() {
    this.sendedCateg.emit(this.product.category.id);
  }

  isHighlited(): boolean {
    return this.product.category.id == this.selectedCateg;
  }
}
