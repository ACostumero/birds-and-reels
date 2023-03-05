import { Component, Input } from '@angular/core';
import { TCategory } from "@app-core/types/category.type";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  private _cardInfo?: TCategory;

  @Input()
  set cardInfo(info: TCategory | undefined) {
    this._cardInfo = info;
  }
  get cardInfo() {
    return this._cardInfo;
  }



}
