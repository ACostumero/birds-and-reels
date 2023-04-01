import { Injectable } from '@angular/core';
import { ApiService } from "@app-core/http/api.service";
import { CATEGORY } from "@app-core/enums/category.enum";
import { map, Observable } from "rxjs";
import { TCategoryResponse } from "@app-core/types/category.type";
import { CategoryAdapter } from "@app-core/adapters/category.adapter";
import { TEntry } from "@app-core/types/entry.type";


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private readonly _apiService: ApiService, private readonly _categoryAdapter: CategoryAdapter) {
  }

  public get(category: CATEGORY): Observable<TEntry[]> {
    const segment: string = `category/${category}`
    return this._apiService.get<TCategoryResponse>(segment).pipe(
      map((response: TCategoryResponse) => this._categoryAdapter.adapt(response))
    );
  }
}
