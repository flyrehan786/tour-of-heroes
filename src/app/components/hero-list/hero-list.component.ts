import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';
@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {
  heroes: any[] = [];
  constructor(
    private router: Router,
    private service: HeroService) { }
  ngOnInit(): void {
    this.heroes = this.service.heroes;
  }
  onHeroClick(value) {
    this.router.navigate(['/details'], { queryParams: { name: value }});
  }
  onHeroDelete(value) {
    this.service.delete(value);
    this.heroes = this.service.heroes;
  }
}
