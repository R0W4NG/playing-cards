import {Component, input, Input, InputSignal} from '@angular/core';
import {Animal} from "../../models/Animal.model";

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  animal: InputSignal<Animal> = input(new Animal(), {
    alias: 'my-animal'
  });
}
