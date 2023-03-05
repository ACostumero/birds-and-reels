import { Injectable } from "@angular/core";
import { CATEGORY } from "@app-core/enums/category.enum";
import { enumToValues } from "@app-core/utils/enums";
import { Observable, of } from "rxjs";

@Injectable()
export class CategoriesFacade {

  public readonly categories$: Observable<CATEGORY[]>;

  constructor() {
    this.categories$ = of(enumToValues(CATEGORY));
  }

}
