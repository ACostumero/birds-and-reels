import { Component, Input } from '@angular/core';
import {TEntry} from "@app-core/types/entry.type";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  private _cardInfo?: TEntry;

  @Input()
  set cardInfo(info: TEntry | undefined) {
    this._cardInfo = info;
  }
  get cardInfo() {
    return this._cardInfo;
  }



}
