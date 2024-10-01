import { Component } from '@angular/core';
import {PlayingCardComponent} from "./components/playing-card/playing-card.component";
import {Animal} from "./models/Animal.model";
import {SearchBarComponent} from "./components/search-bar/search-bar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PlayingCardComponent, SearchBarComponent],
  templateUrl:'./app.component.html',
  styleUrl:'./app.component.css',
})
export class AppComponent {

  animal1!: Animal;

  constructor() {
    this.animal1 = new Animal();
    this.animal1.name = "Blue Dragon"
  }

}
