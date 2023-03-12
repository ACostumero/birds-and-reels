import { Injectable } from '@angular/core';
import { ApiService } from "@app-core/http/api.service";
import { CATEGORY } from "@app-core/enums/category.enum";
import { map } from "rxjs";
import { TCategory, TCategoryResponse, TCreatureResponse } from "@app-core/types/category.type";



@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private readonly _apiService: ApiService) { }

  get(category: CATEGORY) {
    const segment: string = `category/${category}`
    return this._apiService.get<TCategoryResponse>(segment).pipe(
      map((res: TCategoryResponse) => this._getCategoryResponse(res))
    );
  }

  private _isCreatureResponse(response: TCategory[] | TCreatureResponse): response is TCreatureResponse {
    const creatureResponseKeys = ['food', 'non_food'];
    return creatureResponseKeys.every((key) => response.hasOwnProperty(key))
  }

  private _getCategoryResponse(serviceResponse: TCategoryResponse) {
    if(this._isCreatureResponse(serviceResponse.data)) {
      const { food, non_food } = serviceResponse.data;
      return [...food, ...non_food];
    }
    return serviceResponse.data;
  }

}
