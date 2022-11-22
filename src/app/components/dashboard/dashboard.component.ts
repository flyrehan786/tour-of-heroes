import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: any[] = [];
  constructor(private service: HeroService) { }

  ngOnInit(): void {
    this.heroes = this.service.heroes;
  }
  onHeroClick(value) {
    console.log(value);
  }
}
