import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonAttributes } from "@app-core/interfaces/common-attributes.interface";

export interface Equipment extends CommonAttributes {
  category: CATEGORY.EQUIPMENT;
  attack: number;
  defense: number;
}
