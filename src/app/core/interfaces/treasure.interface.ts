import { CATEGORY } from "@app-core/enums/category.enum";
import { CommonAttributes } from "@app-core/interfaces/common-attributes.interface";

export interface Treasure extends CommonAttributes{
  category: CATEGORY.TREASURE;
  drops: string[];
}
