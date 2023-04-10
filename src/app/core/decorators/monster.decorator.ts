import {Monster} from "@app-core/interfaces/monster.interface";
import {CATEGORY} from "@app-core/enums/category.enum";
import {BaseEntry} from "@app-core/classes/base-entry.class";

export class MonsterDecorator extends BaseEntry {

  constructor(private readonly _monster: Monster) {
    super(_monster);
    this.category = CATEGORY.MONSTERS;
    this.drops = this._monster.drops || [];
  }
}
