import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { CategoryService } from "@app-core/http/category.service";
import { CategoryFacade } from "@app-features/categories/facades/category.facade";
import { CATEGORY } from "@app-core/enums/category.enum";
import { TCategory } from "@app-core/types/category.type";
import { isValueInStringEnum } from "@app-core/utils/enums";

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<TCategory[]> {

  constructor(
    private readonly _router: Router,
    private readonly _categoryFacade: CategoryFacade,
    private readonly _categoryService: CategoryService,
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TCategory[]> {
    const categoryName: string | null = route.paramMap.get('name');
    if(!categoryName || !isValueInStringEnum(CATEGORY, categoryName)) return of([]);
    return this._categoryService.get(categoryName).pipe(
      catchError(() => {
        this._router.navigate(['404']); // TODO: Real 404 route
        return of([]);
      }),
      map((collection: TCategory[] ) => {
        this._categoryFacade.setCategory(categoryName);
        this._categoryFacade.setTest();
        return collection;
      })
    );
  }
}
