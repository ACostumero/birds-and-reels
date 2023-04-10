import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonEntry } from "@app-core/interfaces/common-attributes.interface";

export interface Monster extends CommonEntry {
  category: CATEGORY.MONSTERS;
  drops: string[];
}
