import {Treasure} from "@app-core/interfaces/treasure.interface";
import {CATEGORY} from "@app-core/enums/category.enum";
import {BaseEntry} from "@app-core/classes/base-entry.class";

export class TreasureDecorator extends BaseEntry {
  constructor(private readonly _treasure: Treasure) {
    super(_treasure);
    this.category = CATEGORY.TREASURE;
    this.drops = this._treasure.drops || [];
  }
}
