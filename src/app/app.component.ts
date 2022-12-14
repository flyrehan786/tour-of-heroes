import { Component } from '@angular/core';
import { HeroService } from './services/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  history: any[] = [];
  title = 'ng-app';
  constructor(private serivce: HeroService) {
    this.history = this.serivce.history;
  }
}
