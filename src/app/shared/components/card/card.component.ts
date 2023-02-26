import { Component, Input } from '@angular/core';
import { Bird } from "@app-core/interfaces/bird.interface";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() bird!: Bird;

}
