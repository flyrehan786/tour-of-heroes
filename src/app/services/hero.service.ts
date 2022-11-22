import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroes = [1,2,3,4,5];
  history = [];
  constructor() { }
  add(hero) {
    this.history.push('New Hero Added. - value: ' + JSON.stringify(hero));
    this.heroes.push(hero);
  }
  delete(hero) {
    this.history.push('Deleting Hero. - value: ' + hero);
    this.heroes = this.heroes.filter(x => x !== hero);
  }
  update(oldValue, newValue) {
    this.history.push('Updating Hero. - old value: ' + oldValue + ', new value: ' + newValue);
    const index = this.heroes.findIndex(x => x == oldValue);
    this.heroes[index] = newValue;
  }
}