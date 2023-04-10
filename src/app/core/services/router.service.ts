import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from "@angular/router";
import { TEntryId } from "@app-core/types/entry.type";
import { ENTRY_PATH, FALLBACK_ROUTES } from "@app-core/constants/navigation.const";
import { HTTP_STATUS_CODE } from "@app-core/enums/http-error-code.enum";

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private readonly _router: Router) {
  }

  public openEntry(id: TEntryId) {
    this._router.navigate([ENTRY_PATH, id]);
  }

  public openErrorPage(path: string = FALLBACK_ROUTES[HTTP_STATUS_CODE.NOT_FOUND]) {
    this._router.navigate([path]);
  }

}
