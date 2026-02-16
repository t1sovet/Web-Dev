import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 15 256Gb черный',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
      price: 569990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h16/hb1/86303746097182.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h44/he4/83559338672158.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/h0b/83559328448542.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5b/hca/83559328514078.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-256gb-chernyi-113137897/?c=750000000'
    },
    {
      id: 2,
      name: 'Смартфон Samsung Galaxy S24 Ultra 5G 12 ГБ/512 ГБ черный',
      description: 'Премиальный смартфон с AI-функциями и S Pen. Камера 200MP, экран Dynamic AMOLED 2X 6.8" и мощный процессор Snapdragon 8 Gen 3.',
      price: 549990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h76/h44/84963226419230.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h76/h44/84963226419230.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/h1b/84963226484766.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h23/h5e/84963576250398.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/haf/hac/84963576283166.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h5e/h6e/84963576414238.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-ultra-5g-12-gb-256-gb-fioletovyi-116043643/?c=750000000'
    },
    {
      id: 3,
      name: 'Apple MacBook Air 13 M2 256GB',
      description: 'Легкий и мощный ноутбук с чипом M2. Retina дисплей 13.6", до 18 часов автономной работы. Идеален для работы и учебы.',
      price: 549990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/h1e/67750482649118/apple-macbook-air-13-m2-256gb-2022-seryj-kosmos-103372682-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1c/h1e/67750482649118/apple-macbook-air-13-m2-256gb-2022-seryj-kosmos-103372682-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hbf/h4f/67750482911262/apple-macbook-air-13-m2-256gb-2022-seryj-kosmos-103372682-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h4c/h80/67750483173406/apple-macbook-air-13-m2-256gb-2022-seryj-kosmos-103372682-3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m2-256gb-2022-103372682'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim 1TB',
      description: 'Игровая консоль нового поколения с поддержкой 4K и 120fps. Ультрабыстрый SSD 1TB и революционный контроллер DualSense.',
      price: 329990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h92/67944976433182/sony-playstation-5-slim-1tb-belyj-107175804-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h92/67944976433182/sony-playstation-5-slim-1tb-belyj-107175804-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/hc3/67944976695326/sony-playstation-5-slim-1tb-belyj-107175804-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h86/hf4/67944976957470/sony-playstation-5-slim-1tb-belyj-107175804-3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-1tb-107175804'
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2nd generation',
      description: 'Беспроводные наушники с активным шумоподавлением. Адаптивная прозрачность, пространственный звук и до 6 часов работы.',
      price: 139990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h0c/67143533051934/apple-airpods-pro-2nd-generation-belyj-102298674-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7a/h0c/67143533051934/apple-airpods-pro-2nd-generation-belyj-102298674-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0d/h3d/67143533314078/apple-airpods-pro-2nd-generation-belyj-102298674-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha0/h6e/67143533576222/apple-airpods-pro-2nd-generation-belyj-102298674-3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-102298674'
    },
    {
      id: 6,
      name: 'Dyson V15 Detect Absolute',
      description: 'Беспроводной пылесос с лазерным обнаружением пыли. Мощное всасывание, LCD-дисплей и до 60 минут работы без подзарядки.',
      price: 399990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h3b/67143716864030/dyson-v15-detect-absolute-zeltyj-102304242-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h8b/h3b/67143716864030/dyson-v15-detect-absolute-zeltyj-102304242-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1e/h6c/67143717126174/dyson-v15-detect-absolute-zeltyj-102304242-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb1/h9d/67143717388318/dyson-v15-detect-absolute-zeltyj-102304242-3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-102304242'
    },
    {
      id: 7,
      name: 'LG OLED55C3 55" 4K Smart TV',
      description: 'OLED телевизор с идеальным черным цветом и яркими красками. Процессор α9 Gen6, поддержка Dolby Vision и HDMI 2.1 для gaming.',
      price: 649990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9d/h7b/67143845134366/lg-oled55c3rla-cernyj-102309622-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h9d/h7b/67143845134366/lg-oled55c3rla-cernyj-102309622-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/hac/67143845396510/lg-oled55c3rla-cernyj-102309622-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hc3/hdd/67143845658654/lg-oled55c3rla-cernyj-102309622-3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/lg-oled55c3rla-55-cernyj-102309622'
    },
    {
      id: 8,
      name: 'GoPro HERO12 Black',
      description: 'Экшн-камера для захвата приключений в 5.3K60. HDR видео, HyperSmooth 6.0 стабилизация и водонепроницаемость до 10м.',
      price: 249990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h7e/67144017461278/gopro-hero12-black-cernyj-102313332-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf4/h7e/67144017461278/gopro-hero12-black-cernyj-102313332-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h87/haf/67144017723422/gopro-hero12-black-cernyj-102313332-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1a/he0/67144017985566/gopro-hero12-black-cernyj-102313332-3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/gopro-hero12-black-102313332'
    },
    {
      id: 9,
      name: 'Apple Watch Series 9 GPS 45mm',
      description: 'Умные часы с ярким дисплеем и новым чипом S9. Мониторинг здоровья, фитнес-трекинг и до 18 часов автономной работы.',
      price: 249990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/h0e/67372133662750/apple-watch-series-9-gps-45mm-cernyj-106936322-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5e/h0e/67372133662750/apple-watch-series-9-gps-45mm-cernyj-106936322-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf1/h3f/67372133924894/apple-watch-series-9-gps-45mm-cernyj-106936322-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h70/67372134187038/apple-watch-series-9-gps-45mm-cernyj-106936322-3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-9-gps-45mm-106936322'
    },
    {
      id: 10,
      name: 'DJI Mini 4 Pro',
      description: 'Компактный дрон с 4K/60fps HDR камерой. Всенаправленное обнаружение препятствий и время полета до 34 минут.',
      price: 429990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/h5e/67372268658718/dji-mini-4-pro-fly-more-combo-plus-seryj-106938432-1.jpg',
      images: [
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb0/h5e/67372268658718/dji-mini-4-pro-fly-more-combo-plus-seryj-106938432-1.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h43/h8f/67372268920862/dji-mini-4-pro-fly-more-combo-plus-seryj-106938432-2.jpg',
        'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd6/hc0/67372269183006/dji-mini-4-pro-fly-more-combo-plus-seryj-106938432-3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/dji-mini-4-pro-fly-more-combo-plus-106938432'
    }
  ];

  ngOnInit(): void {
    // Component initialization logic if needed
  }
}