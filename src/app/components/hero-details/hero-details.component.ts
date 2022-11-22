import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  name="";
  constructor(
    private service: HeroService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) { }
  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.queryParamMap.get('name');
  } 
  onSubmit(val) {
    const oldValue = this.activatedRoute.snapshot.queryParamMap.get("name");
    this.service.update(oldValue, val.name);
    this.router.navigate(['/'])
  }
}
