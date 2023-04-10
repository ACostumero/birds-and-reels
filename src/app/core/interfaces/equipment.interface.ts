import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonEntry } from "@app-core/interfaces/common-attributes.interface";

export interface Equipment extends CommonEntry {
  category: CATEGORY.EQUIPMENT;
  attack: number;
  defense: number;
}
