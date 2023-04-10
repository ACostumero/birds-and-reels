import {Entry} from "@app-core/interfaces/entry.interface";
import {CATEGORY} from "@app-core/enums/category.enum";
import {TEntry} from "@app-core/types/entry.type";

export class BaseEntry implements Entry {
  // Common
  public id: number = 0;
  public image: string = '';
  public name: string = '';
  public description: string = '';
  public common_locations: string[] = [];

  // Specific
  public category!: CATEGORY;
  public attack: number = 0;
  public cooking_effect: string = '';
  public defense: number = 0;
  public drops: string[] = [];
  public hearts_recovered: number = 0;

  constructor(entry: TEntry) {
    this.id = entry.id;
    this.name = entry.name;
    this.image = entry.image;
    this.description = entry.description;
    this.common_locations = entry.common_locations;
  }

  canAttack(): boolean {
    return this.attack > 0;
  }

  canDefend(): boolean {
    return this.defense > 0;
  }

  canRecoverHearts(): boolean {
    return this.hearts_recovered > 0;
  }

  hasCookingEffect(): boolean {
    return this.cooking_effect !== '';
  }

  hasDrops(): boolean {
    return !!this.drops.length;
  }

}
