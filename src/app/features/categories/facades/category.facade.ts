import { Injectable } from "@angular/core";
import { CATEGORY } from "@app-core/enums/category.enum";
import { Observable, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class CategoryFacade {

  public readonly _categorySource: Subject<CATEGORY> = new Subject<CATEGORY>();
  public readonly category$: Observable<CATEGORY> = this._categorySource.asObservable();

  public setCategory(value: CATEGORY) {
    console.log('setCategory', value)
    this._categorySource.next(value);
  }

}
