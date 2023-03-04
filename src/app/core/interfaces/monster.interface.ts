import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonAttributes } from "@app-core/interfaces/common-attributes.interface";

export interface Monster extends CommonAttributes {
  category: CATEGORY.MONSTERS;
  drops: string[];
}
