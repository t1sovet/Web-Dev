import { Component, input } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user',
	imports: [NgOptimizedImage, FormsModule],
  template: `
	@if (occupation()) {
		<p>The user's occupation is {{occupation()}}</p>
		<p>{{ username }}'s favorite framework: {{ favoriteFramework }}</p>
		<p>Framework:</p>
		<label for="framework">
			Favorite Framework:
			<input id="framework" type="text" [(ngModel)]="favoriteFramework" />
		</label>
		<button (click)="showFramework()">Show Framework</button>
	}
	@if (name()) {
	  <p>The user's name is {{ name() }}</p>
		<p>Preferred Framework:</p>
		<ul>
			<li>
				Static Image:
				<img ngSrc="/logo.svg" alt="Angular logo" width="32" height="32" />
			</li>
			<li>
				Dynamic Image:
				<img [ngSrc]="logoUrl" [alt]="logoAlt" width="32" height="32" />
			</li>
		</ul>
	}
  `,
})
export class User {
  username = 'youngTech';
  occupation = input<string>();
  name = input<string>();
	logoUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pXQTat5xa_jxh8xM2p-AKDEXFPYgRqOI2Q&s'
	logoAlt = 'Angular logo';
	favoriteFramework = '';
	showFramework() {
		alert(this.favoriteFramework);
	}
}