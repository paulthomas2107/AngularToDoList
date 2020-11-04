import { Component, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = '';

  constructor() {
    console.log('Hello world');
    this.title = this.changeName('Paulie');
  }

  //take and return string
  changeName(name: string): string {
    return name.toUpperCase();
  }
}
