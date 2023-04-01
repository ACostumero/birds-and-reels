import { Injectable } from "@angular/core";
import { CATEGORY } from "@app-core/enums/category.enum";
import {
  Observable, ReplaySubject,
  startWith,
  Subject,
  switchMap,
  takeUntil,
} from "rxjs";
import { CategoryService } from "@app-features/categories/services/category.service";
import {TEntry} from "@app-core/types/entry.type";

@Injectable()
export class CategoryFacade {

  private readonly _destroySubscriptions$: Subject<void> = new Subject<void>();

  // In this case, I cannot use a Subject because the Subject does not keep the value in memory,
  // and when the component subscribes to the path category, the value is not persisted and the info
  // is not obtained. I discard the BehaviorSubject option because I don't need any initial value.
  // Therefore, the best solution in this case is to use a ReplaySubject with bufferSize of 1.
  private readonly _categorySource: ReplaySubject<CATEGORY> = new ReplaySubject<CATEGORY>(1);
  public readonly category$: Observable<CATEGORY> = this._categorySource.asObservable();

  public readonly items$: Observable<TEntry[]>;

  constructor(private readonly _categoryService: CategoryService) {
    this.items$ = this.category$.pipe(
      takeUntil(this._destroySubscriptions$),
      switchMap((category: CATEGORY) => this._getItems(category))
    );
  }

  private _getItems(category: CATEGORY): Observable<TEntry[]> {
    return this._categoryService.get(category).pipe(
      takeUntil(this._destroySubscriptions$),
      startWith([]) // Reset items before get news
    )
  }

  public setCategory(value: CATEGORY) {
    this._categorySource.next(value);
  }

  public onDestroy() {
    this._destroySubscriptions$.next();
  }

}
