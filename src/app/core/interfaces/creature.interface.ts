import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonEntry } from "@app-core/interfaces/common-attributes.interface";

export interface Creature extends CommonEntry {
  category: CATEGORY.CREATURE;
  drops: string[];
  cooking_effect: string,
  hearts_recovered: number,
}
