import { Injectable } from '@angular/core';
import { Card } from '../model/productm.model';
import { Category } from '../model/category.model';

@Injectable({
  providedIn: 'root',
})
export class KaspiS {
  Categs: Array<Category> = [
    {
      id: 1,
      name: 'manga'
    },
    {
      id: 2,
      name: 'comic'
    },
    {
      id: 3,
      name: 'pop culture'
    },
    {
      id: 4,
      name: 'others'
    }
  ];

  kaspiItemsArray: Array<Card> = [
    {
      id: 1,
      name: 'Книга Флинн Й.: Sonic. Все или ничего. Комикс. Том 7',
      description: 'Приключения Соника и его друзей продолжаются!/tПеревод, верстка и леттеринг от команды фанатов Соника Diamond Dust.',
      price: 3975,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h11/h1b/64318880710686.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p62/26055950.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/p62/26055950.jpeg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/flinn-i-sonic-vse-ili-nichego-komiks-tom-7-103565771/?c=750000000',
      likes: 32,
      category: this.Categs[2]
    },
    {
      id: 2,
      name: 'Книга Бендис Б. М.: Современный Человек-Паук. Том 1.',
      description: 'Старшая школа, взросление, первые танцы - в молодости много ловушек. Смешайте их с сильной личной трагедией и суперсилой.',
      price: 6100,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p63/pac/4159631.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/p8e/58033652.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p2b/p8e/58033652.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/bendis-b-m-sovremennyi-chelovek-pauk-tom-1-sila-i-otvetstvennost--104295995/?c=750000000',
      likes: 19,
      category: this.Categs[2]
    },
    {
      id: 3,
      name: 'Книга Жеті әлем #0',
      description: 'Книга Жеті әлем #0 — захватывающее начало серии на казахском языке.',
      price: 600,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h4f/79833277825054.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h4f/79833277825054.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h0f/h4f/79833277825054.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/zhet-lem-0-109767797/?c=750000000',
      likes: 32,
      category: this.Categs[3]
    },
    {
      id: 4,
      name: 'Книга Флинн Й.: Sonic. Нежелательные последствия. Выпуск 1',
      description: 'Присоединяйтесь к новым приключениям сверхзвукового ежа и его друзей!',
      price: 5950,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfe/h2a/64361679519774.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h2a/64361679519774.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hfe/h2a/64361679519774.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/flinn-i-sonic-nezhelatel-nye-posledstvija-vypusk-1-perevod-ot-diamond-dust-i-syenduka--101938902/?c=750000000',
      likes: 32,
      category: this.Categs[2]
    },
    {
      id: 5,
      name: 'Книга Дейв Пилки: Итбас пен Марғаш',
      description: 'Увлекательный комикс от Дейва Пилки, который подарит детям множество ярких эмоций и приключений.',
      price: 6400,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p8d/p5c/17695542.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/p5c/17695542.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8d/p5c/17695542.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/deiv-pilki-itbas-pen-mar-ash-132112025/?c=750000000',
      likes: 32,
      category: this.Categs[2]
    },
    {
      id: 6,
      name: 'Книга Акутами Г.: Магическая битва. Часть 1',
      description: 'Однажды в руки школьников попадает высушенный палец Двуликого Сукуны, короля проклятий. И с этой секунды жизнь Итадори начинает круто меняться.',
      price: 8357,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pec/p9b/37032685.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p9b/37032685.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/p9b/37032685.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/akutami-g-magicheskaja-bitva-chast-1-dvulikii-sukuna-prokljatyi-plod-105137134/?c=750000000',
      likes: 12,
      category: this.Categs[0]
    },
    {
      id: 7,
      name: 'Книга Жеті әлем #5',
      description: 'Книга Жеті әлем #5 — продолжение захватывающей серии на казахском языке.',
      price: 700,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/hf0/86370380218398.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/hf0/86370380218398.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/hf0/86370380218398.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/zhet-lem-5-120763161/?c=750000000',
      likes: 33,
      category: this.Categs[3]
    },
    {
      id: 8,
      name: 'Книга Фудзимото Т.: Человек-бензопила. Часть 4',
      description: 'После ожесточенной схватки с Рэдзэ в жизни Дэндзи происходит внезапный поворот — юноша попадает в центр внимания СМИ.',
      price: 6750,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p94/p89/37032915.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p94/p89/37032915.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p94/p89/37032915.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/fudzimoto-t-chelovek-benzopila-chast-4-vo-sne-nastojaschaja-zhest--105200004/?c=750000000',
      likes: 11,
      category: this.Categs[0]
    },
    {
      id: 9,
      name: 'Книга Фудзимото Т.: Прощай, Эри',
      description: 'Комикс «Прощай, Эри» от Тацуки Фудзимото — уникальное произведение, сочетающее глубокую эмоциональность и визуальную выразительность.',
      price: 7647,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9c/pb7/17990079.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pb7/17990079.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p9c/pb7/17990079.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/fudzimoto-t-proschai-eri-132823172/?c=750000000',
      likes: 11,
      category: this.Categs[0]
    },
    {
      id: 10,
      name: 'Книга Исида С.: Токийский гуль: re. Кн. 2',
      description: 'Следователи ККГ оказываются в непростой ситуации, когда на подмогу «Древу Аогири» приходят Клоуны.',
      price: 11625,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p7f/pfd/36218783.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/pfd/36218783.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/pfd/36218783.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/isida-s-tokiiskii-gul-re-kn-2-100471143/?c=750000000',
      likes: 11,
      category: this.Categs[0]
    },
    {
      id: 11,
      name: 'Книга Араки Х.: Рохан в Лувре',
      description: 'Мангака Рохан Кисибэ отправляется в Париж, чтобы раскрыть тайну зловещей «самой чёрной в мире картины» — она сулит смерть любому, кто взглянет на неё.',
      price: 6933,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p09/p48/37777895.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p09/p48/37777895.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p09/p48/37777895.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/araki-h-rohan-v-luvre-130638852/?c=750000000',
      likes: 11,
      category: this.Categs[0]
    },
    {
      id: 12,
      name: 'Книга Каната К.: Милый дом Чи. Кн. 3',
      description: 'Освоившись в доме, малышка Чи отправилась покорять улицу, где встретила огромного кота по кличке Черныш.',
      price: 4820,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h38/hcb/63829478572062.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h38/hcb/63829478572062.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h38/hcb/63829478572062.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/kanata-k-milyi-dom-chi-kn-3-100048857/?c=750000000',
      likes: 11,
      category: this.Categs[1]
    },
    {
      id: 13,
      name: 'Книга Брид-Райсли К., Коутон С.: FNAF. Серебряные глаза',
      description: 'Освоившись в доме, малышка Чи отправилась покорять улицу, где встретила огромного кота по кличке Черныш.',
      price: 6179,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha2/h90/67098413596702.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h38/hcb/63829478572062.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h38/hcb/63829478572062.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/brid-raisli-k-kouton-s-fnaf-serebrjanye-glaza-graficheskii-roman-108134020/?c=750000000',
      likes: 11,
      category: this.Categs[0]
    },

  ];

  getProducts(): Card[] {
    return this.kaspiItemsArray;
  }

  deleteProduct(ida: number) {
    this.kaspiItemsArray = this.kaspiItemsArray.filter(p => p.id !== ida);
  }

  plusLike(id: number) {
    this.kaspiItemsArray = this.kaspiItemsArray.map(p => p.id === id
      ? { ...p, likes: p.likes + 1 }
      : p
    );
  }
}
