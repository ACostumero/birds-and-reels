import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonAttributes } from "@app-core/interfaces/common-attributes.interface";

export interface Material extends CommonAttributes {
  category: CATEGORY.MATERIALS,
  cooking_effect: string;
  hearts_recovered: number;
}
