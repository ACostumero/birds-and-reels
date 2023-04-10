import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonEntry } from "@app-core/interfaces/common-attributes.interface";

export interface Material extends CommonEntry {
  category: CATEGORY.MATERIALS,
  cooking_effect: string;
  hearts_recovered: number;
}
