import { Creature } from "@app-core/interfaces/creature.interface";
import { Equipment } from "@app-core/interfaces/equipment.interface";
import { Material } from "@app-core/interfaces/material.interface";
import { Monster } from "@app-core/interfaces/monster.interface";
import { Treasure } from "@app-core/interfaces/treasure.interface";

export type TCategory = Creature | Equipment | Material | Monster | Treasure;

export type TCreatureResponse = { food: TCategory[], non_food: TCategory[] }
export type TCategoryResponse = {data: TCategory[] | TCreatureResponse };
