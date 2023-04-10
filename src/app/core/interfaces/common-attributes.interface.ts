import { CATEGORY } from "@app-core/enums/category.enum";

export interface CommonEntry {
  id: number;
  category: CATEGORY;
  image: string;
  name: string;
  common_locations: string[];
  description: string;
}
