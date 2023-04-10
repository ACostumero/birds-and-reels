import {Material} from "@app-core/interfaces/material.interface";
import {BaseEntry} from "@app-core/classes/base-entry.class";
import {CATEGORY} from "@app-core/enums/category.enum";

export class MaterialDecorator extends BaseEntry {

  constructor(private readonly _material: Material) {
    super(_material);
    this.category = CATEGORY.MATERIALS;
    this.cooking_effect = this._material.cooking_effect;
    this.hearts_recovered = this._material.hearts_recovered;
  }
}
