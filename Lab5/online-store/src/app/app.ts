import { Component, signal } from '@angular/core';
import { ProdList } from './prod-list/prod-list';

@Component({
  selector: 'app-root',
  imports: [ProdList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
