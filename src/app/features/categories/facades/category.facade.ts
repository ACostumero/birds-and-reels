import { Injectable } from "@angular/core";
import { CATEGORY } from "@app-core/enums/category.enum";
import {
  filter,
  map,
  Observable, ReplaySubject,
  startWith,
  Subject,
  switchMap,
  takeUntil,
} from "rxjs";
import { TCategory } from "@app-core/types/category.type";
import { CategoryService } from "@app-core/http/category.service";

@Injectable()
export class CategoryFacade {

  private readonly _destroySubscriptions$: Subject<void> = new Subject<void>();

  // In this case, I cannot use a Subject because the Subject does not keep the value in memory,
  // and when the component subscribes to the path category, the value is not persisted and the info
  // is not obtained. I discard the BehaviorSubject option because I don't need any initial value.
  // Therefore, the best solution in this case is to use a ReplaySubject with bufferSize of 1.
  private readonly _categorySource: ReplaySubject<CATEGORY> = new ReplaySubject<CATEGORY>(1);
  public readonly category$: Observable<CATEGORY> = this._categorySource.asObservable();

  public readonly items$: Observable<TCategory[]>;

  constructor(private readonly _categoryService: CategoryService) {
    this.items$ = this.category$.pipe(
      takeUntil(this._destroySubscriptions$),
      filter(Boolean),
      switchMap((category: CATEGORY) => this.getItems(category)),
    );
  }

  public setCategory(value: CATEGORY) {
    this._categorySource.next(value);
  }

  public getItems(category: CATEGORY): Observable<TCategory[]> {
    return this._categoryService.get(category).pipe(
      takeUntil(this._destroySubscriptions$),
      startWith([]),
      map((items: TCategory[]) => items),
      )
  }

  public onDestroy() {
    this._destroySubscriptions$.next();
  }

}
