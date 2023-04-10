import {CommonEntry} from "@app-core/interfaces/common-attributes.interface";

export interface Entry extends CommonEntry {
  hasDrops: () => boolean;
  canAttack: () => boolean;
  canDefend: () => boolean;
  canRecoverHearts: () => boolean;
  hasCookingEffect: () => boolean;
  drops: string[];
  cooking_effect: string;
  hearts_recovered: number;
  attack: number;
  defense: number;
}
