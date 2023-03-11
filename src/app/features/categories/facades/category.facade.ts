import { Injectable } from "@angular/core";
import { CATEGORY } from "@app-core/enums/category.enum";
import { BehaviorSubject, filter, map, Observable, of, startWith, Subject, switchMap, tap } from "rxjs";
import { TCategory } from "@app-core/types/category.type";
import { CategoryService } from "@app-core/http/category.service";

@Injectable({providedIn: 'root'})
export class CategoryFacade {

  private readonly _categorySource: BehaviorSubject<CATEGORY | null> = new BehaviorSubject<CATEGORY | null>(null);
  public readonly category$: Observable<CATEGORY | null> = this._categorySource.asObservable();

  public readonly items$: Observable<TCategory[]> = of([]);

  constructor(private readonly _categoryService: CategoryService) {
    this.items$ = this.category$.pipe(
      filter(Boolean),
      switchMap((category: CATEGORY) => this.getItems(category)),
    )
  }

  public setCategory(value: CATEGORY) {
    this._categorySource.next(value);
  }

  public getItems(category: CATEGORY): Observable<TCategory[]> {
    return this._categoryService.get(category).pipe(
      map((items: TCategory[]) => items))
  }

}
