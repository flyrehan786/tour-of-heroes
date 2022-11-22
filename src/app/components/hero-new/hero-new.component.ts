import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from 'src/app/services/hero.service';

@Component({
  selector: 'app-hero-new',
  templateUrl: './hero-new.component.html',
  styleUrls: ['./hero-new.component.css']
})
export class HeroNewComponent implements OnInit {
  name: ""
  constructor(private service: HeroService, private router: Router) { }
  ngOnInit(): void {
  }
  onSubmit(val) {
    this.service.add(val.name);
    this.router.navigate(['/'])
  }
}
