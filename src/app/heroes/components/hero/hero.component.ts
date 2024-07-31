import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.capitalizedName} - ${this.age}`;
  }

  changeHeroeName(): void {
    this.name = 'spiderman';
  }

  changeHeroeAge(): void {
    this.age = 25;
  }

  resetHeroe(): void {
    this.name = 'ironman';
    this.age = 45;
  }
}
