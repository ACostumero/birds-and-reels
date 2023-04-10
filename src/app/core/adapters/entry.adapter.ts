import { Injectable } from '@angular/core';
import {Adapter} from "@app-core/interfaces/adapter.interface";
import {TEntry} from "@app-core/types/entry.type";
import {Entry} from "@app-core/interfaces/entry.interface";
import {CATEGORY} from "@app-core/enums/category.enum";
import {Treasure} from "@app-core/interfaces/treasure.interface";
import {TreasureDecorator} from "@app-core/decorators/treasure.decorator";
import {Equipment} from "@app-core/interfaces/equipment.interface";
import {Material} from "@app-core/interfaces/material.interface";
import {Monster} from "@app-core/interfaces/monster.interface";
import {Creature} from "@app-core/interfaces/creature.interface";
import {EquipmentDecorator} from "@app-core/decorators/equipment.decorator";
import {MaterialDecorator} from "@app-core/decorators/material.decorator";
import {MonsterDecorator} from "@app-core/decorators/monster.decorator";
import {CreatureDecorator} from "@app-core/decorators/creature.decorator";

@Injectable({
  providedIn: 'root'
})
export class EntryAdapter implements Adapter<TEntry, Entry>{

  private readonly _getDecoratorByCategory = {
    [CATEGORY.TREASURE]: (treasure: unknown): Entry => new TreasureDecorator(treasure as Treasure),
    [CATEGORY.EQUIPMENT]: (equipment: unknown): Entry => new EquipmentDecorator(equipment as Equipment),
    [CATEGORY.MATERIALS]: (material: unknown): Entry => new MaterialDecorator(material as Material),
    [CATEGORY.MONSTERS]: (monster: unknown): Entry => new MonsterDecorator(monster as Monster),
    [CATEGORY.CREATURE]: (creature: unknown): Entry => new CreatureDecorator(creature as Creature),
  }

  adapt(entry: TEntry): Entry {
    return this._getDecoratorByCategory[entry.category as CATEGORY](entry);
  }

}
