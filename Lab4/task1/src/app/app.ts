import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { User } from './user/user';
import { Child } from './child';
import { Comments } from './comments';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { CarService } from './car.service';
import { LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';
import { ReversePipe } from './reverse.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [User, Child, Comments, RouterOutlet, RouterLink, ReactiveFormsModule, LowerCasePipe, DecimalPipe, DatePipe, CurrencyPipe, ReversePipe],
  template: `
    <nav>
      <a routerLink="/">Home</a>
      |
      <a routerLink="/user">User</a>
    </nav>
    <router-outlet />
    Hello {{ city }}, {{1 + 1}}
    <section><app-user /></section>
    @if (isLoggedIn) {
      <p>Welcome back, <app-user />!</p>
    } @else {
      <a href="url">Login</a>
    }
    @if (isServerRunning) {
      <p>Yes, the server is running</p>
    } @else {
      <p>No, the server is not running</p>
    }
    @for (os of operatingSystems; track os.id) {
      {{ os.name }}
    }
    @for (user of users; track user.id) {
      <p>Hi, {{ user.name }}</p>
    }
    <div [contentEditable]="isEditable"></div>
    <img alt="norka" [src]="imageURL" (mouseover)="showSecretMessage()"><br /> 
    <button (click)="greet()">{{ message }}</button>
    <app-user occupation="Angular Developer" />
    <app-user name="Simran" />
    <app-child (addItemEvent)="addItem($event)" />
    @for (item of items; track $index) {
      {{ item }}
    }
    <div>
      <h1>How I feel about Angular</h1>
      <article>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted. In fact, I think I'll say these exact same
          things again a few times.
        </p>
        <p>
          Angular is my favorite framework, and this is why. Angular has the coolest deferrable view
          feature that makes defer loading content the easiest and most ergonomic it could possibly
          be. The Angular community is also filled with amazing contributors and experts that create
          excellent content. The community is welcoming and friendly, and it really is the best
          community out there.
        </p>
        <p>
          I can't express enough how much I enjoy working with Angular. It offers the best developer
          experience I've ever had. I love that the Angular team puts their developers first and
          takes care to make us very happy. They genuinely want Angular to be the best framework it
          can be, and they're doing such an amazing job at it, too. This statement comes from my
          heart and is not at all copied and pasted.
        </p>
      </article>

      @defer (on viewport) {
        <comments />
      } @placeholder {
        <p>Future comments</p>
      } @loading (minimum 2s) {
        <p>Loading comments...</p>
      }
    </div>
    <form [formGroup]="profileForm" (ngSubmit)="handleSubmit()">
      <input type="text" formControlName="name" name="name" />
      <input type="email" formControlName="email" name="email" />
      <button type="submit" [disabled]="!profileForm.valid">Submit</button>
    </form>
    <h2>Profile Form</h2>
    <p>Name: {{ profileForm.value.name }}</p>
    <p>Email: {{ profileForm.value.email }}</p>
    <p> {{ carService.getCars() }} </p>
    <p>Car Listing: {{ display }}</p>
    {{ username | lowercase }}
    <ul>
      <li>Number with "decimal" {{ num | number: '3.2-2' }}</li>
      <li>Date with "date" {{ birthday | date: 'medium' }}</li>
      <li>Currency with "currency" {{ cost | currency }}</li>
    </ul>
    Reverse Machine: {{ word | reverse }} 
  `,
  styles: `
    :host {
      color: #a144eb;
    }
  `,
})

export class App {
  city = 'Almaty';
  isLoggedIn = true;
  isServerRunning = true;
  operatingSystems = [{id: 'win', name: 'Windows'}, {id: 'osx', name: 'MacOS'}, {id: 'linux', name: 'Linux'}];
  users = [
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
  ];
  isEditable = true;
  imageURL = 'https://s1.bloknot-volzhsky.ru/thumb/850x0xcut/upload/iblock/deb/gofib9k0psoibu8yv2faf8cas24oa1ly/34999612240_fa87337cae_c.jpg';
  greet() { 
    console.log('Hello, there 👋');
  }
  message = '';
  showSecretMessage() {
    this.message = 'Way to go 🚀';
  }
  items: string[] = [];
  addItem(item: string) {
    this.items.push(item);
  }
  profileForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  handleSubmit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
  carService = inject(CarService);
  display = this.carService.getCars().join(' ⭐️ ');
  username = 'yOunGTECh';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  word = 'You are a champion';
}
