import {Equipment} from "@app-core/interfaces/equipment.interface";
import {BaseEntry} from "@app-core/classes/base-entry.class";
import {CATEGORY} from "@app-core/enums/category.enum";

export class EquipmentDecorator extends BaseEntry {
  constructor(private readonly _equipment: Equipment) {
    super(_equipment);
    this.category = CATEGORY.EQUIPMENT;
    this.attack = this._equipment.attack;
    this.defense = this._equipment.defense;
  }
}
