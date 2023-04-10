import {Entry} from "@app-core/interfaces/entry.interface";
import {Creature} from "@app-core/interfaces/creature.interface";
import {CATEGORY} from "@app-core/enums/category.enum";
import {BaseEntry} from "@app-core/classes/base-entry.class";

export class CreatureDecorator extends BaseEntry {
  constructor(private readonly _creature: Creature) {
    super(_creature);
    this.category = CATEGORY.CREATURE;
    this.description = this._creature.description;
    this.drops = this._creature.drops || [];
    this.cooking_effect = this._creature.cooking_effect;
    this.hearts_recovered = this._creature.hearts_recovered;
  }
}
