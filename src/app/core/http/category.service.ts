import { Injectable } from '@angular/core';
import { ApiService } from "@app-core/http/api.service";
import { CATEGORY } from "@app-core/enums/category.enum";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private readonly _apiService: ApiService) { }

  get(category: CATEGORY) {
    const segment: string = `category${category}`
    return this._apiService.get(segment);
  }
}
