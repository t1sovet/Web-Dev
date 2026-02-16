// product-card.component.ts

import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product!: Product;

  selectedImage: string = '';
  currentImageIndex: number = 0;
  shareDropdownOpen: boolean = false;

  ngOnInit(): void {
    if (this.product && this.product.images.length > 0) {
      this.selectedImage = this.product.images[0];
    }
  }

  getStarArray(): { full: boolean }[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push({ full: i <= Math.floor(this.product.rating) });
    }
    return stars;
  }

  hasHalfStar(): boolean {
    return this.product.rating % 1 !== 0;
  }

  formatPrice(): string {
    return this.product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  selectImage(imageUrl: string, event?: Event): void {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.selectedImage = imageUrl;
    this.currentImageIndex = this.product.images.indexOf(imageUrl);
  }

  navigateGallery(direction: 'prev' | 'next', event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (direction === 'next') {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
    } else {
      this.currentImageIndex = (this.currentImageIndex - 1 + this.product.images.length) % this.product.images.length;
    }

    this.selectedImage = this.product.images[this.currentImageIndex];
  }

  // Toggle share dropdown
  toggleShareDropdown(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.shareDropdownOpen = !this.shareDropdownOpen;
  }

  shareToWhatsApp(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    
    const message = `Посмотрите этот товар: ${this.product.name} - ${this.formatPrice()} ₸`;
    const encodedMessage = encodeURIComponent(message);
    const encodedLink = encodeURIComponent(this.product.link);
    const whatsappUrl = `https://wa.me/?text=${encodedMessage}%0A${encodedLink}`;
    
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    this.shareDropdownOpen = false;
  }

  shareToTelegram(event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    
    const text = encodeURIComponent(this.product.name);
    const url = encodeURIComponent(this.product.link);
    const telegramUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    
    window.open(telegramUrl, '_blank', 'noopener,noreferrer');
    this.shareDropdownOpen = false;
  }

  onImageClick(event: Event): void {
    event.preventDefault();
  }
}