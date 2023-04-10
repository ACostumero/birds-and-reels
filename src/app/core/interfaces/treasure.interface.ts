import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonEntry } from "@app-core/interfaces/common-attributes.interface";

export interface Treasure extends CommonEntry {
  category: CATEGORY.TREASURE;
  drops: string[];
}
