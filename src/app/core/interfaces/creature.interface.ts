import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonAttributes } from "@app-core/interfaces/common-attributes.interface";

export interface Creature extends CommonAttributes{
  category: CATEGORY.CREATURE;
  drops: string[];
  cooking_effect?: string,
  hearts_recovered?: string,
}
