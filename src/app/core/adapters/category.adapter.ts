import { Injectable } from '@angular/core';
import {Adapter} from "@app-core/interfaces/adapter.interface";
import {TCategoryResponse, TCreatureResponse} from "@app-core/types/category.type";
import {TEntry} from "@app-core/types/entry.type";

@Injectable({
  providedIn: 'root'
})
export class CategoryAdapter implements Adapter<TCategoryResponse, TEntry[]>{

  adapt(element: TCategoryResponse): TEntry[] {
    if(this._isCreatureResponse(element.data)) {
      const { food, non_food } = element.data;
      return [...food, ...non_food];
    }
    return element.data;
  }

  private _isCreatureResponse(response: TEntry[] | TCreatureResponse): response is TCreatureResponse {
    const creatureResponseKeys = ['food', 'non_food'];
    return creatureResponseKeys.every((key) => response.hasOwnProperty(key))
  }
}
