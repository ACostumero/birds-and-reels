import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import {CATEGORY_ROUTES} from "@app-core/constants/navigation.const";
import {NavRoute} from "@app-core/interfaces/nav-route.interface";

@Injectable()
export class CategoriesFacade {

  public readonly categories$: Observable<NavRoute[]>;

  constructor() {
    this.categories$ = of(CATEGORY_ROUTES);
  }

}
